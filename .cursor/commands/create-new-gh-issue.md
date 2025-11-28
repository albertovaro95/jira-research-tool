<context_session_file>
#$ARGUMENTS
</context_session_file>

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Alinear la feature/bug/chore con la visión y estrategia de producto
- Evaluar cómo contribuye a los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Considerar el impacto en las metas 2025 al definir el problema y valor de usuario
- Asegurar que el valor de usuario esté alineado con simplificar operaciones o empoderar huéspedes
- Aplicar los principios de decisión del agente al estructurar el issue

## 🔧 Agentes Técnicos

**IMPORTANTE:** Para enriquecer el issue con detalles técnicos y de implementación, consulta los agentes técnicos apropiados:

- **Frontend**: Si la feature/bug involucra React/UI, consulta `.cursor/agents/frontend-developer.md` para detalles de implementación frontend
- **Backend**: Si la feature/bug involucra APIs o lógica de negocio, consulta `.cursor/agents/hexagonal-backend-architect.md` para detalles de arquitectura backend
- **QA**: Consulta `.cursor/agents/qa-criteria-validator.md` para incluir criterios de aceptación y casos de prueba en el issue
- **UI/UX**: Si la feature tiene componentes visuales, consulta `.cursor/agents/ui-ux-analyzer.md` para consideraciones de diseño

# Create New GitHub Issue for Feature
## Input
Feature/Bug/Chore plan: $ARGUMENTS

## Step 1: Analysis
- Analyze the feature/bug/chore idea provided
- Look at relevant context_session_file and code files to understand current and needed implementation

## Step 2: Draft Issue
Create an issue with this structure:

### Problem Statement
What problem does this solve? What are current limitations?

### User Value
What specific benefits will users get? Give concrete examples.

### Definition of Done
- Implementation complete with edge cases handled
- Unit tests added (>80% coverage)
  - Backend: pytest tests passing
  - Frontend: Vitest/Jest tests passing
- Integration tests for main flows
- Documentation updated
- Code review approved
- CI/CD passes
- Manual testing complete

### Manual Testing Checklist
- Basic flow: [specific steps]
- Edge case testing: [specific scenarios]
- Error handling: [error scenarios to test]
- Integration: [test with existing features]

## Step 3: Review
Show me the complete issue draft and ask: "Is this ready to create? Any changes needed?"

Wait for my approval.

## Step 4: Create Issue
After approval, use GitHub MCP:
```
mcp_github_create_issue(
  owner: "albertovaro95",
  repo: "jira-research-tool",
  title: "[Feature/bug/chore] YOUR_TITLE_HERE",
  body: "YOUR_ISSUE_CONTENT_HERE"
)
```

Tell me the issue number and URL when done.

## Remember
- Check actual code before suggesting solutions
- Use specific file names and paths
- Make testing steps concrete and actionable
- Focus on user benefits, not technical details
- Triage and use the correct term in the issue: it's a feature, a bug or a chore?

