"""Generate the editor-card thumbnails for the code-only projects.

Projects with a live URL use a real screenshot instead; these cards exist so a
repo-only project still shows something honest, a real excerpt from its own
source. Run from the project root: python3 scripts/make-code-thumbnails.py
"""
import re, html, os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'projects')

KW = r'\b(pub|fn|mod|let|const|struct|enum|impl|use|return|for|in|if|match|Result|Ok|Err|async|await|def|class|import|from|export|new|interface|type)\b'

def hl(line, accent, string_col='#9ece6a', comment_col='#5c6773', kw_col=None):
    """Return SVG tspans for one line: comments dim, strings green, keywords accented."""
    kw_col = kw_col or accent
    stripped = line.strip()
    if stripped.startswith('//') or stripped.startswith('#'):
        return f'<tspan fill="{comment_col}">{html.escape(line)}</tspan>'
    out, i = [], 0
    for m in re.finditer(r'"[^"]*"|' + KW, line):
        if m.start() > i:
            out.append(f'<tspan>{html.escape(line[i:m.start()])}</tspan>')
        tok = m.group(0)
        col = string_col if tok.startswith('"') else kw_col
        out.append(f'<tspan fill="{col}">{html.escape(tok)}</tspan>')
        i = m.end()
    out.append(f'<tspan>{html.escape(line[i:])}</tspan>')
    return ''.join(out)

def card(name, filename, tag, accent, bg, lines):
    W, H = 600, 340
    p = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" '
         f'role="img" aria-label="{html.escape(name)} source">']
    p.append(f'''<defs><linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity=".07"/><stop offset="1" stop-color="#ffffff" stop-opacity=".02"/>
  </linearGradient></defs>''')
    p.append(f'<rect width="{W}" height="{H}" fill="{bg}"/>')
    p.append(f'<rect width="{W}" height="44" fill="url(#bar)"/>')
    p.append(f'<rect y="43" width="{W}" height="1" fill="#ffffff" fill-opacity=".08"/>')
    for i, c in enumerate(['#ff5f57', '#febc2e', '#28c840']):
        p.append(f'<circle cx="{26 + i*20}" cy="22" r="5.5" fill="{c}" fill-opacity=".75"/>')
    p.append(f'<text x="96" y="27" font-family="ui-monospace, DejaVu Sans Mono, monospace" font-size="13" '
             f'fill="#ffffff" fill-opacity=".55">{html.escape(filename)}</text>')
    p.append(f'<text x="{W-24}" y="27" text-anchor="end" font-family="Raleway, Helvetica, sans-serif" '
             f'font-size="12" font-weight="600" letter-spacing="1.2" fill="{accent}" '
             f'fill-opacity=".9">{html.escape(tag.upper())}</text>')
    y = 78
    for ln in lines:
        p.append(f'<text x="26" y="{y}" xml:space="preserve" font-family="ui-monospace, DejaVu Sans Mono, monospace" '
                 f'font-size="15.5" fill="#c8d3e0">{hl(ln, accent)}</text>')
        y += 27
    # accent rule along the bottom edge, tying the card to the project glow
    p.append(f'<rect x="0" y="{H-3}" width="{W}" height="3" fill="{accent}" fill-opacity=".85"/>')
    p.append('</svg>')
    open(os.path.join(OUT, f'{name}.svg'), 'w').write('\n'.join(p) + '\n')

card('onchain-rbac', 'programs/onchain-rbac/src/lib.rs', 'Anchor · Solana', '#a855f7', '#12091c', [
    '#[program]',
    'pub mod onchain_rbac {',
    '    pub fn create_role(',
    '        ctx: Context<CreateRole>,',
    '        permissions: u64,',
    '    ) -> Result<()> { .. }',
    '}',
])

card('smart-tx', 'src/stream/yellowstone.ts', 'gRPC · Jito', '#2dd4bf', '#04140f', [
    'const stream = new YellowstoneStream({',
    '  url, trackAccounts, highWaterMark,',
    '});',
    '',
    'stream.on("transaction", (tx) => {',
    '  bundler.submit(tx, tips.quote(tx));',
    '});',
])

card('terminal3', 'z-tenant-eligibility/src/verify.rs', 'Rust · TEE', '#fb923c', '#180d05', [
    '// Confirm a stored verdict is genuine and',
    '// current, and leak nothing beyond it.',
    'pub fn verify_attestation(',
    '    input: &[u8],',
    ') -> Result<Vec<u8>, String> {',
    '    validate_policy_id(&req.policy_id)?;',
    '}',
])

card('merlin', 'threshold/src/signing.rs', 'FROST 2-of-3', '#f59e0b', '#17110300'[:7], [
    '/// Aggregate signature shares into a',
    '/// final BIP-340 signature.',
    'pub fn aggregate(',
    '    signing_package: &SigningPackage,',
    '    shares: &BTreeMap<Id, SignatureShare>,',
    ') -> Result<Signature, Error> {',
    '}',
])

card('chainsentry', 'chainsentry.py', 'Bitcoin forensics', '#f43f5e', '#170610', [
    'def trace_funds(',
    '    client, address, visited,',
    '    depth, max_depth,',
    ') -> TreeNode:',
    '    # 1. mark visited  2. fetch txs',
    '    # 3. collect outputs  4. recurse',
])
print('written')
