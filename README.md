# Office Empire — Integração ThirdAngle

Versão de teste em **HTML, CSS e JavaScript**, com sprites reais do `ThirdAngle - Isometric Office Starter Pack (FREE)` incorporados ao cenário. Não usa bibliotecas externas, internet nem servidor.

## Como iniciar
1. Extraia o ZIP inteiro; mantenha `assets/` ao lado dos arquivos HTML e JS.
2. Abra `index.html` em um navegador moderno, ou publique a pasta na raiz de um repositório GitHub Pages.
3. Escolha um dos seis personagens, clique em **Trabalhar**, contrate colegas no painel **Equipe** e explore as melhorias.

## Assets integrados
- Sala e paredes: os PNGs `floor_office_carpet_tile`, `wall_plain_left/right`, `wall_office_window_left/right`, `wall_end_left/right` criam `assets/room-background.png` em uma grade isométrica 2:1. Este cenário **não contém funcionários nem mesas**, permitindo reconstrução sem emendas.
- Móveis renderizados em camadas: `cubicle_workstation`, `ergonomic_office_chair`, `standing_desk`, `planter_divider_shelf`, `multifunction_printer`, `copy_paper_box_stack`.
- Personagens: `worker-1-0.png` a `worker-6-1.png`, originais deste protótipo e **separados** do chão e dos móveis. Possuem dois quadros simples de digitação.

Os PNGs do pack permanecem em resolução original e são desenhados sem suavização. Os PNGs `worker-*` são sprites adicionais criados para a demonstração; **o starter não inclui personagens nem teclado/mouse/notebook como objetos individuais**. O monitor e o teclado exibidos fazem parte do sprite `cubicle_workstation`, portanto não podem ser animados separadamente sem arte adicional.

## Jogo e saves
- `localStorage` por nome de usuário (compatível com a chave `oe_iso_save_<usuario>` da base anterior).
- Usuários de teste **não são contas online** e senhas fictícias são guardadas localmente sem criptografia. Nunca reutilize senhas reais.
- Menu Configurações permite criar/entrar em contas, exportar/importar save e iniciar um novo jogo.
- Renda passiva, trabalho, XP, promoções, upgrades, startup, eventos, conquistas, prestígio.
- Ganhos offline limitados a 4 horas quando o navegador fica fechado.

## Crédito e licença
Os sprites ThirdAngle originais foram fornecidos pelo usuário e são de **ThirdAngle / Playworks North**. O `README.txt` do pack informa permissão para uso em jogos comerciais e não comerciais, edição e crédito opcional, mas **proíbe redistribuir ou revender os sprites como um pack de assets**. Este ZIP é um jogo de demonstração, não um pacote de revenda de sprites.

Fonte indicada no README original do pack: https://thirdangle.itch.io/office-pack
