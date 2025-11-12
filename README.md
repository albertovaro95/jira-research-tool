# jira-research-tool

Proyecto para interactuar con JIRA como Product Manager, crear comandos para enriquecer User Stories, crear epicas y User Stories asociadas, hacer discovery/research sobre ciertos temas, definir parte analítica de las user stories con herramientas como Amplitude o BigQuery

## 🚀 Inicio Rápido

### Opción 1: Usando Makefile (Recomendado)

```bash
# Instalar todas las dependencias
make install

# Levantar backend y frontend en paralelo
make dev
```

### Opción 2: Manual

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📁 Estructura del Proyecto

```
jira-research-tool/
├── backend/              # API FastAPI
├── frontend/             # Aplicación React con Vite
└── .cursor/              # Configuración Cursor (Agentes, Commands)
    ├── commands/         # Commands para Jira, discovery, research
    └── agents/           # Agentes especializados
```

## 🔧 Configuración

### 1. Configurar MCP de Jira y GitHub

1. Copia `.cursor/mcp.json.example` a `.cursor/mcp.json`
2. Edita `.cursor/mcp.json` con tus credenciales:
   - **Jira**: URL, email y API token
   - **GitHub**: Personal Access Token
3. Reinicia Cursor

### 2. Obtener Credenciales

#### API Token de Jira:
1. Ve a: https://id.atlassian.com/manage-profile/security/api-tokens
2. Haz clic en "Create API token"
3. Copia el token y pégalo en `.cursor/mcp.json`

#### Personal Access Token de GitHub:
1. Ve a: https://github.com/settings/tokens
2. Genera un nuevo token con permisos `repo` y `pull_requests`
3. Copia el token y pégalo en `.cursor/mcp.json`

## 📋 Commands Disponibles

### Jira
- `/enrich-us TICKET-ID` - Enriquecer una User Story de Jira
- `/analyze-jira-issue TICKET-ID` - Analizar issue de Jira para discovery/research

### Discovery y Research
- `/explore-plan "descripción"` - Crear plan de discovery/research
- `/create-new-gh-issue "descripción"` - Crear issue en GitHub

## 🎯 Uso para Product Managers

Este proyecto está diseñado para ayudar a Product Managers a:

1. **Enriquecer User Stories**: Usa `/enrich-us` para mejorar y detallar user stories en Jira
2. **Crear Epicas y User Stories**: Usa los commands de Jira para crear y gestionar epicas
3. **Discovery/Research**: Usa `/explore-plan` para estructurar investigación sobre temas
4. **Análisis Analítico**: Integración con herramientas como Amplitude o BigQuery (pendiente de implementar)

## 📝 Notas

Este proyecto fue generado usando el template de standart-ai-development.
Objetivo: Proyecto para Product Managers - Discovery/Research con JIRA
