# Academica MCP

Public distribution metadata for four read-only Academica evidence servers:

- PubMed: biomedical literature retrieval
- Clinical Trials: protocol and study-result retrieval
- Open Payments: CMS financial-disclosure retrieval
- Healthcare Providers: US NPI and taxonomy retrieval

Each server uses Streamable HTTP and requires an Academica API key in the
`Authorization: Bearer <key>` header. Keys are issued at
https://academica.sh/mcp/keys.

## Claude Code marketplace

```text
/plugin marketplace add cvxn-founder/academica-mcp
/plugin install academica-pubmed@academica
```

The marketplace contains four independently installable plugins. Set
`ACADEMICA_API_KEY` before loading a plugin.

## Server endpoints

| Server | Endpoint | Documentation |
|---|---|---|
| PubMed | `https://academica.sh/api/mcp/pubmed` | https://academica.sh/mcp/pubmed |
| Clinical Trials | `https://academica.sh/api/mcp/clinical-trials` | https://academica.sh/mcp/clinical-trials |
| Open Payments | `https://academica.sh/api/mcp/open-payments` | https://academica.sh/mcp/open-payments |
| Healthcare Providers | `https://academica.sh/api/mcp/hcp` | https://academica.sh/mcp/hcp |

Privacy policy: https://academica.sh/legal/privacy

Terms: https://academica.sh/legal/terms
