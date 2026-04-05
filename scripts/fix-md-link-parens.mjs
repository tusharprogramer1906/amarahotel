import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "lib", "blog-posts.ts")
let s = fs.readFileSync(fp, "utf8")

// Stray TS-escaped backslashes before closing ) in markdown links: ](url\\\)
s = s.replace(/\\{3}\)/g, ")")

fs.writeFileSync(fp, s, "utf8")
console.log("Fixed markdown link closings")
