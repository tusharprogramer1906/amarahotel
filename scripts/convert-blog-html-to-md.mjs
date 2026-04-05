/**
 * Convert HTML in blog-posts.ts content strings to Markdown.
 * Run: node scripts/convert-blog-html-to-md.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "..", "lib", "blog-posts.ts")

function convertHtmlToMd(fragment) {
  let t = fragment

  // 1) Anchors first (plain text inside links only)
  t = t.replace(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g, "[$2]($1)")

  // 2) Headings
  t = t.replace(/<h2>([^<]*)<\/h2>/g, "## $1")
  t = t.replace(/<h3>([^<]*)<\/h3>/g, "### $1")

  // 3) Strong (before lists so <li><strong> works)
  t = t.replace(/<strong>([^<]*)<\/strong>/g, "**$1**")

  // 4) Ordered lists
  t = t.replace(/<ol>([\s\S]*?)<\/ol>/g, (_, inner) => {
    let n = 0
    return inner
      .replace(/<li>([\s\S]*?)<\/li>/g, (_, c) => `${++n}. ${c.trim()}`)
      .trim()
  })

  // 5) Unordered lists
  t = t.replace(/<ul>([\s\S]*?)<\/ul>/g, (_, inner) => {
    return inner
      .replace(/<li>([\s\S]*?)<\/li>/g, (_, c) => `- ${c.trim()}`)
      .trim()
  })

  // 6) Italic blocks (may contain markdown links)
  t = t.replace(/<em>([\s\S]*?)<\/em>/g, "*$1*")

  // 7) Any remaining strong/em
  t = t.replace(/<strong>([^<]*)<\/strong>/g, "**$1**")
  t = t.replace(/<em>([\s\S]*?)<\/em>/g, "*$1*")

  // 8) Paragraph wrappers
  t = t.replace(/<\/?p>/g, "")

  return t
}

let s = fs.readFileSync(filePath, "utf8")

const lines = s.split("\n")
const out = []
const htmlLine =
  /<\/?(h2|h3|p|strong|em|ul|ol|li)|<a href/

for (const line of lines) {
  const m = line.match(/^(\s*)(")((?:\\.|[^"\\])*)(")(\s*,?)\s*$/)
  if (m && htmlLine.test(m[3])) {
    const converted = convertHtmlToMd(m[3])
    const escaped = converted.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    out.push(`${m[1]}${m[2]}${escaped}${m[4]}${m[5]}`)
  } else {
    out.push(line)
  }
}

s = out.join("\n")

fs.writeFileSync(filePath, s, "utf8")
console.log("Updated", filePath)
