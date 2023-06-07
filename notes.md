# Notes

`./assets`: Onde ficam todos os arquivos estáticos que irão ser servidos pela aplicação.

## Densidade de pixel

Existem Pixels de harware e pixels de softwares. Para montarmos o app precisamos verificar a densidade de pixels da tela em que iremos renderizar tudo. Quanto maior é a densidade de pixels, maior a quantidade de pixels dentro de uma área física tornando melhor a visualização de detalhes.

DPI (Dots per Inch) e Points são unidades padrão para Android e iOS, respectivamente, para que os elementos em tela fiquem correspondentes, para suprir essas diferenças entre tamanho detelas e densidades muito vairadas encontradas no mercado. Por esse motivo que não se usam pixels no React Native, mas sim números inteiros