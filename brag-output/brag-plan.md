# brag-plan — Trace-ECG (NodeHealth by PulseMD)

**O que é:** um app web (PWA, sem instalação) que guia a leitura sistemática de um ECG de 12 derivações pelo método TRACE-ECG, em 8 etapas.
**Para quem:** estudantes e residentes de medicina estudando ECG.
**Diferencial:** não é um resumo — segue o artigo original passo a passo, com os trechos reais do artigo disponíveis em cada etapa, e calcula os limiares (FC, QTc, supra de ST) a partir das medidas que a pessoa faz.
**Claim mais forte:** funciona offline, direto no navegador, sem paywall (por enquanto).
**Gancho visual:** o diagrama de posicionamento dos eletrodos (traço estilo livro-texto, acabado de redesenhar) e as 8 etapas T·R·A·C·E·E·C·G como chips.
**UI/fluxo real a mostrar:** tela inicial com as 8 etapas + botão "Iniciar análise"; diagrama de eletrodos (SVG real do app).
**Tom:** `default` — leve, direto, "postável". Não é piada (é ferramenta de estudo clínico), mas também não é folheto corporativo.
**Legenda de divulgação (1 linha):** "TRACE-ECG: leitura sistemática de ECG em 8 etapas, direto no navegador — grátis, sem instalar. pulsemd.com.br/trace-ecg"

## Formato
Landscape 1920×1080, ~19s, 24fps.

## Storyboard

| # | Tempo | Cena | Conteúdo |
|---|-------|------|----------|
| 1 | 0.0–2.5s | **Hook** | Fundo escuro (#060B18), traço de ECG fino atravessando a tela, texto: "Ler um ECG de 12 derivações não devia ser adivinhação." |
| 2 | 2.5–5.5s | **Reveal** | Logo Trace-ECG (ícone real + wordmark) + "NodeHealth by PulseMD" + "Leitura sistemática, direto do navegador." |
| 3 | 5.5–9.5s | **Highlight 1** | Recorte real da tela inicial (as 8 etapas T·R·A·C·E·E·C·G) — zoom lento revelando a lista. Legenda: "8 etapas. Na ordem do método TRACE-ECG." |
| 4 | 9.5–13.5s | **Highlight 2** | Diagrama de eletrodos (SVG real do app, redesenhado em traço estilo livro-texto) com leve zoom. Legenda: "Cada eletrodo, no marco anatômico certo." |
| 5 | 13.5–16.5s | **Highlight 3** | Moldura de navegador com a tela real dentro. Legenda: "Sem instalar. Funciona offline." |
| 6 | 16.5–19s | **Punchline / CTA** | "pulsemd.com.br/trace-ecg" grande, brilho ciano, traço de ECG. |

## Identidade visual (real, do app)
- Fundo: `#060B18` · superfície: `#0E1426` / `#161F38`
- Azul: `#2F6BFF` · ciano de destaque: `#37E5FF`
- Texto: `#EAF0FF` (primário) / `#9BA8C9` (secundário)
- Display: Space Grotesk (SemiBold/Bold) · UI: Inter

## Som
Pad sintetizado simples (acordes em Dm9, andamento calmo) + um "blip" curto na virada de cada cena, tudo sintetizado via ffmpeg (sem biblioteca de sample pronta disponível neste ambiente). Volume baixo, sem picar.
