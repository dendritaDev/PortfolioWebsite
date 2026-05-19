# W03 - Word Life Gemini Slides Prompt

- Estado: [ ] Draft para Gemini Slides
- Semana: 3
- Base: `W03_Player_Problem_Opportunity_Memo.md`
- Tema: ad pacing, player flow and ethical monetization
- Objetivo: generar un mini-deck editable de 6 slides para practicar stakeholder communication y portfolio storytelling.

## Objetivo del deck

Convertir el memo de Word Life en una presentacion ejecutiva breve que explique un problema de producto: los anuncios pueden no estar adaptados al ritmo real de juego, rompiendo el flow del jugador y afectando la percepcion de justicia del modelo F2P.

El deck debe demostrar pensamiento Game PM: senal observada, problema de jugador, hipotesis, oportunidad, soluciones, metricas, guardrails y trade-offs. No debe sonar a "remove ads"; debe sonar a "design more proportional ad pacing while protecting both player experience and business sustainability."

## Audiencia

- Game PM
- Hiring manager
- Product Lead
- Stakeholder review with Design, Data and Monetization

## Estilo visual recomendado

- Executive product review deck, clean and visual.
- 6 slides maximum.
- Minimal text per slide: 3-5 bullets, no dense paragraphs.
- Use strong slide titles and one clear message per slide.
- Visual tone: casual puzzle, calm, clean, accessible, light background, subtle word-game/puzzle motifs.
- Use diagrams, simple tables and KPI cards instead of text-heavy layouts.
- Avoid overdecorated gaming visuals; this is a stakeholder deck, not a marketing deck.
- Use reference images from Word Life only for visual inspiration and layout context.

## Nota sobre imagenes de referencia

Adjuntare imagenes de referencia del juego a Gemini para ayudar con el estilo visual. Gemini debe usarlas como inspiracion visual, no como contenido que copiar exactamente.

## Prompt final listo para copiar en Gemini

```text
Create an editable Google Slides mini-deck with 6 slides.

Deck title: Word Life - Ad Pacing, Player Flow and Ethical Monetization

Audience: Game PM, hiring manager and stakeholder review.

Goal:
Turn a product memo into a concise executive product review deck. The deck should explain that the opportunity is not simply "remove ads"; the opportunity is to make ad exposure feel more proportional to the amount and timing of gameplay, protecting player flow while sustaining the free-to-play business model.

Style:
Use a clean executive product review style with a casual word-puzzle feel. Keep slides visual, light and readable. Use 3-5 bullets per slide maximum. Prefer simple diagrams, KPI cards, comparison tables and decision frameworks. Avoid dense paragraphs. Use a calm, accessible visual tone: light background, puzzle/word motifs, restrained color accents, readable typography.

Important evidence framing:
This is an external product analysis based on public/player-facing observation and a product memo. Do not imply access to internal Word Life data. Use careful language such as "observed signal", "may indicate", "hypothesis", "would need validation" and "expected impact".

Reference images:
I will attach reference images from the game; use them only as visual inspiration, not as content to copy exactly.

Create the following 6 slides:

Slide 1 - Context
Key message: Word Life is a casual word puzzle game whose promise depends on relaxed, low-friction sessions supported by F2P monetization.
Bullets:
- Genre: casual word puzzle / crossword-style mobile game.
- Core loop: solve puzzle -> complete level -> progress.
- Monetization: interstitial ads, rewarded ads and potential No Ads purchase.
- Product tension: monetize without breaking the relaxed player experience.
Suggested visual: simple core loop diagram with a small monetization layer next to it.
Speaker notes: Start balanced. Ads are part of the business model. The PM question is not whether ads should exist, but what level of interruption is sustainable without breaking the game's core promise.

Slide 2 - Observed Signal
Key message: The player complaint about "too many ads" may be about timing and proportionality, not only ad volume.
Bullets:
- Players mention too many ads.
- Gameplay observation: ads can appear after completing levels, including early-game.
- The interruption feels especially costly after very short puzzles.
- Example: 10s puzzle + 30s ad can feel disproportionate.
Suggested visual: side-by-side timeline: short puzzle followed by long ad vs longer puzzle followed by same ad.
Speaker notes: The important PM move is to translate a generic complaint into a more actionable product signal: ad load may not be adapted to the player's actual gameplay rhythm.

Slide 3 - Symptom vs Player Problem
Key message: The problem is not "ads exist"; the problem may be that ad pacing interrupts flow at the wrong moment.
Bullets:
- Symptom: "There are too many ads."
- Player problem: ads may interrupt immediately after a short moment of reward.
- Psychological cost depends on context: flow, autonomy, competence and perceived fairness.
- Risk: players may feel they spend more time waiting than playing.
Suggested visual: 2-column table: Symptom vs PM problem.
Speaker notes: Position this as problem framing. The same ad can feel acceptable after a long puzzle and intrusive after a 10-second puzzle. Context changes the perceived cost.

Slide 4 - Player Hypothesis + Product Opportunity
Key message: If ad time is higher than gameplay value received, players may perceive the experience as unfair and abandon the session.
Bullets:
- Hypothesis: high ad-to-gameplay ratio reduces session continuation.
- Product opportunity: adaptive ad pacing based on puzzle duration and momentum.
- Proposed metric: Ad-to-Gameplay Ratio = ad duration / previous puzzle duration.
- Outcome: protect flow while keeping monetization sustainable.
Suggested visual: KPI formula card plus a small chart showing higher ratio -> higher expected churn risk.
Speaker notes: The metric turns a UX intuition into something measurable. It also avoids a simplistic "fewer ads" recommendation by tying ad exposure to player context.

Slide 5 - Proposed Solutions
Key message: Shift from fixed interruption to more proportional and voluntary ad moments.
Bullets:
- Adaptive ad pacing: reduce or avoid interstitials when puzzle_duration < 30s.
- Fast-puzzle streaks: allow several quick levels before a forced interstitial.
- Rewarded ads: offer voluntary value exchange during momentum.
- No Ads offer: show after positive momentum, not only after frustration.
Suggested visual: three solution cards with icons: pacing rules, streak mode, No Ads timing.
Speaker notes: These are experiment directions, not final decisions. The common logic is to protect player autonomy and flow while still giving monetization paths.

Slide 6 - KPIs, Guardrails and Recommended Experiment
Key message: Test adaptive ad pacing as a retention and trust experiment, with monetization guardrails.
Bullets:
- Primary KPI: session continuation after ad opportunity.
- Experience KPIs: D1/D7 retention, levels/session, churn after ad, review sentiment.
- Business guardrails: ad revenue per DAU, ARPDAU, No Ads conversion, LTV.
- Recommended test: control vs adaptive pacing + fast-puzzle streak + rewarded ad option.
Suggested visual: experiment summary table with Primary KPI, Guardrails, Risks and Decision Rule.
Speaker notes: The decision should balance player value and revenue. A winning variant should improve continuation or retention without unacceptable revenue loss or signs of coercive monetization.

Final instruction:
Make the deck concise, visual and editable. Do not create dense memo-style slides. Each slide should be understandable in 30-45 seconds during a 5-minute stakeholder presentation.
```

## Contenido slide-by-slide

### Slide 1 - Context

- Titulo: Context
- Mensaje clave: Word Life promises relaxed, low-friction puzzle sessions monetized through a F2P model.
- Bullets minimos:
  - Casual word puzzle / crossword-style game.
  - Core loop: solve puzzle -> complete level -> progress.
  - Monetization: interstitial ads, rewarded ads, No Ads purchase.
  - PM tension: monetize without breaking relaxation.
- Visual sugerido: core loop diagram with a small ad/IAP monetization layer.
- Speaker notes: Ads are not the enemy. The PM problem is whether the ad experience is timed in a way that respects the player's session flow.

### Slide 2 - Observed Signal

- Titulo: Observed Signal
- Mensaje clave: "Too many ads" may actually mean "ads feel disproportionate in some contexts."
- Bullets minimos:
  - Players complain about ad volume.
  - Ads observed after level completion in early-game.
  - Short puzzles make the same ad feel more costly.
  - 10s gameplay + 30s ad creates high perceived friction.
- Visual sugerido: timeline comparison: short puzzle / long ad vs long puzzle / same ad.
- Speaker notes: The useful PM signal is not just ad count. It is the relationship between gameplay time, reward moment and interruption.

### Slide 3 - Symptom vs Player Problem

- Titulo: Symptom vs Player Problem
- Mensaje clave: The issue may be flow disruption, not the mere existence of ads.
- Bullets minimos:
  - Symptom: "There are too many ads."
  - PM problem: ad pacing may not match gameplay rhythm.
  - Player impact: lower flow, autonomy and perceived fairness.
  - Business risk: lower continuation and weaker trust in monetization.
- Visual sugerido: 2-column table with "Symptom" and "Player Problem".
- Speaker notes: This slide should show problem framing maturity. Avoid jumping straight to solutions.

### Slide 4 - Player Hypothesis + Product Opportunity

- Titulo: Player Hypothesis + Product Opportunity
- Mensaje clave: Ad interruption should feel proportional to the gameplay value just received.
- Bullets minimos:
  - Hypothesis: high Ad-to-Gameplay Ratio increases drop-off risk.
  - Opportunity: adapt ad pacing to puzzle duration and momentum.
  - Metric: Ad-to-Gameplay Ratio = ad duration / previous puzzle duration.
  - Goal: protect flow while sustaining F2P revenue.
- Visual sugerido: formula card plus simple risk gradient.
- Speaker notes: This is the bridge from psychology to measurable product decision-making.

### Slide 5 - Proposed Solutions

- Titulo: Proposed Solutions
- Mensaje clave: Use adaptive, player-respectful ad moments instead of fixed interruption.
- Bullets minimos:
  - Adaptive pacing for very short puzzles.
  - Fast-puzzle streaks before forced interstitials.
  - Rewarded ads as voluntary value exchange.
  - No Ads offer after positive momentum.
- Visual sugerido: three or four solution cards.
- Speaker notes: Emphasize that the solutions share one design principle: preserve momentum first, monetize second without creating artificial frustration.

### Slide 6 - KPIs, Guardrails and Recommended Experiment

- Titulo: KPIs, Guardrails and Recommended Experiment
- Mensaje clave: Validate whether adaptive pacing improves continuation without unacceptable monetization loss.
- Bullets minimos:
  - Primary KPI: session continuation after ad opportunity.
  - Experience: D1/D7 retention, levels/session, churn after ad, sentiment.
  - Business: ad revenue per DAU, ARPDAU, No Ads conversion, LTV.
  - Recommendation: A/B test adaptive pacing + fast-puzzle streak logic.
- Visual sugerido: compact experiment card with KPI, guardrails, trade-offs and decision rule.
- Speaker notes: A good outcome is not just fewer complaints. It is a better balance between player flow, retention and sustainable monetization.

## Instrucciones finales para Gemini

```text
I will attach reference images from the game; use them only as visual inspiration, to design and to create the style of the slides.
```
