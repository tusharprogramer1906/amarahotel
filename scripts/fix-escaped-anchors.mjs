import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "..", "lib", "blog-posts.ts")

let s = fs.readFileSync(filePath, "utf8")

// TS strings use href=\\\" for a literal " — match any run of backslashes before quotes
// Pattern: <a href= \* " URL \* " optional attrs > text </a>
function stripAnchors(input) {
  return input.replace(
    /<a href=(\\*)"([^"]+)"([^>]*)>([^<]*)<\/a>/g,
    (full, _leadSlashes, href, mid, text) => `[${text}](${href})`
  )
}

let prev
let rounds = 0
do {
  prev = s
  s = stripAnchors(s)
  rounds++
} while (s !== prev && rounds < 20)

fs.writeFileSync(filePath, s, "utf8")
console.log("Fixed anchors in", rounds, "round(s)")
