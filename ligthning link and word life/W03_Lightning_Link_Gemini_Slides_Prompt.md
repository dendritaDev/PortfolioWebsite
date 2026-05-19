# W03 - Lightning Link Gemini Slides Prompt

- Estado: [ ] Draft para Gemini Slides
- Semana: 3
- Base: `02_Session_Notes/Lightning Link.md` y `Lightning_Link_Product_Review_To_Do.md`
- Tema: product teardown focused on early retention and core loop pacing
- Objetivo: generar un mini-deck editable de 6 slides para practicar stakeholder communication y construir material de portfolio.

## Objetivo del deck

Convertir el analisis de Lightning Link en una presentacion ejecutiva breve de product teardown. El deck debe explicar que Lightning Link tiene un core loop fuerte y picos emocionales claros, pero la early experience puede exponer demasiada complejidad demasiado pronto y el core loop pacing puede estar por debajo del estandar competitivo.

El deck debe seleccionar solo tres oportunidades:

- Progressive onboarding
- Auto-spin speed / core loop pacing
- Progressive slot catalog unlocking

No incluir social features, visual design/animation ni game mode diversification como propuestas principales.

## Audiencia

- Game PM
- Hiring manager
- Product Lead
- Stakeholder review with Design, Data, Monetization and LiveOps

## Estilo visual recomendado

- Executive Game PM teardown deck.
- 6 slides maximum.
- Strong visual hierarchy, compact tables, simple diagrams and KPI cards.
- Tone: polished, analytical, product-led, not overly flashy.
- Visual inspiration: social casino UI, slot machine rhythm, progression, retention loops.
- Use careful external teardown language: observed, may indicate, hypothesis, expected impact, would need telemetry validation.
- Avoid dense slides and avoid sounding like internal Product Madness data is available.

## Nota sobre imagenes de referencia

Adjuntare imagenes de referencia del juego a Gemini para ayudar con el estilo visual. Gemini debe usarlas como inspiracion visual, no como contenido que copiar exactamente.

## Prompt final listo para copiar en Gemini

```text
Create an editable Google Slides mini-deck with 6 slides.

Deck title: Lightning Link - Product Teardown: Early Retention and Core Loop Pacing

Audience: Game PM, hiring manager and stakeholder review.

Goal:
Turn an external product teardown into a concise executive deck. The deck should show Game PM thinking: player problem, business impact, hypothesis, KPIs, guardrails, trade-offs and prioritization. Keep the deck focused on early retention and core loop pacing.

Important framing:
This is an unofficial external product teardown based on gameplay observation and public competitive benchmarking. Do not imply access to internal Product Madness data. Use cautious language: "observed during gameplay", "may indicate", "the hypothesis would be", "expected impact", "would need validation with internal telemetry".

Game context to use:
- Lightning Link is a social casino F2P game with no real money gambling.
- Core loop: spin -> win/lose coins -> claim bonus every 3h -> buy more if coins run out.
- Hold & Spin is the emotional peak of the loop and appears after several minutes of play.
- What works: inflated early wins create D1 momentum; "someone just won X" notifications create social proof; Orbs -> Collectibles creates a coherent meta-loop.

Observed problems to include:
- Static tutorial / info-heavy onboarding.
- Too many systems exposed from minute zero.
- Multiple popups on the second session.
- Spin speed observed around 8 seconds.
- 120+ slot catalog unlocked from the start.

Competitive references:
Use Slotomania, Jackpot Party, Huuuge Casino and Lotsa Slots as category benchmarks. Mention that competitors tend to use guided onboarding, faster spin pacing around 2-3.5 seconds and more progressive slot catalog unlocking. Do not overclaim causality.

Selected opportunities:
1. Progressive onboarding.
2. Auto-spin speed / core loop pacing.
3. Progressive slot catalog unlocking.

Style:
Use a polished executive Game PM teardown style. Keep each slide visual and readable. Use concise bullets, compact benchmark tables, opportunity cards and KPI cards. Avoid dense paragraphs. Use a social casino visual tone: energetic but professional, with clear hierarchy and restrained use of color.

Reference images:
I will attach reference images from the game; use them only as visual inspiration, not as content to copy exactly.

Create the following 6 slides:

Slide 1 - Context and Core Loop
Key message: Lightning Link has a strong social casino loop, but early retention depends on players quickly understanding the loop, building habit and reaching emotional peaks.
Bullets:
- Social casino F2P, no real money gambling.
- Core loop: spin -> win/lose coins -> 3h bonus claim -> buy more if coins run out.
- Hold & Spin is the observed emotional peak.
- Strong elements: early wins, social proof notifications, Orbs -> Collectibles meta-loop.
Suggested visual: core loop diagram with Hold & Spin highlighted as the emotional peak.
Speaker notes: Start balanced. The product has a clear loop and strong retention mechanics. The opportunity is to make the first sessions clearer and the loop more energetic.

Slide 2 - Diagnosis: Overloaded Early Experience + Pacing Friction
Key message: The early experience may expose too much complexity before the player has built a habit around spinning, claiming bonuses and recognizing reward peaks.
Bullets:
- Static tutorial and info-heavy guidance.
- Many systems visible from minute zero.
- Sequential popups when returning for the second session.
- 120+ slots unlocked from start.
- Spin cycle observed around 8s vs competitors around 2-3.5s.
Suggested visual: compact benchmark table with rows for tutorial, slot catalog and spin pacing.
Speaker notes: The benchmark does not prove causality, but it highlights category expectations worth validating. The diagnosis explains why the deck focuses on onboarding, pacing and progression.

Slide 3 - Opportunity 1: Progressive Onboarding
Key message: New players should learn systems when they become relevant, not all at once before the habit is formed.
Bullets:
- Player problem: cognitive overload before core value is clear.
- Hypothesis: contextual onboarding improves D1 retention and first-session clarity.
- Experiment: replace static overlays with action-based guidance.
- Also test: group session-start popups into a notification inbox.
- Primary KPI: D1 retention.
Suggested visual: before/after flow: current info burst vs progressive guided steps.
Speaker notes: This is the strongest opportunity because it touches 100% of new users. Guardrails should include time to first spin, tutorial completion, first bonus claim and early session length.

Slide 4 - Opportunity 2: Spin Speed / Pacing Experiment
Key message: Spin cadence is not UX polish; it is part of the core loop throughput and emotional rhythm of a slots game.
Bullets:
- Player problem: the loop may feel slow versus category expectations.
- Hypothesis: faster pacing increases spins/session and Hold & Spin opportunities.
- Experiment: A/B test current spin cycle vs approximately 3s cycle.
- Primary KPIs: D1/D7 retention, spins/session, Hold & Spin triggers.
- Guardrails: coin depletion, session length, ARPU, conversion, complaints.
Suggested visual: timeline comparison: current ~8s cycle vs test ~3s cycle, with Hold & Spin opportunities marked.
Speaker notes: More speed is not automatically better. The test must protect economy balance, player trust and perceived suspense.

Slide 5 - Opportunity 3: Progressive Slot Catalog Unlocking
Key message: Turning a 120+ slot catalog into a progression journey may reduce choice overload and create reasons to return.
Bullets:
- Player problem: too many choices from minute zero can create analysis paralysis.
- Hypothesis: curated starting set plus milestones improves clarity and D7/D30 retention.
- Experiment: new users start with 8-10 curated slots; more unlock through levels.
- Primary KPI: D7 retention.
- Guardrails: unique slots played, slot switching, session length, revenue/new user, negative feedback.
Suggested visual: progression ladder or map from starter slots to milestone unlocks.
Speaker notes: Frame this as clarity and progression, not artificial restriction. Test only with new users to avoid disrupting existing player expectations.

Slide 6 - Prioritization: Impact, KPIs, Risks and Recommendation
Key message: Start with onboarding and spin pacing because they affect the earliest and most repeated moments of the player journey.
Bullets:
- Prioritize first: progressive onboarding for reach and D1 retention impact.
- Test fast: spin speed because it is close to the core loop and benchmark gap is clear.
- Explore next: catalog unlocking as a progression experiment.
- KPIs: D1/D7/D30 retention, sessions/day, session length, bonus claim rate, spins/session, Hold & Spin triggers, ARPU, conversion, LTV.
- Recommendation: validate top 1-2 opportunities before expanding scope.
Suggested visual: impact vs effort 2x2 or prioritization table.
Speaker notes: Do not recommend doing everything at once. Social features, visual polish and new modes may be valuable, but they are larger or less focused bets for this short deck.

Final instruction:
Make the deck concise, visual and editable. Do not create dense memo-style slides. Each slide should be understandable in 30-45 seconds during a 5-minute stakeholder presentation.
```

## Contenido slide-by-slide

### Slide 1 - Context and Core Loop

- Titulo: Context and Core Loop
- Mensaje clave: Lightning Link has a strong social casino loop, but early retention depends on clarity, habit formation and emotional peaks.
- Bullets minimos:
  - Social casino F2P; no real money gambling.
  - Core loop: spin -> win/lose coins -> 3h bonus claim -> buy more if coins run out.
  - Hold & Spin is the main observed emotional peak.
  - Strengths: early wins, social proof notifications, Orbs -> Collectibles meta-loop.
- Visual sugerido: loop diagram with Hold & Spin highlighted.
- Speaker notes: Start with balance. The deck is not saying the product is weak; it identifies where early comprehension and pacing may be improved.

### Slide 2 - Diagnosis: Overloaded Early Experience + Pacing Friction

- Titulo: Diagnosis: Overloaded Early Experience + Pacing Friction
- Mensaje clave: The first sessions may expose too many systems before the player has formed a clear habit around the core loop.
- Bullets minimos:
  - Static tutorial and information-heavy guidance.
  - Many systems visible from minute zero.
  - Sequential popups on the second session.
  - 120+ slots unlocked from start.
  - Observed spin cycle around 8s vs competitors around 2-3.5s.
- Visual sugerido: benchmark table: Lightning Link vs Slotomania, Jackpot Party, Huuuge Casino, Lotsa Slots.
- Speaker notes: Use careful external teardown language. Competitors suggest category patterns, not guaranteed answers.

### Slide 3 - Opportunity 1: Progressive Onboarding

- Titulo: Opportunity 1: Progressive Onboarding
- Mensaje clave: Teach the player the right system at the right moment.
- Bullets minimos:
  - Player problem: too much complexity before core value is clear.
  - Hypothesis: contextual guidance improves D1 retention.
  - Experiment: replace static overlays with action-based guidance.
  - Add: notification inbox for session-start popups.
  - Primary KPI: D1 retention.
- Visual sugerido: before/after onboarding flow.
- Speaker notes: Onboarding has the highest reach because every new user experiences it. Mention guardrails: time to first spin, tutorial completion, first bonus claim and early session length.

### Slide 4 - Opportunity 2: Spin Speed / Pacing Experiment

- Titulo: Opportunity 2: Spin Speed / Pacing Experiment
- Mensaje clave: Spin cadence affects momentum, emotional peaks and monetization opportunities.
- Bullets minimos:
  - Player problem: current pacing may feel slow vs category benchmarks.
  - Hypothesis: faster spin cycle increases momentum and Hold & Spin opportunities.
  - Experiment: current cycle vs approximately 3s cycle.
  - Primary KPIs: D1/D7 retention, spins/session, Hold & Spin triggers.
  - Guardrails: coin depletion, session length, ARPU, conversion, complaints.
- Visual sugerido: spin-cycle timeline comparison.
- Speaker notes: This is not just speed for speed's sake. Faster pacing must be evaluated against economy and trust risks.

### Slide 5 - Opportunity 3: Progressive Slot Catalog Unlocking

- Titulo: Opportunity 3: Progressive Slot Catalog Unlocking
- Mensaje clave: A large catalog can become a journey instead of a wall of choices.
- Bullets minimos:
  - Player problem: 120+ slots from start may create choice overload.
  - Hypothesis: curated unlocks increase clarity and progression motivation.
  - Experiment: 8-10 starter slots, unlock more through milestones.
  - Primary KPI: D7 retention.
  - Guardrails: unique slots played, slot switching, revenue/new user, negative feedback.
- Visual sugerido: catalog progression map.
- Speaker notes: Position this as progression design. Do not frame it as simply locking content.

### Slide 6 - Prioritization: Impact, KPIs, Risks and Recommendation

- Titulo: Prioritization: Impact, KPIs, Risks and Recommendation
- Mensaje clave: Prioritize the opportunities that affect early retention and repeated loop momentum first.
- Bullets minimos:
  - First: progressive onboarding for reach and D1 impact.
  - Fast test: spin speed because it is close to the core loop.
  - Next: catalog unlocking after comprehension and pacing.
  - KPIs: D1/D7/D30 retention, sessions/day, session length, bonus claim rate, spins/session, Hold & Spin triggers, ARPU, conversion, LTV.
  - Recommendation: validate top 1-2 before expanding scope.
- Visual sugerido: impact vs effort matrix or prioritization table.
- Speaker notes: This slide should demonstrate PM judgement. The value is in selecting focus, not listing every possible improvement.

## Instrucciones finales para Gemini

```text
I will attach reference images from the game; use them only as visual inspiration, to design and to create the style of the slides.
```
