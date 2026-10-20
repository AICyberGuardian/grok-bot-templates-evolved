export const REPO = process.env.GROK_BOT_REPO || "AICyberGuardian/grok-bot-templates-evolved";
export const UPSTREAM_REPO = "cobusgreyling/grok-bot-templates";
export const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
export const PAGES = process.env.GROK_BOT_PAGES || "https://aicyberguardian.github.io/grok-bot-templates-evolved";
export const GH = `https://github.com/${REPO}`;
export const START_URL = `${RAW}/START.md`;
export const NPX = `npx --yes github:${REPO}`;

export function profileUrl(t) {
  const rel = (t._rel || "").replace(/\\/g, "/");
  return `${RAW}/${rel}/PROFILE.md`;
}

export function treeUrl(t) {
  const rel = (t._rel || "").replace(/\\/g, "/");
  return `${GH}/tree/main/${rel}`;
}

export function teamUrl(team) {
  return `${RAW}/teams/${team.id}/team.yaml`;
}
