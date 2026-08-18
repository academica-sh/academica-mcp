<div align="center">
  <img src="assets/academica-mark.svg" width="92" alt="Academica">
  <h1>Academica MCP</h1>
  <p><strong>Evidence infrastructure for scientific, healthcare, and financial agents.</strong></p>
  <p>Biomedical literature, clinical trials, physician-industry payments, healthcare-provider records, and SEC ownership filings through five read-only Model Context Protocol servers.</p>

  [![MCP](https://img.shields.io/badge/MCP-Streamable_HTTP-e87070?style=flat-square)](https://modelcontextprotocol.io/)
  [![Access](https://img.shields.io/badge/access-read--only-111a2d?style=flat-square)](https://academica.sh/)
  [![Authentication](https://img.shields.io/badge/auth-Bearer-d75b5b?style=flat-square)](https://academica.sh/mcp/keys)
  [![License](https://img.shields.io/badge/license-MIT-59636e?style=flat-square)](LICENSE)

  [Get an API key](https://academica.sh/mcp/keys) · [Documentation](https://academica.sh/mcp) · [Report an issue](https://github.com/academica-sh/academica-mcp/issues)
</div>

---

## Five evidence surfaces. One protocol.

| | Server | Evidence surface | Plugin |
|---|---|---|---|
| ◉ | **PubMed** | Biomedical citations, abstracts, authorship, journals, and identifiers | `academica-pubmed` |
| ⌁ | **Clinical Trials** | Study protocols, recruitment status, interventions, eligibility, and outcomes | `academica-clinical-trials` |
| ◇ | **Open Payments** | CMS transfers of value, manufacturers, physicians, and ownership interests | `academica-open-payments` |
| ✣ | **Healthcare Providers** | NPI identities, specialties, taxonomies, credentials, and practice locations | `academica-hcp` |
| § | **SEC Ownership & Flows** | 13F and N-PORT positions, manager portfolios, security holders, 13D/G, and Form 4 events | `academica-sec-ownership` |

## Install one server in under a minute with Claude Code

```text
/plugin marketplace add academica-sh/academica-mcp
/plugin install academica-pubmed@academica
```

Set the API key before loading the plugin:

```bash
export ACADEMICA_API_KEY="ak_…"
```

> [!IMPORTANT]
> **One repository is the distribution authority; activation remains client-specific.** Claude Code and Codex expose five independently installable plugins. Cursor, Pi, Hermes, and the optional aggregate configurations register five named servers together and let the client control which tools remain enabled.

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
| SEC Ownership & Flows | `https://academica.sh/api/mcp/sec-ownership` | [`openapi.json`](https://academica.sh/api/mcp/sec-ownership/openapi.json) |

All five servers use Streamable HTTP and accept an Academica API key in the `Authorization: Bearer <key>` header.

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
/plugin install academica-sec-ownership@academica
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

Install the repository as a Cursor Plugin. Under **Plugins → Configure**, set the required `ACADEMICA_API_KEY` variable. The native manifest registers all five servers without storing the key in the repository.
</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
export ACADEMICA_API_KEY="ak_…"
codex plugin marketplace add academica-sh/academica-mcp
codex plugin add academica-pubmed@academica
```

The Codex marketplace contains five independently installable plugins. Each uses native `bearer_token_env_var` credential resolution.
</details>

<details>
<summary><strong>OpenCode</strong></summary>

Copy or merge one file from [`clients/opencode`](clients/opencode) into the applicable `opencode.json`. Individual-server examples and an optional all-server configuration use `{env:ACADEMICA_API_KEY}` substitution with OAuth disabled.
</details>

<details>
<summary><strong>Hermes Agent</strong></summary>

Merge [`clients/hermes/config.yaml`](clients/hermes/config.yaml) into `~/.hermes/config.yaml` and expose `ACADEMICA_API_KEY` to Hermes. Five upstream-ready catalog manifests are provided under [`clients/hermes/catalog`](clients/hermes/catalog).
</details>

<details>
<summary><strong>DeepSeek Harness</strong></summary>

```bash
export ACADEMICA_API_KEY="ak_…"
dsh plugin --profile web add github:academica-sh/academica-mcp
```

The package mounts five instances of DeepSeek's official Streamable HTTP MCP client through [`cordis.patch.yml`](cordis.patch.yml). Installation is per Harness profile.
</details>

<details>
<summary><strong>Pi</strong></summary>

```bash
export ACADEMICA_API_KEY="ak_…"
pi install git:github.com/academica-sh/academica-mcp
```

The Pi package loads an Academica extension backed by `pi-mcp-adapter`. All five servers are available; individual entries can be enabled or disabled through the adapter controls.
</details>

<details>
<summary><strong>Smithery</strong></summary>

Smithery treats each hosted endpoint as an independent catalog server. The five publication records and the shared session-authorization schema are maintained under [`smithery`](smithery).

The session field accepts the complete authorization value:

```text
Bearer <Academica API key>
```

No key is stored in the repository or catalog metadata.
</details>

<details>
<summary><strong>Generic MCP clients</strong></summary>

```text
Transport: Streamable HTTP
URL: https://academica.sh/api/mcp/<server>
Header: Authorization: Bearer <Academica API key>
```

Valid server paths are `pubmed`, `clinical-trials`, `open-payments`, `hcp`, and `sec-ownership`.
</details>

<details>
<summary><strong>ChatGPT Actions and OpenAPI clients</strong></summary>

Import the schema for the required evidence surface:

```text
https://academica.sh/api/mcp/pubmed/openapi.json
https://academica.sh/api/mcp/clinical-trials/openapi.json
https://academica.sh/api/mcp/open-payments/openapi.json
https://academica.sh/api/mcp/hcp/openapi.json
https://academica.sh/api/mcp/sec-ownership/openapi.json
```

Use API Key authentication with the Bearer scheme. The privacy policy URL is `https://academica.sh/legal/privacy`.
</details>

## Client compatibility

| Client | Repository integration | Authentication | Selection model |
|---|---|---|---|
| Claude Code | `.claude-plugin/marketplace.json` plus five plugin packages | `ACADEMICA_API_KEY` environment substitution | Install each evidence surface independently |
| Cursor | `.cursor-plugin/plugin.json` | Required secret set under **Plugins → Configure** | One plugin exposes five named servers |
| Codex | `.agents/plugins/marketplace.json` plus five `.codex-plugin` manifests | Native `bearer_token_env_var` | Install each evidence surface independently |
| OpenCode | `clients/opencode/*.json` | `{env:ACADEMICA_API_KEY}` header substitution | Individual files plus optional `all.json` |
| Hermes Agent | `clients/hermes/config.yaml` | `${ACADEMICA_API_KEY}` header substitution | Five servers in one configuration |
| DeepSeek Harness | `package.json` plus `cordis.patch.yml` | Environment-backed header in the Cordis bundle | Five MCP-client instances per installed profile |
| Pi | `package.json` plus `extensions/academica-mcp.ts` | Environment-backed header through `pi-mcp-adapter` | One package; servers can be disabled individually |
| Smithery | Five hosted URL-server records under `smithery/` | Session-scoped `Authorization` header mapping | One catalog entry per evidence surface |
| Agent Plugins | Root `plugin.json` plus `mcp.json` | Client-managed; the portable standard stores no secret references | One portable plugin declares five servers |

The portable Agent Plugins files intentionally contain no Authorization header. Clients that require bearer authentication use the native integrations listed above.

### Verified distribution gates

- Root Agent Plugins manifests validate against the 1.0.0 schemas.
- All five Codex plugins declare native bearer-token environment-variable resolution.
- All six OpenCode configurations validate as JSON and retain OAuth-disabled bearer authentication.
- Hermes configuration and catalog manifests parse as YAML.
- The Pi package installs from a local Git source and exports a valid extension function.
- The npm package contains the Pi extension and DeepSeek Cordis bundle; dependency audit reports zero known vulnerabilities.
- Smithery publication records enumerate five hosted servers, and the session schema validates as JSON Schema 2020-12.
- All JSON manifests parse, and no operational API key is committed.

These checks prove packaging and configuration compatibility. Directory approval, npm publication, and authenticated evidence queries are separate release gates.

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
├── plugin.json                         # Open Plugins identity
├── mcp.json                            # Portable five-server MCP catalog
├── .cursor-plugin/plugin.json          # Cursor variables and authenticated MCPs
├── .agents/plugins/marketplace.json    # Codex marketplace catalog
├── .claude-plugin/marketplace.json      # Claude Code marketplace catalog
├── package.json                        # DeepSeek Harness and Pi package
├── cordis.patch.yml                    # DeepSeek MCP client bundle
├── extensions/                         # Pi MCP adapter extension
├── clients/                            # OpenCode and Hermes configurations
├── smithery/                           # Hosted-server publication records and session schema
├── plugins/
│   ├── academica-pubmed/                # Claude and Codex plugin manifests
│   ├── academica-clinical-trials/
│   ├── academica-open-payments/
│   ├── academica-hcp/
│   └── academica-sec-ownership/
└── registry/
    ├── pubmed/server.json               # Official MCP Registry metadata
    ├── clinical-trials/server.json
    ├── open-payments/server.json
    ├── hcp/server.json
    └── sec-ownership/server.json
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
