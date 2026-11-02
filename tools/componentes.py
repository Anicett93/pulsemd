"""Copia components/header.html e components/footer.html para dentro de cada página.

Assim o menu e o rodapé já vêm no HTML (robôs de busca e de IA que não rodam JS os enxergam).
Rodar depois de editar qualquer arquivo em components/:  python tools/componentes.py
"""
import glob, io, os, re

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
for nome in ('header', 'footer'):
    html = io.open(f'components/{nome}.html', encoding='utf-8').read().strip()
    bloco = f'<div id="{nome}">\n{html}\n<!-- /{nome} --></div>'
    # casa tanto o div vazio original quanto um bloco já gerado antes
    padrao = re.compile(rf'<div id="{nome}">(?:.*?<!-- /{nome} -->)?</div>', re.S)
    for pagina in sorted(glob.glob('*.html')):
        s = io.open(pagina, encoding='utf-8').read()
        novo, n = padrao.subn(lambda m: bloco, s)
        assert n == 1, f'{pagina}: {n} blocos de {nome}'
        if novo != s:
            io.open(pagina, 'w', encoding='utf-8', newline='').write(novo)
print('ok')
