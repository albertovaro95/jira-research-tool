# Discovery y Research - Para Product Managers

Este command ayuda a Product Managers a realizar discovery y research sobre temas específicos, generando documentación estructurada y planes de investigación.

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Enfocar el discovery hacia la visión: simplificar operaciones para restaurantes y empoderar a los huéspedes
- Estructurar las preguntas de investigación alineadas con los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Priorizar áreas de investigación que contribuyan a las metas 2025
- Identificar métricas clave relevantes según el contexto del agente (tiempo ahorrado, frecuencia de visitas, NPS, etc.)
- Generar recomendaciones que impulsen más huéspedes leales y mejoren el margen

## 🔧 Agentes Técnicos

**IMPORTANTE:** Para evaluar viabilidad técnica y aspectos de implementación durante el discovery, consulta los agentes técnicos:

- **Frontend**: Si el discovery involucra componentes UI/UX, consulta `.cursor/agents/frontend-developer.md` para evaluar complejidad y patrones
- **Backend**: Si el discovery involucra APIs o arquitectura, consulta `.cursor/agents/hexagonal-backend-architect.md` para evaluar diseño técnico
- **UI/UX**: Para discovery sobre experiencia de usuario, consulta `.cursor/agents/ui-ux-analyzer.md` para análisis de diseño
- **QA**: Consulta `.cursor/agents/qa-criteria-validator.md` para identificar criterios de aceptación potenciales durante el discovery

## 📋 Fase 1: Definición del Tema de Research

### 1.1 Recopilar Información Inicial
El usuario proporcionará:
- **Tema de investigación**: Descripción del tema a investigar
- **Contexto**: ¿Por qué se necesita esta investigación?
- **Objetivos**: ¿Qué se espera descubrir o validar?
- **Alcance**: ¿Qué está dentro y fuera del scope?

### 1.2 Verificar Contexto en Jira (Opcional)
Si el tema está relacionado con un issue de Jira:
1. Buscar issues relacionados: `mcp_jira_execute_jql` con query apropiada
2. Leer issues relevantes: `mcp_jira_read_ticket` para contexto adicional
3. Identificar dependencias y relaciones

## 🔍 Fase 2: Plan de Discovery

### 2.1 Identificar Áreas de Investigación
Desglosar el tema en áreas específicas:
- **Problema de negocio**: ¿Qué problema estamos resolviendo?
- **Usuarios afectados**: ¿Quiénes son los usuarios objetivo?
- **Métricas actuales**: ¿Qué datos tenemos actualmente?
- **Hipótesis**: ¿Qué hipótesis queremos validar?
- **Riesgos y limitaciones**: ¿Qué riesgos hay en la implementación?

### 2.2 Definir Preguntas de Investigación
Crear lista de preguntas clave:
- Preguntas cuantitativas (datos, métricas)
- Preguntas cualitativas (comportamiento, motivaciones)
- Preguntas técnicas (viabilidad, arquitectura)
- Preguntas de negocio (ROI, priorización)

### 2.3 Identificar Fuentes de Datos
Para cada pregunta, identificar fuentes:
- **Analytics**: Amplitude, Google Analytics, BigQuery
- **Feedback de usuarios**: Encuestas, entrevistas, soporte
- **Datos internos**: Bases de datos, logs, métricas de producto
- **Investigación externa**: Benchmarks, estudios de mercado, competencia
- **Experimentos**: A/B tests, feature flags

## 📊 Fase 3: Estrategia de Research

### 3.1 Métodos de Investigación
Definir métodos según el tipo de pregunta:
- **Análisis cuantitativo**: Queries SQL, análisis de eventos, cohortes
- **Análisis cualitativo**: Entrevistas, encuestas, user testing
- **Análisis competitivo**: Research de mercado, análisis de features
- **Análisis técnico**: Proof of concepts, arquitectura, viabilidad

### 3.2 Plan de Ejecución
Crear timeline y responsables:
- Fase 1: Recopilación de datos (días X-Y)
- Fase 2: Análisis y síntesis (días Y-Z)
- Fase 3: Conclusiones y recomendaciones (día Z)

## 📝 Fase 4: Documentación de Research

### 4.1 Crear Documento de Research
Crear `.cursor/doc/research/{topic-slug}/research-plan.md` con:
- Resumen ejecutivo
- Contexto y objetivos
- Preguntas de investigación
- Fuentes de datos identificadas
- Plan de ejecución
- Timeline estimado

### 4.2 Crear Template de Findings
Crear `.cursor/doc/research/{topic-slug}/findings.md` con estructura:
- **Executive Summary**
- **Key Findings** (por área de investigación)
- **Data Sources Used**
- **Insights y Recomendaciones**
- **Próximos Pasos**
- **Apéndices** (queries, referencias, etc.)

### 4.3 Crear Queries y Scripts (si aplica)
Si se necesitan queries específicas:
- Crear `.cursor/doc/research/{topic-slug}/queries/` con:
  - Queries SQL para BigQuery
  - Queries para Amplitude
  - Scripts de análisis (Python, si aplica)

## 🎯 Fase 5: Síntesis y Recomendaciones

### 5.1 Analizar Hallazgos
Una vez recopilada la información:
- Identificar patrones y tendencias
- Validar o invalidar hipótesis
- Priorizar insights por impacto

### 5.2 Generar Recomendaciones
Crear sección de recomendaciones:
- **Acciones inmediatas**: Qué hacer ahora
- **Acciones a corto plazo**: Próximos 1-3 meses
- **Acciones a largo plazo**: Prnóximos 6-12 meses
- **Riesgos y mitigaciones**

### 5.3 Actualizar Issues de Jira (si aplica)
Si la research está relacionada con issues:
- Actualizar descripciones con findings: `mcp_jira_edit_ticket`
- Crear nuevos issues si se identifican oportunidades
- Vincular research documentación a los issues

## 🎯 Resultado Esperado

Al finalizar este proceso:
- ✅ Plan de discovery estructurado
- ✅ Preguntas de investigación definidas
- ✅ Fuentes de datos identificadas
- ✅ Documentación de research creada
- ✅ Recomendaciones y próximos pasos claros
- ✅ Issues de Jira actualizados (si aplica)

## 📌 Notas Importantes

- Adaptar el nivel de detalle según la complejidad del tema
- Si el tema es muy amplio, sugerir desglosarlo en sub-temas
- Mantener documentación actualizada conforme avanza la research
- Compartir findings con stakeholders relevantes
- Considerar crear un issue de Jira tipo "Research" o "Discovery" para tracking

