# Hyperframes Composition Brief: PulseMD + HiCardi

## Objective
Vídeo curto de apresentação do serviço de monitorização cardíaca prolongada domiciliar da PulseMD com o HiCardi.

## Output
- Composition directory: `videos/pulsemd-hicardi/composition/`
- Rendered video: `videos/pulsemd-hicardi/brag.mp4`
- Format: landscape — 1920x1080, 30 fps
- Duration: 22 segundos

## Source Material
- Project root: repositório `pulsemd` (site estático pulsemd.com.br)
- Primary files read: index.html, monitorizacao-cardiaca.html, hicardi-monitorizacao.html, holter-7-dias.html, css/style.css, llms.txt
- Product name: PulseMD · HiCardi
- Tagline / strongest claim: monitorização cardíaca prolongada em casa, com traçado acompanhado em tempo real e laudo por especialista em até 7 dias úteis
- Key UI or visual moment to recreate: o traçado de ECG azul com brilho (hero do site); o desenho técnico real do HiCardi+; a tela do app HiCardi (recriada em HTML, sem verde, na paleta da marca)
- Copy that must appear verbatim:
  - Uma arritmia pode não aparecer em 24 horas.
  - Detecção de arritmias · Holter 24 horas 19,0% · Patch por 7 dias 34,5%
  - Kim et al., Journal of Arrhythmia, 2023 · 58 pacientes
  - Sem fios. Colado no peito. Por até 7 dias.
  - Acompanhado em tempo real.
  - Patch · Celular · Nuvem · Especialista
  - Laudo por especialista em até 7 dias úteis.
  - Atendimento em todo o Brasil.
  - pulsemd.com.br

## Creative Direction
- Tone preset: polished
- Creative direction: filme de produto de saúde, sereno e preciso: "o coração acompanhado em casa"
- Interpretation: 5 cenas com permanência longa, crossfades suaves de 0,5s, tipografia de peso médio; nenhum exagero nem promessa além das fontes
- Angle: abrir no problema real (arritmia intermitente escapa do Holter 24h), provar com o dado publicado e só então mostrar o aparelho e o caminho do sinal
- Hook: traçado de ECG se desenhando + "Uma arritmia pode não aparecer em 24 horas."
- Outro / punchline: logo PulseMD, laudo em até 7 dias úteis, todo o Brasil, pulsemd.com.br
- Avoid:
  - Linguagem genérica de SaaS
  - Visuais abstratos de enchimento
  - Verde (a identidade MIV proíbe)
  - Afirmar que o estudo de 2023 usou o HiCardi (o abstract não diz)

## Visual Identity
- Background: #0A1633
- Text: #F6F8FC
- Accent: #2F6BFF (sinal), #5B8CFF (brilho), #002BAD (cobalto)
- Display font: Space Grotesk (arquivo local, OFL)
- Body font: Inter (arquivo local, OFL)
- Visual references from the project: hero com traçado ECG e radial glow azul; imagens/case_hicardi_2d.png; logo-branco.png

## Storyboard
Contrato criativo: `brag-plan.md`.
1. Gancho — 0,0-4,2s — traçado ECG + frase do gancho
2. O dado — 3,8-9,6s — duas barras (19,0% e 34,5%) + fonte
3. O HiCardi — 9,1-13,6s — desenho técnico + três frases curtas
4. Em tempo real — 13,1-18,8s — celular com traçado ao vivo + 4 etapas do sinal
5. Desfecho — 18,3-22,0s — logo, duas linhas, endereço

## Audio
- Audio role: cinematic support, discreto
- Audio arc: entra suave no gancho, sustenta baixo, sai em fade sob o logo
- Music: happy-beats-business-moves-vol-12-by-ende-dot-app.mp3, ~0,28 de volume via lane de automação
- Music cue guidance: preset bundled vol-12 (~110 BPM). Locks: 9,29s (entrada do HiCardi), 13,11s (título tempo real), 18,56s (logo). Beat-grid para as 4 etapas: 13,64 / 14,73 / 15,84 / 16,93s (a cada dois beats, para a leitura acompanhar).
- Audio-reactive treatment: subtle; RMS/graves fazem o brilho de fundo e o halo do HiCardi respirarem. Sem visualizador.
- Audio-coupled moments: barra de 34,5% completa (rollover2), entrada do desenho (impactSoft_medium_001), primeira e última etapa do sinal (click_003), logo (bong_001)
- SFX analysis guidance: `.claude/skills/brag/assets/sfx/sfx-analysis.md`, somente arquivos de baixo risco de agudos
- Audio files: copiados para `composition/assets/`
