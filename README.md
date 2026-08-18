<div align="center">
  <img src="assets/academica-mark.svg" width="92" alt="Academica">
  <h1>Academica MCP</h1>
  <p><strong>Scientific evidence infrastructure for AI agents.</strong></p>
  <p>Biomedical literature, clinical trials, physician-industry payments, and healthcare-provider records through four read-only Model Context Protocol servers.</p>

  [![MCP](https://img.shields.io/badge/MCP-Streamable_HTTP-e87070?style=flat-square)](https://modelcontextprotocol.io/)
  [![Access](https://img.shields.io/badge/access-read--only-111a2d?style=flat-square)](https://academica.sh/)
  [![Authentication](https://img.shields.io/badge/auth-Bearer-d75b5b?style=flat-square)](https://academica.sh/mcp/keys)
  [![License](https://img.shields.io/badge/license-MIT-59636e?style=flat-square)](LICENSE)

  [Get an API key](https://academica.sh/mcp/keys) · [Documentation](https://academica.sh/mcp) · [Report an issue](https://github.com/academica-sh/academica-mcp/issues)
</div>

---

## Four evidence surfaces. One protocol.

| | Server | Evidence surface | Plugin |
|---|---|---|---|
| ◉ | **PubMed** | Biomedical citations, abstracts, authorship, journals, and identifiers | `academica-pubmed` |
| ⌁ | **Clinical Trials** | Study protocols, recruitment status, interventions, eligibility, and outcomes | `academica-clinical-trials` |
| ◇ | **Open Payments** | CMS transfers of value, manufacturers, physicians, and ownership interests | `academica-open-payments` |
| ✣ | **Healthcare Providers** | NPI identities, specialties, taxonomies, credentials, and practice locations | `academica-hcp` |

## Install one server in under a minute

```text
/plugin marketplace add academica-sh/academica-mcp
/plugin install academica-pubmed@academica
```

Set the API key before loading the plugin:

```bash
export ACADEMICA_API_KEY="ak_…"
```

> [!IMPORTANT]
> **One repository does not mean four active servers.** This repository carries four independent plugin manifests. Install one, several, or all four. Each selected plugin connects to its hosted Academica endpoint.

## From research question to cited evidence

```mermaid
flowchart LR
    A[Research agent<br/>Claude · Cursor · MCP client]
    B[Academica MCP<br/>Authenticated read-only tools]
    C[Primary records<br/>Identifiers and provenance retained]
    A --> B --> C
```

## Hosted endpoints

| Server | Streamable HTTP endpoint | OpenAPI schema |
|---|---|---|
| PubMed | `https://academica.sh/api/mcp/pubmed` | [`openapi.json`](https://academica.sh/api/mcp/pubmed/openapi.json) |
| Clinical Trials | `https://academica.sh/api/mcp/clinical-trials` | [`openapi.json`](https://academica.sh/api/mcp/clinical-trials/openapi.json) |
| Open Payments | `https://academica.sh/api/mcp/open-payments` | [`openapi.json`](https://academica.sh/api/mcp/open-payments/openapi.json) |
| Healthcare Providers | `https://academica.sh/api/mcp/hcp` | [`openapi.json`](https://academica.sh/api/mcp/hcp/openapi.json) |

All four servers use Streamable HTTP and accept an Academica API key in the `Authorization: Bearer <key>` header.

## What a result preserves

Academica tools return structured evidence records rather than untraceable prose. Depending on the selected server, a result can retain:

- source identifiers such as PMID, NCT ID, NPI, and CMS record identifiers;
- official titles, statuses, dates, organizations, and named entities;
- study interventions, eligibility criteria, sponsors, and locations;
- payment categories, amounts, manufacturers, and covered recipients;
- provider credentials, taxonomies, specialties, and practice locations.

Source identifiers support inspection of the corresponding primary record. Retrieved records are research evidence, not medical advice, and absence from a result set does not establish absence from the underlying world.

## Client setup

<details open>
<summary><strong>Claude Code</strong></summary>

```text
/plugin marketplace add academica-sh/academica-mcp
/plugin install academica-pubmed@academica
```

Install additional evidence surfaces independently:

```text
/plugin install academica-clinical-trials@academica
/plugin install academica-open-payments@academica
/plugin install academica-hcp@academica
```
</details>

<details>
<summary><strong>Claude Team and Cowork</strong></summary>

Add each required endpoint as a Custom Web connector and provide the Academica key as Bearer authentication.

```text
Name: Academica PubMed
URL: https://academica.sh/api/mcp/pubmed
Authorization: Bearer <Academica API key>
```
</details>

<details>
<summary><strong>Cursor</strong></summary>

```json
{
  "mcpServers": {
    "academica-pubmed": {
      "url": "https://academica.sh/api/mcp/pubmed",
      "headers": {
        "Authorization": "Bearer ${env:ACADEMICA_API_KEY}"
      }
    }
  }
}
```
</details>

<details>
<summary><strong>Generic MCP clients</strong></summary>

```text
Transport: Streamable HTTP
URL: https://academica.sh/api/mcp/<server>
Header: Authorization: Bearer <Academica API key>
```

Valid server paths are `pubmed`, `clinical-trials`, `open-payments`, and `hcp`.
</details>

<details>
<summary><strong>ChatGPT Actions and OpenAPI clients</strong></summary>

Import the schema for the required evidence surface:

```text
https://academica.sh/api/mcp/pubmed/openapi.json
https://academica.sh/api/mcp/clinical-trials/openapi.json
https://academica.sh/api/mcp/open-payments/openapi.json
https://academica.sh/api/mcp/hcp/openapi.json
```

Use API Key authentication with the Bearer scheme. The privacy policy URL is `https://academica.sh/legal/privacy`.
</details>

## Built for evidence work

| Property | Contract |
|---|---|
| **Read-only by design** | Retrieval tools cannot modify upstream scientific or public records. |
| **Source-resolvable** | Stable identifiers support inspection of the underlying record. |
| **Scoped credentials** | User-issued keys support revocation and evidence-surface authorization. |
| **Composable** | Independent servers support focused agents and cross-surface workflows. |

## Repository map

```text
academica-mcp/
├── .claude-plugin/marketplace.json      # Claude Code marketplace catalog
├── plugins/
│   ├── academica-pubmed/                # Independent plugin manifest
│   ├── academica-clinical-trials/
│   ├── academica-open-payments/
│   └── academica-hcp/
└── registry/
    ├── pubmed/server.json               # Official MCP Registry metadata
    ├── clinical-trials/server.json
    ├── open-payments/server.json
    └── hcp/server.json
```

Cloning this repository downloads distribution metadata. It does not download the evidence corpora or start local servers; the manifests connect compatible clients to Academica's hosted endpoints.

## Security and policy

- Never commit an operational API key.
- Store `ACADEMICA_API_KEY` in the client environment or its protected credential store.
- Revoke exposed or unused keys at the [API key console](https://academica.sh/mcp/keys).
- Report security concerns privately to [sid@academica.sh](mailto:sid@academica.sh).

[Privacy policy](https://academica.sh/legal/privacy) · [Terms](https://academica.sh/legal/terms) · [MIT license](LICENSE)

---

<div align="center">
  <strong>Academica</strong><br>
  Scientific evidence infrastructure for AI agents<br>
  <a href="https://academica.sh">academica.sh</a>
</div>
