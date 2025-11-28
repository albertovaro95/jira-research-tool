<user_request>
#$ARGUMENTS
<user_request>

## 🤖 Contexto Estratégico

**IMPORTANTE:** Antes de comenzar, consulta y usa como guía el agente `.cursor/agents/product-manager-saas-restaurant.md` para:
- Alinear el plan con la visión y estrategia de producto
- Considerar los 4 pilares estratégicos (AUTOMATED, SMART, INTUITIVE, GUEST-CENTRIC) en el diseño
- Evaluar cómo el plan contribuye a las metas 2025
- Asegurar que las decisiones impulsen más huéspedes leales y simplifiquen operaciones
- Aplicar los principios de decisión del agente durante todo el proceso

## 🔧 Agentes Técnicos

**IMPORTANTE:** Durante la fase de **Advice**, usa los agentes técnicos apropiados en paralelo para obtener conocimiento y asesoramiento sobre el plan:

- **Frontend**: Si el plan involucra componentes React/UI, invoca `.cursor/agents/frontend-developer.md` para asesoramiento sobre arquitectura frontend
- **Backend**: Si el plan involucra APIs o lógica de negocio, invoca `.cursor/agents/hexagonal-backend-architect.md` para asesoramiento sobre arquitectura backend
- **QA**: Invoca `.cursor/agents/qa-criteria-validator.md` para definir criterios de aceptación y estrategias de testing
- **UI/UX**: Si el plan tiene componentes visuales, invoca `.cursor/agents/ui-ux-analyzer.md` para asesoramiento sobre diseño

At the end of this message, I will ask you to do something. Please follow the "Explore, Team Selection, Plan, Advice, Update, Clarification and Iterate" workflow when you start over the user_request.

# Create the session file
Create `.cursor/sessions/context_session_{feature_name}.md` where plan is going to be updated with all the future iterations and feedback

# Explore
First, explore the relevant files in the repository

# Team Selection (parallel execution if posible)
Select what subagents are going to be involved in the future advice phase, dont invoque them only let me know who are you going to ask advice and for what

# Plan
Next, think hard and write up a detailed implementation plan. Don't forget to include tests, components, and documentation. Use your judgement as to what is necessary, given the standards of this repo.

If there are things you still do not understand or questions you have for the user, pause here to ask them before continuing.

# Advice
Use in parallel the subagents needed to get knowledge and advice over the plan to get a complete implementation

If there are things you are not sure about, use parallel subagents to do some web research. They should only return useful information, no noise.

# Update
Update the context_session file with the final plan

# Clarification
Ask me questions about anything unclear giving the posible solutions if A) B) C) format to select:
- User scenarios
- Edge cases  
- Integration requirements
- Performance needs
- Dependencies

IMPORTANT Wait for my answers before continuing.

#Iterate
Evaluate the plan and iterate over it until have the final plan with the solution

#RULES
The target of this session is to create the plan DON'T implement it
- Consider Python/FastAPI for backend and React/Vite for frontend
- Use pytest for backend tests, Vitest/Jest for frontend tests
- This is a Product Management tool, focus on discovery and research capabilities

