# Añadir Objetivos y KPIs a Jira Product Discovery

Este command ayuda a Product Managers a buscar objetivos empresariales con sus KPIs asociados y añadirlos a Jira Product Discovery de forma estructurada.

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Alinear los objetivos con la visión y estrategia de producto
- Estructurar objetivos que contribuyan a los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC)
- Definir KPIs que midan progreso hacia las metas 2025 (Hard-to-Copy, ICP Customers Delighting, Margin Enhancing)
- Incluir métricas clave del agente: tiempo ahorrado, frecuencia de visitas, retención, NPS, Product-Market Fit, margen por cliente, etc.
- Asegurar que los objetivos impulsen más huéspedes leales y simplifiquen operaciones

## 📋 Fase 1: Búsqueda de Objetivos Empresariales

### 1.1 Recopilar Información de la Empresa
El usuario proporcionará:
- **Nombre de la empresa**: Empresa objetivo
- **Contexto**: ¿Qué área/departamento/producto?
- **Período**: ¿Objetivos anuales, trimestrales, mensuales?
- **Fuentes disponibles**: ¿Dónde están documentados los objetivos? (OKRs, documentos estratégicos, etc.)

### 1.2 Búsqueda de Objetivos
Realizar búsqueda de objetivos empresariales:
- **Web Research**: Buscar información pública sobre objetivos de la empresa
- **Análisis de documentos**: Si hay documentos disponibles, analizarlos
- **OKRs existentes**: Si hay sistema de OKRs, identificar objetivos clave
- **Métricas de negocio**: Identificar métricas principales que la empresa trackea

### 1.3 Identificar KPIs Asociados
Para cada objetivo identificado:
- **KPI principal**: Métrica principal que mide el éxito del objetivo
- **KPIs secundarios**: Métricas de apoyo o leading indicators
- **Targets**: Valores objetivo o rangos esperados
- **Frecuencia de medición**: ¿Diario, semanal, mensual, trimestral?

## 📊 Fase 2: Estructuración de Objetivos y KPIs

### 2.1 Formato de Objetivo
Cada objetivo debe incluir:
- **Título**: Nombre claro y conciso del objetivo
- **Descripción**: Contexto y motivación del objetivo
- **Tipo**: ¿Estratégico, táctico, operacional?
- **Alcance**: ¿A qué área/producto/feature aplica?
- **Timeline**: Período de tiempo del objetivo

### 2.2 Formato de KPI
Cada KPI debe incluir:
- **Nombre**: Nombre descriptivo del KPI
- **Definición**: Qué mide exactamente
- **Fórmula/Cálculo**: Cómo se calcula (si aplica)
- **Target**: Valor objetivo
- **Actual**: Valor actual (si disponible)
- **Fuente de datos**: De dónde provienen los datos (Amplitude, BigQuery, etc.)
- **Frecuencia**: Con qué frecuencia se actualiza

### 2.3 Relaciones Objetivo-KPI
- Mapear qué KPIs pertenecen a cada objetivo
- Identificar KPIs compartidos entre objetivos
- Establecer jerarquía si hay objetivos padre-hijo

## 🔗 Fase 3: Integración con Jira Product Discovery

### 3.1 Verificar Proyecto de Jira
1. Listar proyectos: `mcp_jira_list_projects`
2. Identificar proyecto de Product Discovery o crear uno si no existe
3. Verificar tipos de issues disponibles

### 3.2 Crear Objetivos en Jira
Para cada objetivo identificado:
1. Usar `mcp_jira_create_ticket` con:
   - **project**: Proyecto de Product Discovery
   - **issuetype**: "Objective" o tipo equivalente (si existe)
   - **summary**: Título del objetivo
   - **description**: Descripción completa incluyendo:
     - Contexto y motivación
     - Alcance y timeline
     - Relación con objetivos padre (si aplica)
     - KPIs asociados (lista)

### 3.3 Crear KPIs en Jira
Para cada KPI:
1. Usar `mcp_jira_create_ticket` con:
   - **project**: Mismo proyecto de Product Discovery
   - **issuetype**: "KPI" o tipo equivalente (si existe), o "Task" como alternativa
   - **summary**: Nombre del KPI
   - **description**: Descripción completa incluyendo:
     - Definición del KPI
     - Fórmula o método de cálculo
     - Target y valor actual
     - Fuente de datos
     - Frecuencia de actualización
     - Objetivo(s) asociado(s)

### 3.4 Vincular Objetivos y KPIs
- Si el tipo de issue lo permite, usar campos de relación
- En la descripción, incluir referencias cruzadas con issue keys
- Usar `mcp_jira_edit_ticket` para actualizar relaciones si es necesario

## 📝 Fase 4: Documentación

### 4.1 Crear Documento de Objetivos
Crear `.cursor/doc/objectives/{company-name}/objectives-kpis.md` con:
- Resumen ejecutivo
- Lista de objetivos con sus issue keys
- Lista de KPIs con sus issue keys
- Mapeo objetivo-KPI
- Fuentes de datos
- Métricas de seguimiento

### 4.2 Crear Dashboard de Seguimiento
Crear `.cursor/doc/objectives/{company-name}/kpi-dashboard.md` con:
- Tabla de KPIs con valores actuales vs targets
- Estado de cada objetivo (en progreso, completado, en riesgo)
- Gráficos o visualizaciones sugeridas
- Frecuencia de actualización

### 4.3 Documentar Fuentes de Datos
Crear `.cursor/doc/objectives/{company-name}/data-sources.md` con:
- Lista de fuentes de datos (Amplitude, BigQuery, etc.)
- Queries o configuraciones necesarias para obtener cada KPI
- Scripts de automatización (si aplica)

## 🔄 Fase 5: Automatización y Seguimiento

### 5.1 Configurar Seguimiento
- Crear queries JQL para filtrar objetivos y KPIs
- Establecer recordatorios para actualización de métricas
- Configurar dashboards en Jira (si es posible)

### 5.2 Actualización Periódica
Definir proceso para:
- Crear queries JQL para filtrar objetivos y KPIs
- Establecer recordatorios para actualización de métricas
- Configurar dashboards en Jira (si es posible)

## 🎯 Resultado Esperado

Al finalizar este proceso:
- ✅ Objetivos empresariales identificados y documentados
- ✅ KPIs asociados a cada objetivo definidos
- ✅ Objetivos creados en Jira Product Discovery
- ✅ KPIs creados en Jira Product Discovery
- ✅ Relaciones objetivo-KPI establecidas
- ✅ Documentación completa generada
- ✅ Plan de seguimiento y actualización definido

## 📌 Notas Importantes

- Si Jira Product Discovery no tiene tipos de issue específicos, usar tipos genéricos (Epic, Story, Task) y estructurar la información en la descripción
- Validar que los tipos de issue "Objective" y "KPI" existan en el proyecto antes de crear tickets
- Si no existen, usar tipos alternativos y documentar la estructura en la descripción
- Mantener sincronización entre documentación y tickets de Jira
- Considerar crear un issue tipo "Dashboard" o "Tracking" para centralizar el seguimiento
- Si hay muchos objetivos, considerar agruparlos por área o tema en épicas padre

