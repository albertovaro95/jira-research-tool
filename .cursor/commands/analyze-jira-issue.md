# Analizar Issue de Jira - Para Product Managers

Este command ayuda a Product Managers a analizar y entender issues de Jira para discovery y research.

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
