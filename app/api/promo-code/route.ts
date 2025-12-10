import { NextRequest, NextResponse } from 'next/server';
import { validatePromoCode, incrementPromoCodeUsage } from '@/lib/db/queries';
import { getSupabaseClient, getPostgresClient } from '@/lib/db/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, amount } = body;

    if (!code || !amount) {
      return NextResponse.json(
        { error: 'Code and amount are required' },
        { status: 400 }
      );
    }

    const validation = await validatePromoCode(code, parseFloat(amount));

    if (!validation.valid) {
      return NextResponse.json(
        { valid: false, error: validation.error },
        { status: 200 }
      );
    }

    // Get promo code ID for usage tracking (will be used after successful booking)
    const client = await getSupabaseClient().catch(() => getPostgresClient());
    let promoCodeId = null;

    if (client && typeof client.from === 'function') {
      const { data } = await client
        .from('promo_codes')
        .select('id')
        .eq('code', code.toUpperCase())
        .single();
      promoCodeId = data?.id;
    } else {
      const result = await client.query(
        'SELECT id FROM promo_codes WHERE code = $1',
        [code.toUpperCase()]
      );
      promoCodeId = result.rows[0]?.id;
    }

    return NextResponse.json({
      valid: true,
      discount: validation.discount,
      promoCodeId,
    });
  } catch (error: any) {
    console.error('Promo code validation error:', error);
    return NextResponse.json(
      { error: 'Failed to validate promo code', message: error.message },
      { status: 500 }
    );
  }
}

