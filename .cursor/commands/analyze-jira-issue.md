# Analizar Issue de Jira - Para Product Managers

Este command ayuda a Product Managers a analizar y entender issues de Jira para discovery y research.

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Alinear el análisis con la visión y estrategia de producto
- Evaluar cómo el issue contribuye a los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Considerar el impacto en las metas 2025 (Hard-to-Copy, ICP Customers Delighting, Margin Enhancing)
- Asegurar que las recomendaciones impulsen más huéspedes leales y simplifiquen operaciones

## 🔧 Agentes Técnicos

**IMPORTANTE:** Para análisis técnico profundo del issue, consulta los agentes técnicos según corresponda:

- **Frontend**: Si el issue involucra componentes React/UI, consulta `.cursor/agents/frontend-developer.md` para análisis de arquitectura frontend
- **Backend**: Si el issue involucra APIs o lógica de negocio, consulta `.cursor/agents/hexagonal-backend-architect.md` para análisis de arquitectura backend
- **QA**: Consulta `.cursor/agents/qa-criteria-validator.md` para evaluar y mejorar criterios de aceptación
- **UI/UX**: Si el issue tiene componentes visuales, consulta `.cursor/agents/ui-ux-analyzer.md` para análisis de diseño

## 📋 Fase 1: Lectura y Análisis de Jira Issue #$ARGUMENT$

### 1.1 Setup Inicial
1. Verificar conexión a Jira: `mcp_jira_list_projects`

### 1.2 Leer Issue de Jira
1. Leer ticket completo: `mcp_jira_read_ticket $ARGUMENT$`
2. Obtener detalles completos: `mcp_jira_get_ticket $ARGUMENT$`
3. Extraer información:
   - Título del issue
   - Descripción detallada
   - Criterios de aceptación (si es User Story)
   - Story Points
   - Prioridad
   - Estado actual
   - Tipo de issue (Epic, Story, Task, Bug)
   - Relaciones (padre, hijos, enlaces)

### 1.3 Análisis para Product Management
Analizar el issue desde la perspectiva de Product Manager:
- **Problema de negocio**: ¿Qué problema resuelve?
- **Valor para el usuario**: ¿Qué beneficios obtiene el usuario?
- **Métricas relevantes**: ¿Qué métricas se pueden usar para medir éxito?
- **Dependencias**: ¿Qué otros issues o features dependen de esto?
- **Riesgos**: ¿Qué riesgos hay en la implementación?

### 1.4 Discovery/Research
Si es necesario hacer discovery sobre el tema:
1. Identificar áreas de investigación necesarias
2. Sugerir preguntas de investigación
3. Proponer fuentes de datos (Amplitude, BigQuery, etc.)
4. Crear plan de research

## 📝 Fase 2: Documentación

### 2.1 Crear Documentación
Crear `.cursor/doc/$ARGUMENT$/analysis.md` con:
- Resumen del issue
- Análisis de negocio
- Métricas propuestas
- Plan de research (si aplica)
- Recomendaciones

### 2.2 Actualizar user_stories.md
Si es una User Story, actualizar `user_stories.md` con la información analizada.

## 🎯 Resultado Esperado

Al finalizar este proceso:
- ✅ Issue de Jira analizado completamente
- ✅ Documentación de análisis creada
- ✅ Plan de research/discovery (si aplica)
- ✅ Recomendaciones para el equipo

