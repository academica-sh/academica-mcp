import { createMcpAdapter } from "pi-mcp-adapter";

const authorization = `Bearer ${process.env.ACADEMICA_API_KEY ?? ""}`;

export default createMcpAdapter({
  config: {
    mcpServers: {
      "academica-pubmed": {url: "https://academica.sh/api/mcp/pubmed", headers: {Authorization: authorization}},
      "academica-clinical-trials": {url: "https://academica.sh/api/mcp/clinical-trials", headers: {Authorization: authorization}},
      "academica-open-payments": {url: "https://academica.sh/api/mcp/open-payments", headers: {Authorization: authorization}},
      "academica-hcp": {url: "https://academica.sh/api/mcp/hcp", headers: {Authorization: authorization}},
      "academica-sec-ownership": {url: "https://academica.sh/api/mcp/sec-ownership", headers: {Authorization: authorization}},
      "academica-sec-filings": {url: "https://academica.sh/api/mcp/sec-filings", headers: {Authorization: authorization}}
    }
  }
});
