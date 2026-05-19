# W03 - Player Problem Opportunity Memo

- Estado: [x] Draft completo
- Semana: 3
- Modulo: Player Understanding, Discovery y Psicologia del Jugador
- Juego analizado: Word Life
- Estudio: Socialpoint
- Conexion con portfolio: alimenta Case Study #1.

## Word Life - Ad Pacing, Player Flow and Ethical Monetization

## 1. Contexto

Word Life es un juego casual de palabras basado en resolver puzzles conectando letras y formando palabras. Su experiencia principal se apoya en sesiones accesibles, resolucion mental rapida, progresion por niveles y una sensacion de juego relajado.

- Genero: word puzzle / casual puzzle / crossword-style game.
- Modelo: free-to-play con anuncios e in-app purchases.
- Caso elegido: percepcion de demasiados anuncios, especialmente despues de completar niveles.

El objetivo de este memo no es proponer simplemente "quitar anuncios", sino entender si existe un problema mas profundo relacionado con el pacing publicitario, el flow del jugador, la proporcionalidad entre tiempo de juego y tiempo de anuncio, y la monetizacion etica.

## 2. Senal observada

La senal principal observada es que muchos jugadores se quejan de la cantidad de anuncios. Durante la experiencia personal de juego, tambien se observa que, aproximadamente a partir del nivel 10, aparece un anuncio despues de completar una partida o nivel.

La duracion percibida de los anuncios varia. Algunos anuncios son relativamente cortos, mientras que otros pueden durar bastante mas. El impacto del anuncio no parece depender unicamente de su duracion absoluta, sino de su duracion relativa respecto al tiempo de juego anterior.

Ejemplos:

- Si el jugador completa un puzzle en 10 segundos y despues recibe un anuncio de 30 segundos, la interrupcion puede sentirse muy desproporcionada.
- Si el jugador tarda 8-10 minutos en resolver un puzzle y despues recibe un anuncio, la interrupcion puede sentirse mas aceptable.
- En sesiones con puzzles rapidos, el jugador puede llegar a sentir que pasa mas tiempo esperando anuncios que jugando.

La senal relevante no es solo: "hay demasiados anuncios".

La senal mas interesante desde Product Management es: la carga publicitaria puede no estar adaptada al ritmo real de juego del usuario.

## 3. Sintoma vs problema

### Sintoma visible

Los jugadores se quejan de que hay demasiados anuncios.

### Problema potencial

La frecuencia y duracion de los anuncios puede romper el flow del jugador cuando aparece inmediatamente despues de puzzles muy cortos. En esos casos, la experiencia puede sentirse desproporcionada: el jugador resuelve rapido, recibe una recompensa psicologica breve y enseguida se encuentra bloqueado por una interrupcion que puede durar mas que el propio nivel.

Esto puede afectar negativamente a:

- Sensacion de flow.
- Percepcion de relajacion.
- Intencion de continuar jugando.
- Percepcion de justicia.
- Tolerancia hacia el modelo free-to-play.
- Percepcion de la oferta de No Ads.

### Lo que no debemos asumir todavia

No debemos asumir directamente que la solucion es eliminar anuncios. Los anuncios forman parte del modelo de negocio del juego. La pregunta correcta como Game PM es:

> Como podemos mantener una monetizacion publicitaria sostenible reduciendo la sensacion de interrupcion desproporcionada?

## 4. Hipotesis de jugador

Cuando un jugador completa un puzzle muy rapido y recibe inmediatamente un anuncio largo, puede sentir que la interrupcion es mayor que el valor de gameplay recibido. Esto rompe la continuidad de la sesion y puede reducir su motivacion para seguir jugando.

Hipotesis principal:

> El problema no es solo la cantidad de anuncios, sino la falta de proporcionalidad percibida entre duracion del puzzle, momento del anuncio y duracion del anuncio.

Desde player psychology, esto puede afectar a varias dimensiones:

### Flow

Los puzzles rapidos generan una sensacion de continuidad: resolver, avanzar, resolver otro, entrar en ritmo. Un anuncio largo justo despues de un puzzle corto corta esa secuencia.

### Autonomia

El jugador pierde control sobre el ritmo de su sesion. En lugar de decidir "juego uno mas", siente que el juego decide cuando detenerlo.

### Competencia

Resolver rapido puede generar una pequena sensacion de logro. Si inmediatamente aparece una interrupcion larga, esa recompensa psicologica se diluye.

### Relajacion

En un juego casual de palabras, el jugador probablemente espera una experiencia tranquila, fluida y sin demasiada friccion. Una carga publicitaria mal colocada puede contradecir esa promesa.

### Justicia percibida

Un anuncio de 30 segundos despues de una partida de 10 segundos puede sentirse injusto, aunque ese mismo anuncio despues de una partida larga sea aceptable.

## 5. Segmentos afectados

El problema probablemente afecta mas a algunos segmentos que a otros.

### Segmento principal

Jugadores early-game que todavia resuelven niveles rapidos y aun no tienen una inversion fuerte en el juego.

### Segmentos secundarios

- Jugadores casuales que juegan en descansos cortos.
- Jugadores que buscan relajacion.
- Jugadores sensibles a interrupciones frecuentes.
- Jugadores que no quieren pagar No Ads, pero podrian seguir jugando si la carga publicitaria se sintiera mas razonable.
- Jugadores que entran en sesiones de pocos minutos.
- Jugadores que encadenan varios puzzles faciles o rapidos.

Este ultimo segmento es especialmente interesante: cuando un jugador resuelve varios puzzles seguidos de forma rapida, probablemente esta en un estado de alto momentum, satisfaccion y continuidad. Interrumpir ese momento con demasiada frecuencia puede ser especialmente costoso para la experiencia.

## 6. Player Problem Statement

En Word Life, algunos jugadores - especialmente en early-game, sesiones cortas o rachas de puzzles rapidos - pueden sentir que los anuncios intersticiales aparecen con una frecuencia o duracion desproporcionada respecto al tiempo real de juego. Esto rompe el flow, reduce la sensacion de relajacion y puede hacer que la monetizacion se perciba como intrusiva, afectando a la intencion de continuar jugando o volver al juego.

## 7. Product Opportunity Statement

Existe una oportunidad para adaptar mejor el pacing publicitario al ritmo real de juego, manteniendo el modelo free-to-play y la conversion a No Ads, pero reduciendo la frustracion causada por interrupciones desproporcionadas despues de puzzles muy cortos o rachas de resolucion rapida.

La oportunidad no es simplemente reducir anuncios.

La oportunidad es disenar una experiencia publicitaria mas proporcional al valor de gameplay recibido, protegiendo tanto el flow del jugador como la sostenibilidad del modelo free-to-play.

## 8. Posibles soluciones a explorar

Estas soluciones no deberian entenderse como decisiones finales, sino como direcciones de exploracion o experimentacion.

### Opcion A - Ad pacing proporcional a duracion de partida

Adaptar la probabilidad, frecuencia o formato del anuncio en funcion de la duracion del puzzle anterior, si tecnicamente es posible.

Ejemplo hipotetico:

- Puzzle resuelto en menos de 20-30 segundos: no mostrar anuncio intersticial o mostrar solo un formato muy corto.
- Puzzle resuelto entre 30-90 segundos: permitir anuncio corto o aplicar cooldown.
- Puzzle resuelto en mas de 2-3 minutos: permitir anuncio estandar.

La logica seria que el coste psicologico del anuncio debe estar relacionado con el tiempo de gameplay previo.

Ventajas:

- Reduce interrupciones desproporcionadas.
- Protege el flow en puzzles rapidos.
- Puede mejorar session continuation.
- Puede mejorar la percepcion de justicia.

Riesgos:

- Puede reducir impressions a corto plazo.
- Puede depender de limitaciones tecnicas de ad networks.
- Puede reducir presion hacia la compra de No Ads si se aplica de forma demasiado agresiva.

### Opcion B - Racha sin anuncios despues de puzzles muy rapidos + rewarded ad voluntario

Cuando el jugador completa puzzles muy rapidos, permitir que juegue algunos niveles adicionales sin anuncios intersticiales obligatorios. En su lugar, se podria ofrecer un anuncio voluntario para duplicar la recompensa del nivel.

Ejemplo:

> El jugador completa varios puzzles rapidos seguidos. En vez de mostrar un interstitial obligatorio tras cada uno, el juego permite continuar la racha y ofrece: "Watch an ad to double your reward."

Esta solucion cambia la percepcion del anuncio de interrupcion obligatoria a decision voluntaria con beneficio claro.

Ventajas:

- Protege el momentum del jugador.
- Aumenta sensacion de autonomia.
- Puede mantener monetizacion mediante rewarded ads.
- Convierte una interrupcion en una oportunidad elegida.
- Puede reforzar positivamente el estado de flow.

Riesgos:

- Puede reducir ingresos por interstitials.
- Requiere que la recompensa sea suficientemente atractiva.
- Si la recompensa es demasiado alta, puede afectar a la economia.
- Si aparece demasiado a menudo, tambien puede sentirse intrusivo.

### Opcion C - Testear oferta No Ads despues de una racha positiva

Actualmente, una oferta de No Ads puede percibirse como una salida a una experiencia frustrante: "paga para dejar de sufrir anuncios". Una alternativa seria testear si la oferta convierte mejor cuando aparece despues de un momento positivo de alta motivacion.

Ejemplo:

> El jugador resuelve varios puzzles seguidos de forma rapida, acumula momentum y probablemente esta en un estado emocional positivo. En ese momento se le muestra una oferta No Ads como forma de mantener esa experiencia fluida.

Hipotesis:

> Una oferta No Ads presentada despues de una racha positiva puede sentirse menos coercitiva y mas alineada con el deseo del jugador de mantener su flow.

No seria "paga porque los anuncios molestan", sino "manten esta experiencia fluida y sin interrupciones".

Ventajas:

- Puede aumentar conversion desde un estado emocional positivo.
- Puede reducir percepcion de monetizacion agresiva.
- Conecta la oferta con un beneficio claro: preservar flow.
- Es mas compatible con monetizacion etica.

Riesgos:

- Puede convertir peor que una oferta mostrada justo despues de una frustracion.
- Requiere test A/B para validar.
- Puede ser dificil identificar correctamente el momento de alto momentum.
- Si se muestra demasiado pronto, puede parecer demasiado comercial.

## 9. Metrica de exito primaria

### Session continuation rate after ad opportunity

Porcentaje de jugadores que juegan otro nivel despues de una oportunidad de anuncio o exposicion a anuncio.

Esta metrica conecta directamente con el problema: si el anuncio rompe el flow, deberiamos ver caida en la continuacion de sesion.

## 10. Metrica clave propuesta: Ad-to-Gameplay Ratio

Una metrica especialmente util para este caso seria:

```text
Ad-to-Gameplay Ratio = duracion del anuncio / duracion del puzzle anterior
```

Ejemplos:

- Anuncio de 30 segundos tras puzzle de 10 segundos = ratio 3.0.
- Anuncio de 30 segundos tras puzzle de 300 segundos = ratio 0.1.
- Anuncio de 5 segundos tras puzzle de 20 segundos = ratio 0.25.

Hipotesis:

> Cuanto mayor sea el Ad-to-Gameplay Ratio, mayor sera la probabilidad de abandono de sesion, peor sentimiento hacia los anuncios y menor intencion de continuar jugando.

Esta metrica convierte una intuicion de UX en una variable medible y accionable.

## 11. Metricas secundarias

### Metricas de comportamiento

- D1 retention.
- D7 retention.
- Session length.
- Levels completed per session.
- Session continuation after ad.
- Churn after ad.
- Time to next puzzle.
- Number of puzzles completed before first ad.
- Number of ads per session.
- Gameplay time vs ad time.

### Metricas de monetizacion

- Ad revenue per DAU.
- Ad impressions per DAU.
- Rewarded ad opt-in rate.
- No Ads conversion rate.
- VIP/subscription conversion rate, si aplica.
- ARPDAU.
- LTV.

### Metricas de percepcion

- Review sentiment sobre anuncios.
- Comentarios negativos mencionando ads.
- Encuesta ligera: "The amount of ads feels fair."
- Encuesta ligera: "Ads interrupt my gameplay flow."
- Rating evolution por cohortes expuestas a diferentes reglas de ad pacing.

## 12. Guardrails

### Guardrails de experiencia

- No empeorar D1/D7 retention.
- No reducir levels completed per session.
- No aumentar churn tras anuncios.
- No empeorar sentiment sobre ads.
- No aumentar frustracion en early-game.
- No romper el ritmo de sesiones cortas.

### Guardrails de negocio

- No reducir significativamente ad revenue per DAU.
- No reducir de forma significativa ARPDAU.
- No danar No Ads conversion.
- No danar VIP/subscription conversion, si aplica.
- No reducir LTV.

### Guardrails eticos

- No hacer la experiencia free-to-play artificialmente molesta para forzar la compra de No Ads.
- No usar dark patterns en el cierre de anuncios.
- No explotar momentos de frustracion extrema para vender No Ads.
- Presentar la oferta No Ads como mejora de experiencia, no como escape de una experiencia deliberadamente incomoda.
- Mantener un intercambio razonable entre valor recibido por el jugador y carga publicitaria.

## 13. Trade-offs

### Reducir anuncios tras puzzles muy cortos

Pros:

- Mejora flow.
- Reduce sensacion de injusticia.
- Puede mejorar retencion.
- Puede reducir reviews negativas.
- Puede aumentar niveles completados por sesion.

Contras:

- Puede reducir impressions inmediatas.
- Puede reducir ingresos publicitarios a corto plazo.
- Puede reducir presion hacia No Ads.
- Requiere validar si el aumento de retencion compensa la caida de impressions.

### Mantener anuncios frecuentes tras cada puzzle

Pros:

- Maximiza impressions a corto plazo.
- Refuerza valor percibido de No Ads.
- Es simple de implementar.
- Puede sostener revenue si la retencion no se ve afectada.

Contras:

- Puede romper flow.
- Puede danar early-game retention.
- Puede deteriorar sentiment y reviews.
- Puede hacer que el juego parezca mas agresivo de lo que realmente necesita ser.
- Puede afectar especialmente a jugadores que resuelven puzzles rapido.

### Cambiar parte de la monetizacion hacia rewarded ads voluntarios

Pros:

- Aumenta autonomia.
- Se percibe como mas justo.
- Puede mantener monetizacion sin interrumpir tanto.
- Encaja mejor con una experiencia casual/relajante.

Contras:

- Menor predictibilidad de ingresos.
- Necesita recompensas bien calibradas.
- Puede afectar economia si las recompensas son demasiado generosas.
- Puede reducir interstitial revenue.

### Mostrar No Ads despues de rachas positivas

Pros:

- Puede convertir en un momento emocional positivo.
- Se alinea con el deseo del jugador de mantener flow.
- Puede sentirse menos coercitivo.
- Refuerza monetizacion etica.

Contras:

- Puede convertir menos que una oferta basada en frustracion.
- Requiere detectar correctamente momentos de momentum.
- Puede interrumpir un momento positivo si el timing es malo.
- Debe testearse cuidadosamente.

## 14. Experimento propuesto

### Objetivo

Validar si adaptar el pacing publicitario al tiempo de gameplay y al momentum del jugador mejora la continuidad de sesion y la percepcion de experiencia sin danar de forma relevante la monetizacion.

### Control

Regla actual de anuncios intersticiales despues de completar niveles a partir del punto definido actualmente.

### Variante A - Ad pacing proporcional

Reducir o evitar interstitials cuando el puzzle anterior se haya completado muy rapido.

Ejemplo:

```text
Si puzzle_duration < 30 segundos, no mostrar interstitial obligatorio.
```

### Variante B - Racha rapida sin interstitial + rewarded ad opcional

Permitir que jugadores que resuelven puzzles muy rapidos completen varios niveles seguidos sin interstitial obligatorio, ofreciendo rewarded ad voluntario para duplicar recompensa.

### Variante C - Oferta No Ads tras racha positiva

Mostrar oferta No Ads despues de que el jugador haya completado varios puzzles seguidos o varios puzzles rapidos, en un momento de alto momentum positivo.

## 15. Hipotesis del experimento

### Hipotesis principal

Reducir o adaptar los anuncios despues de puzzles muy cortos aumentara la probabilidad de que el jugador continue la sesion, complete mas niveles y vuelva al juego, sin necesariamente reducir revenue total a medio plazo.

### Hipotesis secundaria

Ofrecer No Ads despues de una racha positiva puede convertir mejor o generar menor rechazo que ofrecerlo en momentos donde el jugador esta frustrado por interrupciones.

### Hipotesis etica/producto

Una monetizacion percibida como proporcional y respetuosa puede mejorar la confianza del jugador y sostener mejor la relacion a largo plazo que una monetizacion basada principalmente en interrupcion frecuente.

## 16. Recomendacion inicial

La recomendacion inicial no seria eliminar anuncios, sino testear un sistema de adaptive ad pacing con foco en puzzles cortos y rachas rapidas.

La direccion mas prometedora seria combinar:

- Menos interstitials obligatorios tras puzzles muy cortos.
- Rewarded ads voluntarios para duplicar recompensa durante rachas rapidas.
- Oferta No Ads en momentos de momentum positivo, no solo como respuesta a frustracion.

Tesis PM:

> Word Life quiza no tiene solo un problema de "demasiados anuncios"; puede tener un problema de pacing publicitario. El mismo anuncio puede sentirse aceptable despues de un puzzle largo e intrusivo despues de un puzzle de 10 segundos. La oportunidad es hacer que la exposicion publicitaria sea proporcional al gameplay recibido, protegiendo el flow del jugador y la sostenibilidad del modelo free-to-play.

## 17. Critica senior / hiring manager

Este memo es fuerte porque no plantea una solucion simplista como "quitar anuncios". Plantea un problema mas sofisticado: la relacion entre monetizacion, ritmo de juego y estado psicologico del jugador.

### Lo mas fuerte del caso

- Convierte una queja comun -"hay muchos anuncios"- en un problema accionable de producto.
- Introduce una metrica propia: Ad-to-Gameplay Ratio.
- Conecta flow, autonomia, competencia, relajacion y justicia percibida.
- Incluye trade-offs reales entre retencion, revenue, No Ads conversion y experiencia.
- Propone alternativas mas eticas que simplemente hacer incomoda la experiencia free-to-play.

### Riesgos del memo

- Parte de la evidencia viene de observacion personal; deberia reforzarse con reviews publicas o analisis de sentimiento.
- No sabemos si tecnicamente se puede controlar duracion o formato de anuncio segun duracion del puzzle.
- No sabemos si el revenue perdido por menos interstitials se compensaria con mas retencion o rewarded ads.
- Hay que evitar asumir que el jugador esta "dopamine-driven" sin datos; es mejor formularlo como "momento de momentum positivo" o "estado de alta motivacion".

### Como hacerlo sonar mas PM

Evitar frases como "los anuncios molestan".

Usar frases como:

> El coste psicologico del anuncio parece depender del contexto en el que aparece.

O:

> La decision de producto no es anuncios si o no, sino que nivel de interrupcion es sostenible sin romper la promesa central de experiencia relajada.

## 18. Proximos pasos

- Recolectar 30-50 reviews/comentarios publicos que mencionen anuncios.
- Clasificarlos por tema:
  - Demasiados anuncios.
  - Anuncios largos.
  - Anuncios tras cada nivel.
  - Anuncios que rompen relajacion.
  - Presion para comprar No Ads.
  - Bugs o problemas tecnicos de anuncios.
- Medir manualmente una pequena muestra de gameplay:
  - Duracion de puzzle.
  - Si aparece anuncio.
  - Duracion percibida de anuncio.
  - Ratio anuncio/gameplay.
  - Si el jugador siente ruptura de flow.
- Definir experimento A/B:
  - Control actual.
  - Variante de ad pacing proporcional.
  - Variante con rewarded ad voluntario.
  - Variante con oferta No Ads tras racha positiva.
- Priorizar la solucion con mejor balance entre impacto jugador, revenue, esfuerzo tecnico y riesgo etico.

## Resumen para case study

Caso potencial para portfolio sobre Word Life y monetizacion free-to-play: convertir una queja generica sobre demasiados anuncios en un problema PM defendible de ad pacing, proporcionalidad percibida y proteccion del flow. La pieza diferenciadora es la metrica Ad-to-Gameplay Ratio, que permite medir si el coste de interrupcion publicitaria esta alineado con el tiempo de gameplay recibido.
