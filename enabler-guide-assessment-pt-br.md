# Guia de Campo do Enabler - Avaliação de Maturidade em IA

## Pilares de Prontidão para IA - Seções 10 a 14

## 1. Conhecimento e Entendimento de IA

Avalia o conhecimento conceitual do time sobre IA, tecnologias agênticas e a capacidade de explicar e articular esses conceitos.

**O que este pilar mede:** não é o quanto o time usa IA, mas o quão bem ele entende IA. Um time pode usar Copilot todos os dias e ainda assim não saber o que é um agente. Este pilar captura entendimento teórico e conceitual.

### 10.1 Qual é o nível de conhecimento do time sobre conceitos básicos de IA?

**Escala:** Muito baixo (1) -> Muito alto (5)

**Perguntas de aprofundamento**

- Se eu pedisse para uma pessoa do time explicar o que é um "Large Language Model", o que você acha que ela diria?
- O time consegue diferenciar IA generativa, IA preditiva e automação tradicional (RPA)?
- Quais ferramentas de IA o time consegue citar além de ChatGPT ou Copilot?
- Alguém do time já precisou explicar um conceito de IA para o cliente ou para um colega? Como foi?
- O time entende o que significa "agêntico": orquestração, uso de ferramentas, memória, raciocínio em múltiplas etapas?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não consegue diferenciar IA de automação básica. Confunde LLMs com busca tradicional. | "Usamos IA com macros de Excel." |
| 2 | Conhece o básico (ChatGPT, Copilot), mas sem profundidade conceitual. | "Sei que tem um LLM envolvido, mas não entendo muito bem como funciona." |
| 3 | Entende IA generativa e prompting. Já ouviu falar de agentes, mas ainda de forma superficial. | "Sei que dá para encadear chamadas de LLM para resolver tarefas mais complexas." |
| 4 | Explica claramente LLMs, agentes, orquestração e casos reais de uso no SDLC. | "Um agente tem ferramentas, memória e pode chamar outros agentes para concluir uma tarefa." |
| 5 | Domínio profundo: discute trade-offs de modelos, arquiteturas agênticas, limitações e fronteiras tecnológicas. | Consegue comparar arquiteturas (ReAct, CoT, multiagente) e justificar escolhas de design. |

### 10.2 O time consegue explicar como as tecnologias agênticas funcionam?

**Escala:** Improvável (1) -> Certamente (5)

**Perguntas de aprofundamento**

- Se o cliente perguntasse "o que é um agente de IA e como ele difere de um chatbot?", quem no time conseguiria responder? Com que qualidade?
- O time consegue explicar o papel de ferramentas, memória e planejamento em um sistema agêntico?
- Alguém já demonstrou ou explicou um fluxo agêntico para um stakeholder não técnico?
- O time entende o que Cursor, GitHub Copilot Workspace ou ferramentas similares fazem por baixo dos panos?
- O time conseguiria identificar quais problemas são bons candidatos para soluções agênticas versus uma IA mais simples?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não consegue explicar IA agêntica de forma alguma. O conceito é completamente desconhecido. | "Já ouvi a palavra 'agente', mas não sei o que significa nesse contexto." |
| 2 | Tem uma ideia vaga, mas não consegue articular claramente. | "É tipo uma IA que faz coisas automaticamente, eu acho?" |
| 3 | Consegue dar uma explicação razoável, mas teria dificuldade com perguntas de aprofundamento. | "Um agente é uma IA que pode usar ferramentas e tomar ações com base em um objetivo." |
| 4 | Explica conceitos agênticos com clareza e conseguiria orientar um colega ou fazer um briefing para o cliente. | "Um agente observa o ambiente, raciocina sobre o próximo passo, usa ferramentas e repete o ciclo até atingir o objetivo." |
| 5 | Especialista em agentes: explica trade-offs, modos de falha e decisões arquiteturais com confiança. | Já construiu ou analisou profundamente um sistema multiagente; consegue comparar padrões de orquestração. |

### 10.3 Existem treinamentos regulares sobre IA e ferramentas agênticas para o time?

**Escala:** Raramente (1) -> Muito frequentemente (5)

**Perguntas de aprofundamento**

- Houve algum treinamento formal ou certificação em IA nos últimos 6 meses?
- Existem tech talks, grupos de estudo ou lightning talks recorrentes sobre IA dentro do time?
- Quando alguém aprende algo novo sobre IA, isso é compartilhado com todo o time ou fica concentrado em uma pessoa?
- O cliente patrocinou ou incentivou algum treinamento de IA? Existem restrições de acesso a ferramentas?
- Alguém obteve alguma certificação relacionada a IA (AWS AI, Google Cloud AI, Microsoft AI etc.)?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não há treinamentos formais nem sessões de compartilhamento de conhecimento sobre IA. | "Cada um aprende sozinho, quando tem tempo." |
| 2 | Treinamentos isolados ocasionais: 1 ou 2 pessoas fizeram um curso por iniciativa própria. | "O dev senior fez um curso de IA no fim de semana. Mais ninguém." |
| 3 | Algumas sessões de compartilhamento aconteceram, mas não de forma recorrente ou sistemática. | "Tivemos 2 tech talks sobre IA neste trimestre." |
| 4 | Cadência regular de compartilhamento. A maioria do time passou por algum treinamento formal. | "A cada sprint temos 30 minutos para compartilhar aprendizados de IA." |
| 5 | Programa ativo de aprendizado: certificações, comunidade interna e trilha estruturada de capacitação. | Trilha de aprendizado definida, todos certificados, sessões semanais gravadas. |

**Atenção:** "Todo mundo completou a certificação obrigatória de Flow" não conta como treinamento de IA. Aprofunde especificamente sobre conteúdos de LLMs, agentes e ferramentas como Cursor, Copilot etc.

## 2. Implementação de Ferramentas Agênticas

Avalia com que frequência e profundidade o time usa IA e ferramentas agênticas nas atividades do dia a dia do projeto.

**O que este pilar mede:** saber sobre IA não basta. Este pilar verifica se o time realmente usa ferramentas de IA no trabalho diário, com que frequência e em quais atividades. Um time teoricamente especialista, mas que nunca usa IA na prática, pontua baixo aqui.

### 11.1 O time usa atualmente alguma ferramenta agêntica em seus projetos?

**Escala:** Raramente (1) -> Muito frequentemente (5)

**Perguntas de aprofundamento**

- Quais ferramentas de IA ou agênticas o time usa hoje? (Cursor, Copilot, ChatGPT, Gemini, agentes customizados...)
- A IA é usada por apenas 1 ou 2 pessoas, ou é uma prática disseminada no time?
- O cliente permite o uso de ferramentas de IA? Existem restrições de segurança ou privacidade de dados?
- Houve resistência de algum membro do time em adotar ferramentas de IA?
- Você consegue me dar um exemplo específico de uma ferramenta agêntica usada na última sprint?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Nenhuma ferramenta de IA ou agêntica é usada no projeto. Ou o uso é puramente pessoal, fora do contexto do projeto. | "Uso ChatGPT às vezes para coisas pessoais, não no projeto." |
| 2 | 1 ou 2 pessoas usam ferramentas ocasionalmente. Sem padrão, sem cobertura no nível do projeto. | "O dev senior usa Copilot às vezes. O restante não usa." |
| 3 | A maioria do time usa ferramentas de IA, mas de forma inconsistente: não em toda sprint, ou apenas em atividades específicas. | "Usamos bastante em desenvolvimento, mas testes e refinamento ainda são totalmente manuais." |
| 4 | IA presente no trabalho diário: refinamento, código, testes, documentação. A maioria usa todos os dias. | "Todo dev usa Cursor. QA gera casos de teste com IA. PO usa para refinamento de histórias." |
| 5 | IA integrada em todo o ciclo de desenvolvimento. O time apresenta regularmente ao cliente a evolução do uso. | Reviews de sprint incluem demo de como IA acelerou cada fase. Métricas de uso são acompanhadas. |

**Dica de campo:** se o time diz "usamos muita IA", mas não consegue citar exemplos específicos das últimas 2 sprints, provavelmente é nota 2 ou 3, não 4 ou 5. Sempre pergunte: "Me dê um exemplo concreto de algo que vocês fizeram com IA na última sprint."

### 11.2 Com que frequência essas ferramentas são usadas?

**Escala:** Raramente (1) -> Muito frequentemente (5)

**Perguntas de aprofundamento**

- Com que frequência você usa ferramentas de IA no seu trabalho: diariamente, algumas vezes por semana, ocasionalmente?
- Em quais atividades a IA é usada? (código, testes, documentação, refinamento, análise de dados, deploy...)
- A IA é usada de forma consistente em todas as sprints ou apenas quando sobra tempo?
- A frequência de uso aumentou, ficou estável ou diminuiu nos últimos meses?
- Se as ferramentas de IA fossem removidas hoje, quanto a entrega do time seria afetada?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | As ferramentas estão disponíveis, mas quase nunca são usadas. Ou foram usadas uma vez e depois abandonadas. | "Tentamos Copilot, mas nunca criamos o hábito." |
| 2 | Uso ocasional: algumas vezes por sprint, por poucas pessoas. | "Uso talvez uma vez por semana quando estou travado." |
| 3 | Uso regular pela maioria do time, mas apenas em certas atividades. | "Usamos IA para código em toda sprint, mas o resto do processo ainda é manual." |
| 4 | Uso diário pela maioria em múltiplas atividades (código, documentação, testes, refinamento). | "Alguém do time usa IA em toda história, do refinamento ao review de PR." |
| 5 | IA está incorporada em todo fluxo relevante. O time mede o uso e apresenta ao cliente. | O time acompanha métricas de uso de IA por atividade e revisa isso em toda retrospectiva de sprint. |

### 11.3 O time se sente confortável para explorar novas ferramentas agênticas?

**Escala:** Definitivamente não (1) -> Muito confortável (5)

**Perguntas de aprofundamento**

- Quando uma nova ferramenta de IA surge, alguém do time costuma testá-la por iniciativa própria?
- O time precisa de aprovação formal para testar uma nova ferramenta de IA ou há liberdade para experimentar?
- Nos últimos 3 meses, o time adotou alguma nova ferramenta por iniciativa própria?
- Como o time reage quando uma ferramenta de IA não funciona como esperado: desiste ou itera?
- Existe uma pessoa que "puxa" a adoção de IA, ou isso é um comportamento coletivo do time?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Resistência a novas ferramentas. O time evita novas ferramentas de IA por medo ou desinteresse. | "Prefiro não mexer com isso. Pode dar problema." |
| 2 | Existe interesse, mas depende de alguém "mostrar o caminho". Não experimenta de forma independente. | "Se alguém me mostrar como funciona, eu uso também." |
| 3 | Alguns membros exploram de forma independente, mas não compartilham nem escalam para o time. | "O tech lead experimenta coisas novas, mas o restante do time espera alguém mostrar." |
| 4 | O time todo demonstra curiosidade ativa. Experimentos são rotineiros e compartilhados. | "Testamos 3 ferramentas diferentes de geração de testes este mês e escolhemos a melhor." |
| 5 | O time é referência em adoção de IA na conta. Propõe novas ferramentas proativamente para CI&T e clientes. | O time construiu um "menu de ferramentas" interno e faz demos para outras squads da mesma conta. |

## 3. Integração de IA aos Processos

Avalia se o uso de IA está estruturalmente incorporado ao fluxo de trabalho do time, com casos reais de sucesso, resultados mensuráveis e uma estratégia clara.

**O que este pilar mede:** a diferença entre "usar IA ocasionalmente" e "ter IA como parte do processo". Procura evidências de estrutura, casos de sucesso e estratégia, não apenas uso ad hoc. Um time pode usar IA bastante e ainda assim nunca tê-la formalizado no fluxo de trabalho.

### 12.1 A IA está integrada aos processos de trabalho do time?

**Escala:** Em nenhuma etapa (1) -> No processo inteiro (5)

**Perguntas de aprofundamento**

- Em quais etapas específicas do SDLC a IA está incorporada atualmente? (discovery, refinamento, código, QA, deploy, monitoramento...)
- O uso de IA está documentado em algum processo do time (DoD, Definition of Ready, runbooks)?
- Se uma nova pessoa entra no time, como ela aprende quais etapas usam IA?
- Existem etapas em que a IA foi testada e depois removida? Por que?
- O cliente sabe quais partes do processo de entrega usam IA?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | IA não está integrada em nenhuma etapa do processo. O uso é puramente pessoal e desestruturado. | "Usamos IA por fora, mas ela não faz parte de nenhum fluxo formal." |
| 2 | IA presente informalmente em 1 ou 2 etapas. Não documentada, depende do hábito individual. | "Alguns devs usam Copilot enquanto codam, mas é escolha pessoal." |
| 3 | IA incorporada em uma parte relevante do processo. O time a integrou conscientemente, mas não em tudo. | "Integramos IA em código e reviews de PR. Refinamento e QA ainda são manuais." |
| 4 | IA incorporada na maior parte do SDLC, documentada e esperada. O cliente tem ciência. | "IA está na nossa DoD. Cobre refinamento, desenvolvimento, geração de testes e documentação." |
| 5 | IA entrelacada em toda etapa significativa. O time não imagina o processo sem ela. | "Nosso pipeline inteiro, da criação de histórias ao monitoramento de deploy, tem pontos de contato com IA." |

### 12.2 O time tem exemplos de sucesso em que a IA melhorou eficiência ou qualidade do trabalho?

**Escala:** Nenhum (1) -> Muitos (5)

**Perguntas de aprofundamento**

- Conte um exemplo específico de como a IA foi usada no projeto e qual foi o resultado. Tem números?
- Alguma atividade que antes levava X horas passou a levar bem menos tempo por causa da IA?
- Houve melhoria mensurável de qualidade (menos bugs, menos retrabalho) atribuível a IA?
- Esse caso de sucesso foi documentado e compartilhado fora do time?
- O cliente sabe desses resultados? Ele reconhece a IA como parte da melhoria?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não há casos de sucesso ou exemplos. Nenhum resultado mensurável do uso de IA. | "Usamos, mas nunca medimos nada." |
| 2 | Percepção de melhoria, mas sem dados. "Parece que ficou mais rápido." | "Acho que economizei algumas horas com Copilot, mas não tenho número." |
| 3 | 1 ou 2 casos com resultados razoavelmente mensuráveis, mas sem documentação formal. | "Na sprint 12, geramos a suíte de testes 3x mais rápido usando IA." |
| 4 | Múltiplos casos documentados com métricas. O time apresenta resultados ao cliente regularmente. | "Temos um deck com 4 casos de uso de IA que apresentamos na revisão mensal." |
| 5 | IA faz parte da narrativa de valor. ROI calculado. Casos publicados internamente ou externamente. | O time calcula ROI de IA por sprint e apresenta ao cliente e à liderança da CI&T. |

**Nuance:** "Usamos IA em refinamento, código e testes" sem conseguir citar nenhum resultado concreto e nota 2-3, não 4. O critério aqui é evidência de valor, não apenas presença de uso.

### 12.3 Existe uma estratégia clara para utilizar IA em projetos futuros?

**Escala:** Nenhuma (1) -> Cristalina (5)

**Perguntas de aprofundamento**

- Existe alguma estratégia ou roadmap documentado para evoluir o uso de IA no time?
- O time tem um framework de governança para uso de IA: regras, responsabilidades, padrões de qualidade?
- Quem é dono da estratégia de IA do time? Existe uma pessoa nominalmente responsável?
- O cliente aprovou ou cocriou a estratégia de IA?
- A estratégia aborda preocupações de segurança de dados e privacidade no uso de IA?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não há estratégia. Cada pessoa faz o que quiser com IA, sem alinhamento ou governança. | "Cada dev decide por conta própria o que usa." |
| 2 | Há alguma consciência da necessidade de estratégia, mas nada documentado ou aplicado. | "Sabemos que provavelmente deveríamos ter algumas regras, mas não escrevemos nada." |
| 3 | Diretrizes informais conhecidas pelo time. Não documentadas, mas respeitadas coletivamente. | "Combinamos que todo código gerado por IA precisa passar por code review. Não está escrito, mas todos sabem." |
| 4 | Estratégia documentada com governança. Cliente ciente e alinhado. Ainda em evolução. | "Temos um checklist de IA na nossa Definition of Done. O cliente sabe disso." |
| 5 | Estratégia madura de IA, aprovada pelo cliente, com ownership claro, auditoria e alinhamento de segurança. | O time tem uma política formal de IA revisada pelo cliente, com owner definido e cadência periódica de revisão. |

## 4. Cultura e Mindset de Inovação

Avalia se existe um ambiente seguro e colaborativo para experimentação com IA, aprendizado a partir de falhas e inovação contínua.

**O que este pilar mede:** cultura não é o que o time faz, mas como o time se sente ao fazer. Um time pode ter todas as ferramentas e ainda assim não ter segurança psicológica para experimentar e aprender. Observe sinais emocionais e culturais, não apenas sinais técnicos.

### 13.1 O time é encorajado a experimentar novas tecnologias e abordagens?

**Escala:** Nunca (1) -> Constantemente (5)

**Perguntas de aprofundamento**

- Se alguém quiser testar uma nova ferramenta de IA, como é o processo? Precisa de aprovação?
- O time já teve experimentos de IA que não funcionaram? Isso foi tratado como aprendizado ou como problema?
- Existe tempo dedicado para experimentação ou a pressão de entrega sempre deixa isso de lado?
- O cliente incentiva inovação ou prefere estabilidade e previsibilidade?
- Alguém já propôs uma nova forma de usar IA e foi desencorajado? Por quem?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Não há espaço para experimentação. Inovação é vista como risco, não oportunidade. | "Não podemos mexer nisso. Temos prazo e o cliente não quer mudanças." |
| 2 | Existe abertura teórica, mas a pressão de entrega elimina qualquer experimentação na prática. | "Adoraríamos experimentar, mas nunca temos tempo." |
| 3 | Experimentação acontece nas margens: hackathons, projetos pessoais, mas não dentro da sprint. | "Fizemos um hackathon de IA no último fim de semana. No projeto real, ainda não testamos nada novo." |
| 4 | Experimentação é parte legítima da sprint. Tempo estruturado e alocado para isso. | "A cada sprint reservamos 20% da capacidade para experimentação com IA." |
| 5 | Cultura de inovação como vantagem competitiva. Cliente coinveste e incentiva ativamente. | O cliente financia um "AI Lab" interno com o time da CI&T para explorar casos de uso futuros. |

### 13.2 Existe um ambiente que promove a troca de ideias e a colaboração em projetos de IA?

**Escala:** Não existe (1) -> Fortemente (5)

**Perguntas de aprofundamento**

- Alguém já admitiu abertamente que tentou algo com IA e não funcionou como esperado? Como o time reagiu?
- Quando alguém descobre algo novo sobre IA, compartilha voluntariamente com o time?
- Existe alguma dinâmica em que errar com IA pega mal para a pessoa?
- As pessoas do time se ajudam a melhorar no uso de IA ou cada uma aprende isoladamente?
- Existe um canal ou ritual dedicado para compartilhar dicas, prompts ou experimentos de IA?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Cultura julgadora. Erros são usados contra as pessoas. Ninguém quer parecer desinformado. | "Se você comete um erro com IA e isso causa um problema, a responsabilidade é sua." |
| 2 | Não há punição, mas também não há incentivo para compartilhar. Cada um aprende no próprio silo. | "Cada um estuda IA por conta própria. Quase ninguém compartilha." |
| 3 | Ambiente ok: compartilhamento acontece organicamente, mas sem estrutura. | "De vez em quando alguém compartilha uma dica de IA no Slack e as pessoas respondem bem." |
| 4 | Cultura ativa de aprendizado. Falhas são discutidas como aprendizados. Compartilhar é frequente e esperado. | "Na daily sempre tem alguém compartilhando um prompt útil ou uma ferramenta nova." |
| 5 | Alta segurança psicológica. O time celebra experimentos que falharam. Aprendizado coletivo é um ritual. | A retrospectiva tem uma seção fixa: "O que aprendemos sobre IA nesta sprint: o que funcionou e o que não funcionou." |

**Armadilha clássica:** em algumas culturas corporativas, ninguém vai admitir que o ambiente não é seguro, especialmente com a pessoa avaliadora presente. Use histórias como proxy: "Conte uma vez em que a IA não funcionou como esperado e o que aconteceu" revela muito mais do que "você se sente seguro para falhar?"

### 13.3 O time se sente seguro para falhar e aprender com erros em experimentos de IA?

**Escala:** Improvável (1) -> Certamente (5)

**Perguntas de aprofundamento**

- O time já executou um experimento de IA que claramente falhou? O que aconteceu depois?
- Quando uma saída gerada por IA estava errada e causou um problema, como o time respondeu?
- Gestão ou cliente reagem de forma punitiva quando experimentos de IA não geram resultado?
- Existe um processo para capturar aprendizados de experimentos de IA que não funcionaram?
- Uma pessoa junior se sentiria confortável em dizer "tentei isso com IA e quebrei algo"?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Falhas são penalizadas. As pessoas evitam assumir riscos com IA para se proteger. | "Se um erro relacionado a IA chega em produção, a carreira da pessoa sofre impacto." |
| 2 | Tecnicamente não há punição, mas a falha gera atrito suficiente para as pessoas evitarem risco. | "Ninguém é demitido, mas você vai parar em várias reuniões desconfortáveis se algo der errado." |
| 3 | Falhas são toleradas, mas não acolhidas. O aprendizado acontece de forma informal e silenciosa. | "Se algo dá errado com IA, corrigimos e seguimos. Não falamos muito sobre isso." |
| 4 | Falhas são discutidas abertamente como oportunidades de aprendizado. O time trata experimentos como investimento, não como aposta. | "Tivemos um experimento de IA que deu muito errado na sprint passada. Fizemos uma retro completa sobre isso e melhoramos a abordagem." |
| 5 | O time celebra experimentos que falharam. Falhar de forma inteligente faz parte da cultura e é modelado ativamente pelas lideranças. | O lead do time compartilha em all-hands seus próprios experimentos de IA que falharam para normalizar o aprendizado com erros. |

## 5. Avaliação e Aprendizado Contínuo

Avalia se o time realiza avaliações regulares sobre o uso de ferramentas de IA, coleta feedback e se mantém atualizado com o estado da arte.

**O que este pilar mede:** a diferença entre um time que usa IA e um time que melhora continuamente a forma como usa IA. Ciclos de melhoria contínua, loops de feedback e conexão com a comunidade externa são os principais sinais aqui.

### 14.1 O time realiza avaliações regulares sobre o uso de IA e ferramentas agênticas?

**Escala:** Raramente (1) -> Constantemente (5)

**Perguntas de aprofundamento**

- Com que frequência o time avalia formalmente seu uso de IA: mensalmente, trimestralmente, nunca?
- Existe um ritual recorrente (espaço na retro, reunião dedicada, pesquisa interna) para avaliar como o time usa IA?
- O time já deixou de usar uma ferramenta de IA porque concluiu que ela não gerava valor?
- Alguém acompanha métricas de uso de IA? (tempo economizado, redução de bugs, taxa de aceitação do Copilot...)
- Como o time decide se vale a pena continuar usando uma ferramenta de IA?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Nenhuma avaliação. Ferramentas são usadas sem reflexão sobre efetividade. | "Usamos e pronto. Nunca paramos para avaliar." |
| 2 | Avaliação informal e reativa: só acontece quando alguém reclama muito de uma ferramenta. | "Se o time resmunga bastante, consideramos trocar." |
| 3 | Avaliações acontecem, mas sem cadência definida. Geralmente de forma passiva, aparecendo em retrospectivas. | "Às vezes na retro alguém comenta sobre uma ferramenta de IA que não está funcionando bem." |
| 4 | Avaliações regulares com cadência definida. Métricas básicas de uso são acompanhadas. | "Todo mês revisamos quais ferramentas de IA estamos usando e decidimos o que manter, substituir ou adicionar." |
| 5 | Processo maduro de melhoria contínua para IA. Dashboard com métricas de uso; decisões orientadas por dados. | O time tem um dashboard acompanhando taxa de aceitação do Copilot, tempo de code review e taxa de defeitos, todos correlacionados ao uso de IA. |

**Evidência concreta de nota 4:** "O time avaliava regularmente seu uso de ferramentas de IA: a cada sprint mostrava ao cliente a evolução do uso de IA em refinamento, código e outras atividades." Isso foi citado na reunião de kickoff como exemplo modelo para este item.

### 14.2 Existe um mecanismo para coletar feedback e melhorar o uso de IA dentro do time?

**Escala:** Não existe (1) -> Consistente (5)

**Perguntas de aprofundamento**

- Como o time coleta feedback sobre as ferramentas de IA que usa? Pesquisa, conversa informal, espaço na retro?
- O cliente já deu feedback sobre o uso de IA pelo time? Foi positivo, negativo ou indiferente?
- Quando alguém tem uma sugestão para melhorar o uso de IA, existe um canal para isso?
- Alguma mudança no processo de uso de IA foi feita como resultado direto de feedback? Qual?
- Existe algum log ou registro de aprendizados sobre uso de IA no projeto?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Nenhuma coleta de feedback. Não há mecanismo nem interesse em saber o que funciona ou não. | "Nunca coletamos feedback sobre isso." |
| 2 | Feedback chega de forma reativa: apenas quando algo dá muito errado. Não há processo proativo. | "Se alguém reclama, ouvimos. Mas não perguntamos ativamente." |
| 3 | Feedback interno coletado informalmente. Cliente não participa dessa conversa. | "Na retro, sempre alguém comenta para que usou IA e o que achou." |
| 4 | Feedback interno estruturado e cliente engajado na conversa sobre IA. Mudanças rastreáveis a partir de feedback. | "O cliente pediu para documentarmos melhor as saídas de IA. Adicionamos isso a nossa DoD." |
| 5 | Loop completo de feedback: interno, cliente e stakeholders. Sistema de melhoria contínua para práticas de IA. | O time tem um "AI Practice Board" com feedback contínuo, priorizando melhorias a cada sprint. |

### 14.3 O time participa de comunidades ou eventos externos para se manter atualizado sobre IA?

**Escala:** Improvável (1) -> Certamente (5)

**Perguntas de aprofundamento**

- Como o time se mantém atualizado sobre IA? (newsletters, podcasts, comunidades, LinkedIn, conferências)
- Alguém participa de comunidades externas de IA? (Kaggle, Hugging Face, meetups, fóruns)
- Quando um grande modelo ou uma nova ferramenta é lançada (novo GPT, Gemini, atualização do Claude), como o time fica sabendo: por acaso ou de forma sistemática?
- Alguém do time já apresentou em um evento externo de IA ou contribuiu com algum?
- O time tem fontes confiáveis, acompanhadas regularmente, sobre o estado da arte em IA?

**Rubrica de pontuação**

| Nota | O que você observa no time | Exemplo concreto |
| --- | --- | --- |
| 1 | Nenhum engajamento externo. O time desconhece tendências ou lançamentos recentes de IA. | "Não acompanho muito esse espaço. Uso o que a empresa fornece." |
| 2 | 1 ou 2 pessoas acompanham IA informalmente por interesse pessoal. Não é uma atividade do time. | "O tech lead é apaixonado por IA e acompanha de perto. O restante, nem tanto." |
| 3 | A maioria do time tem alguma forma passiva de atualização (LinkedIn, notícias gerais), mas sem participação em comunidades. | "Todo mundo vê os grandes anúncios no LinkedIn. Mas não participamos de nenhuma comunidade." |
| 4 | Participação ativa em comunidades ou eventos. Aprendizados externos são trazidos de volta para o time. | "Dois devs participam de um meetup mensal de IA e sempre trazem aprendizados para o time." |
| 5 | O time contribui para o ecossistema externo. Apresenta, publica e é reconhecido como referência. | Uma pessoa do time apresentou um caso de uso de IA em uma conferência e publicou um artigo no blog da CI&T. |

**Contexto adicional:** "Manter-se atualizado" também inclui participação em comunidades internas da CI&T: canais de IA no Slack, sessões de enablement, troca de conhecimento com outros Enablers. Não limite este critério apenas a comunidades externas.

## Calibração - Como Cada Nível de Maturidade Aparece na Prática

**Use esta seção para calibrar seu julgamento antes de ir a campo.** O objetivo é que diferentes Enablers cheguem a classificações semelhantes para contextos semelhantes. Leia os cinco níveis e pense em um time que você já conhece e que se encaixaria em cada um.

### Iniciante - 15-29

**Iniciativas isoladas, sem estratégia clara**

Pouco ou nenhum uso consistente de IA. Quando existe, é individual e não tem impacto coletivo. Sem estratégia, governança ou métricas. O conceito de "agente de IA" é desconhecido para a maioria. O time entrega valor, mas sem alavancagem de IA no processo.

**Sinais**

- Poucos ou nenhum usuário de ferramentas de IA
- Sem casos de sucesso
- Sem treinamento estruturado
- Conhecimento muito básico de IA

### Intermediário - 30-44

**Alguma adoção, sem governança centralizada**

Partes do time usam IA com alguma regularidade, mas sem coordenação. Não há governança clara nem compartilhamento organizado de conhecimento. Existe interesse genuíno e alguns casos de sucesso, mas não há abordagem sistêmica. Cada pessoa segue uma direção diferente.

**Sinais**

- Algumas pessoas usam, outras não
- Sem alinhamento de ferramentas
- Casos isolados, sem documentação
- Cultura positiva, mas desorganizada

### Avançado - 45-54

**Visão corporativa de IA, gerando valor real**

IA faz parte do processo do time, com casos de sucesso mensuráveis. Existe governança informal e alinhamento sobre uso de ferramentas. O time demonstra casos reais que geraram valor para o cliente. O ROI ainda não é formalmente calculado e não há programa de inovação contínua.

**Sinais**

- IA usada diariamente
- Casos com resultado mensurável
- Governança informal em vigor
- Cliente percebe valor

### Especialista - 55-64

**ROI calculado, IA incorporada nas operações**

Processos maduros de uso de IA, com métricas, avaliações regulares e feedback estruturado. O time consegue calcular ROI do uso de IA. A adoção é ampla e consistente. O cliente está engajado e reconhece valor. O time tem capacidade para evangelizar outros.

**Sinais**

- ROI calculado por sprint
- Governança formal
- Cliente coinveste em IA
- Avaliações estruturadas regulares

### Líder Inovador - 65-75

**Na fronteira: define tendências, não apenas as segue**

Além do nível Especialista, o time aplica modelos de estado da arte, lança inovações com cadência e consistência e é reconhecido como referência interna e externa. O time contribui para o ecossistema e é reconhecido como líder em IA tanto no cliente quanto dentro da CI&T.

**Sinais**

- Referência interna e externa
- Publica e apresenta casos
- Roadmap de inovação em IA
- Adota modelos de estado da arte
- Capacita outros times

## Armadilhas Comuns e Dicas de Campo

### Erros mais comuns dos Enablers

- **Inflar notas para "ajudar o time":** uma nota baixa é oportunidade de melhoria, não julgamento. Inflar distorce a linha de base e prejudica o plano de ação.
- **Confiar na primeira resposta sem aprofundar:** "Sim, usamos bastante IA" sem exemplos concretos raramente reflete a realidade. Sempre use 2-3 perguntas de aprofundamento antes de pontuar.
- **Avaliar a conta, não a squad:** se você está avaliando a Squad A, avalie a Squad A. Contas grandes têm squads em níveis de maturidade muito diferentes.
- **Não documentar a justificativa:** sem justificativa, Enablers não conseguem comparar avaliações nem explicar notas para lideranças e clientes.

### Dicas que funcionam na prática

- **Peça exemplos da última sprint:** "Conte algo que vocês fizeram com IA na última sprint" é a pergunta de avaliação mais efetiva. Sem exemplo concreto recente, a nota desce.
- **Traga Orchestrator e Engineer juntos:** perspectivas diferentes revelam contradições: uma pessoa diz "usamos muito", a outra diz "quase nada". Essa tensão é valiosa.
- **Use o teste "se removêssemos IA hoje...":** "Se eu proibisse ferramentas de IA hoje, como a entrega de vocês mudaria?" A resposta emocional revela a profundidade real de integração muito melhor que perguntas diretas.
- **Quando estiver entre 3 e 4, fique com 3:** é melhor subestimar e surpreender positivamente depois. O importante é a precisão da linha de base, não o número em si.

## Caso Especial: Squads Novas Sem Histórico de Execução

**Problema:** como avaliar uma squad que ainda está sendo estruturada e não tem histórico de uso de IA?

**Opção 1 (preferida):** use uma squad com tecnologia e contexto de negócio semelhantes como referência e documente claramente que é uma extrapolação.

**Opção 2:** avalie o que existe: o conhecimento e a experiência dos membros individuais em outros contextos, mesmo que ainda não tenham sido aplicados nesta squad.

**O que não fazer:** não atribua nota 1 automaticamente apenas porque "não há histórico". Avalie o ponto de partida real e o potencial do time.

**Documentação obrigatória:** sempre que usar referência cruzada ou extrapolação, documente: (1) qual squad foi usada como referência, (2) o que justifica a comparação, (3) quais são os riscos da extrapolação.

---

Guia de Campo do Enabler - Avaliação de Maturidade em IA - CI&T Agentic SDLC Scale Up - Versão 1.0 - Abril de 2026

Dúvidas? Compartilhe no canal do grupo antes da sessão. Não improvise na frente do cliente.
