// Database client setup
// Supports both Supabase and direct Postgres connection

let dbClient: any = null;

// Supabase client
export async function getSupabaseClient() {
  if (typeof window !== 'undefined') {
    throw new Error('Supabase client should only be used on the server');
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    return createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
    throw error;
  }
}

// Postgres client (using pg)
export async function getPostgresClient() {
  if (typeof window !== 'undefined') {
    throw new Error('Postgres client should only be used on the server');
  }

  try {
    const { Pool } = await import('pg');
    
    if (!dbClient) {
      dbClient = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      });
    }

    return dbClient;
  } catch (error) {
    console.error('Error initializing Postgres client:', error);
    throw error;
  }
}

// Get database client (auto-detect)
export async function getDbClient() {
  // Prefer Supabase if configured
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return await getSupabaseClient();
  }
  
  // Fallback to Postgres
  if (process.env.DATABASE_URL) {
    return await getPostgresClient();
  }

  throw new Error('No database configuration found. Set NEXT_PUBLIC_SUPABASE_URL or DATABASE_URL');
}

// Helper to execute queries (works with both Supabase and Postgres)
export async function executeQuery(query: string, params?: any[]) {
  const client = await getDbClient();
  
  // Check if it's Supabase
  if (client && typeof client.from === 'function') {
    // This is a simplified version - you'll need to adapt based on your queries
    throw new Error('Use Supabase query builder methods directly');
  }
  
  // Postgres client
  if (client && typeof client.query === 'function') {
    return await client.query(query, params);
  }

  throw new Error('Unknown database client type');
}

