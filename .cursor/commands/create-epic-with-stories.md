# Crear Épica y User Stories - Para Product Managers

Este command ayuda a Product Managers a crear una épica en Jira junto con sus User Stories asociadas de forma estructurada.

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Alinear la épica y user stories con la visión y estrategia de producto
- Asegurar que las user stories contribuyan a los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Evaluar el impacto en las metas 2025 (Hard-to-Copy, ICP Customers Delighting, Margin Enhancing)
- Verificar que las user stories simplifiquen operaciones para restaurantes o empoderen a los huéspedes
- Aplicar los principios de decisión del agente al priorizar y estructurar las user stories

## 🔧 Agentes Técnicos

**IMPORTANTE:** Al crear las user stories, consulta los agentes técnicos apropiados para enriquecerlas con detalles técnicos:

- **Frontend**: Para user stories con componentes React/UI, consulta `.cursor/agents/frontend-developer.md`
- **Backend**: Para user stories con APIs o lógica de negocio, consulta `.cursor/agents/hexagonal-backend-architect.md`
- **QA**: Para cada user story, consulta `.cursor/agents/qa-criteria-validator.md` para definir criterios de aceptación
- **UI/UX**: Para user stories con componentes visuales, consulta `.cursor/agents/ui-ux-analyzer.md`

## 📋 Fase 1: Configuración Inicial

### 1.1 Verificar Conexión
1. Verificar conexión a Jira: `mcp_jira_list_projects`
2. Ospener lista de proyectos disponibles para confirmar el proyecto objetivo

### 1.2 Recopilar Información
El usuario proporcionará:
- **Proyecto**: Clave del proyecto de Jira (ej: PROJ)
- **Título de la Épica**: Nombre descriptivo de la épica
- **Descripción de la Épica**: Descripción detallada del objetivo de negocio
- **User Stories**: Lista de user stories a crear (título y descripción de cada una)

## 📝 Fase 2: Crear Épica

### 2.1 Crear Ticket de Épica
1. Usar `mcp_jira_create_ticket` con:
   - **project**: Clave del proyecto proporcionada
   - **issuetype**: "Epic"
   - **summary**: Título de la épica
   - **description**: Descripción completa de la épica incluyendo:
     - Objetivo de negocio
     - Contexto y motivación
     - Alcance general
     - Criterios de éxito

### 2.2 Guardar Información de la Épica
- Guardar el issue key de la épica creada (ej: PROJ-123)
- Este será el parent para todas las user stories

## 🎯 Fase 3: Crear User Stories

### 3.1 Para cada User Story:
1. **Antes de crear**, consulta los agentes técnicos apropiados para enriquecer los detalles:
   - Si involucra frontend: consulta `frontend-developer.md`
   - Si involucra backend: consulta `hexagonal-backend-architect.md`
   - Siempre consulta `qa-criteria-validator.md` para criterios de aceptación
   - Si tiene componentes visuales: consulta `ui-ux-analyzer.md`
2. Usar `mcp_jira_create_ticket` con:
   - **project**: Misma clave del proyecto
   - **issuetype**: "Story"
   - **parent**: Issue key de la épica creada
   - **summary**: Título de la user story (formato: "Como [rol], quiero [acción] para [beneficio]")
   - **description**: Descripción detallada incluyendo:
     - Contexto y motivación
     - Criterios de aceptación (formato Given-When-Then, consultar `qa-criteria-validator.md`)
     - Detalles técnicos según agentes consultados (arquitectura, componentes, endpoints, etc.)
     - Dependencias (si las hay)
     - Notas técnicas específicas

### 3.2 Validar User Stories
- Verificar que todas las user stories se crearon correctamente
- Confirmar que tienen la épica como parent
- Listar todas las user stories creadas con sus issue keys

## 📊 Fase 4: Documentación

### 4.1 Crear Documentación
Crear `.cursor/doc/epic-{epic-key}/epic-summary.md` con:
- Resumen de la épica
- Lista de todas las user stories creadas
- Issue keys de cada ticket
- Enlaces a los tickets en Jira
- Estructura jerárquica (Épica → User Stories)

### 4.2 Actualizar Registro
Si existe un archivo de registro de épicas, actualizarlo con la nueva información.

## 🎯 Resultado Esperado

Al finalizar este proceso:
- ✅ Épica creada en Jira con descripción completa
- ✅ Todas las user stories creadas y asociadas a la épica
- ✅ Documentación generada con la estructura completa
- ✅ Lista de issue keys para referencia rápida

## 📌 Notas Importantes

- Si el usuario no proporciona todos los detalles, preguntar antes de crear los tickets
- Validar que el tipo de issue "Epic" y "Story" estén disponibles en el proyecto
- Si hay errores al crear algún ticket, informar y continuar con los siguientes
- Mantener formato consistente en las descripciones de las user stories

