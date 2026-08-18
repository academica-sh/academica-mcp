# Smithery publication

Academica exposes four independently publishable Streamable HTTP servers. Smithery publishes each hosted URL as its own catalog entry; it does not build or host these servers from this repository.

| Qualified name | Hosted server URL |
|---|---|
| `@academica/pubmed` | `https://academica.sh/api/mcp/pubmed` |
| `@academica/clinical-trials` | `https://academica.sh/api/mcp/clinical-trials` |
| `@academica/open-payments` | `https://academica.sh/api/mcp/open-payments` |
| `@academica/hcp` | `https://academica.sh/api/mcp/hcp` |

The records are machine-readable in [`servers.json`](servers.json). The shared [`authorization.config-schema.json`](authorization.config-schema.json) maps a session-scoped value into the upstream `Authorization` header. Users enter the complete value in the form `Bearer <Academica API key>`; no credential is stored in this repository.

Publish through [Smithery's hosted-server form](https://smithery.ai/new), or use the current CLI form for each record:

```bash
smithery mcp publish "https://academica.sh/api/mcp/pubmed" \
  -n @academica/pubmed \
  --config-schema "$(jq -c . smithery/authorization.config-schema.json)"
```

Repeat with the remaining URL and qualified-name pairs. Namespace ownership, catalog review, and the resulting listing URLs are external Smithery release gates.

Current Smithery references: [Publish an MCP server](https://smithery.ai/docs/build/publish) and [Session configuration](https://smithery.ai/docs/build/session-config).
