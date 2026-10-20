import fs from "node:fs";
import path from "node:path";

const readmePath = "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/README.md";
const catalogPath = "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/data/catalog.json";

const links = {};

const filesToScan = [
  "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/README.md",
  "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/README.ja.md",
  "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/README.zh.md",
  "E:/Projects/GrokBot_Docs/awesome-grok-bot-main/EVENTS.md",
  "E:/Projects/GrokBot_Docs/sources.md",
  "E:/Projects/GrokBot_Docs/dist/grok-bot-canonical.llm.md",
];

for (const f of filesToScan) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, "utf8");
    const re = /https:\/\/(?:x\.ai\/bot\/[a-zA-Z0-9_\-]+|getgrokbot\.com\/[a-zA-Z0-9_\-\/]+|twitter\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+|x\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+)/g;
    const matches = content.match(re) || [];
    for (const m of matches) {
      const slug = path.basename(m);
      links[slug] = m;
    }
  }
}

if (fs.existsSync(catalogPath)) {
  const data = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  for (const sec of data.sections || []) {
    for (const item of sec.items || []) {
      if (item.url && (item.url.includes("x.ai/bot") || item.url.includes("getgrokbot.com"))) {
        const slug = path.basename(item.url);
        links[slug] = item.url;
      }
    }
  }
}

console.log("Total unique extracted links:", Object.keys(links).length);
fs.writeFileSync("catalog/share-links.json", JSON.stringify({
  updated: new Date().toISOString().split("T")[0],
  note: "Official and community Add-to-Grok share URLs curated from xAI marketplace, getgrokbot.com, and Awesome Grok Bot.",
  count: Object.keys(links).length,
  links
}, null, 2) + "\n");
console.log("Wrote catalog/share-links.json");
