# Enrich User Story - Análisis y Mejora de Tickets de Jira

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Evaluar cómo la user story contribuye a la visión: simplificar operaciones para restaurantes o empoderar a los huéspedes
- Asegurar que la user story esté alineada con los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Considerar el impacto en las metas 2025 al enriquecer la descripción
- Aplicar los principios de decisión del agente al mejorar la user story

## 🔧 Agentes Técnicos

**IMPORTANTE:** Para enriquecer la user story con detalles técnicos, consulta y usa los siguientes agentes según corresponda:

- **Frontend**: Si la user story involucra componentes React, UI o frontend, consulta `.cursor/agents/frontend-developer.md` para:
  - Definir la estructura de componentes siguiendo arquitectura basada en features
  - Especificar hooks, servicios, schemas y queries necesarios
  - Detallar patrones de React Query y gestión de estado

- **Backend**: Si la user story involucra APIs, lógica de negocio o backend, consulta `.cursor/agents/hexagonal-backend-architect.md` para:
  - Definir la arquitectura hexagonal (dominio, aplicación, infraestructura)
  - Especificar casos de uso, repositorios y adaptadores
  - Detallar endpoints, modelos de dominio y validaciones

- **QA/Criterios de Aceptación**: Siempre consulta `.cursor/agents/qa-criteria-validator.md` para:
  - Definir criterios de aceptación claros y testables
  - Incluir casos edge y escenarios de error
  - Estructurar en formato Given-When-Then

- **UI/UX**: Si la user story tiene componentes visuales, consulta `.cursor/agents/ui-ux-analyzer.md` para:
  - Asegurar consistencia con el design system
  - Incluir consideraciones de accesibilidad y responsive design
  - Especificar patrones de interacción y estados visuales

Please analyze and fix the Jira ticket: $ARGUMENTS.

Follow these steps:

1. Use Jira MCP to get the ticket details, whether it is the ticket id/number, keywords referring to the ticket or indicating status, like "the one in progress"
2. You will act as a product expert with technical knowledge
3. Understand the problem described in the ticket
4. **Usa los agentes técnicos apropiados** para enriquecer los detalles técnicos de la user story
5. Decide whether or not the User Story is completely detailed according to product's best practices: Include a full description of the functionality, a comprehensive list of fields to be updated, the structure and URLs of the necessary endpoints, the files to be modified according to the architecture and best practices, the steps required for the task to be considered complete, how to update any relevant documentation or create unit tests, and non-functional requirements related to security, performance, etc
6. If the user story lacks the technical and specific detail necessary to allow the developer to be fully autonomous when completing it, provide an improved story that is clearer, more specific, and more concise in line with product best practices described in step 5. Use the technical context you will find in @documentation and the technical agents. Return it in markdown format.
7. Update ticket in Jira, adding the new content after the old one and marking each section with the h2 tags [original] and [enhanced]. Apply proper formatting to make it readable and visually clear, using appropriate text types (lists, code snippets...).
8. If the ticket status was "To refine", move the task to the "Pending refinement validation" column.

