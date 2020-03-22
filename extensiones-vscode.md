# Extensiones y configuraciones

Esta es una lista de extensiones que utilizo en mi instalación de VS Code, en ⭐️pongo las que más me gustan y uso.

## Generales

-   ⭐️Activity Bar ([link](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)): hace más chica la barra de actividades para que se vea minimizada en la barra de estado.
-   ⭐️Bracket Pair Colorizer 2 ([link](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)): le da color a `{}()[]` para que sea más fácil de identificar las aperturas y cierres.
-   Copy Relative Path ([link](https://marketplace.visualstudio.com/items?itemName=alexdima.copy-relative-path)): es una extensión que me permite copiar la ubicación del archivo que estoy usando.
-   ⭐️Copy Syntax ([link](https://marketplace.visualstudio.com/items?itemName=atian25.copy-syntax)): permite copiar el código manteniendo el resaltado de colores de la sintaxis. Muy útil cuando tengo que compartir código en un mensaje, correo o en una presentación.
-   Copy with line numbers ([link](https://marketplace.visualstudio.com/items?itemName=diigu.copywithline)): permite copiar el código con los números de línea. Muy útil cuando tienes que hablar sobre código.
-   ⭐️DotENV ([link](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)): resaltado de sintaxis para archivos .env
-   ⭐️EditorConfig ([link](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)): sobrescribe las configuraciones del editor (tipo de espaciado, cantidad de carácteres por línea, etcétera) para que sigan un las configuraciones de un proyecto.
-   Gitignore ([link](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)): resaltado de sintaxis para archivos .gitignore
-   ⭐️GitLens ([link](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)): te permite ver más información de Git dentro del editor.
-   ⭐️Indent Rainbow ([link](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)): le da un color a las identaciones para facilitar su lectura en el editor.
-   Sort Lines ([link](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)): realiza el ordenamiento de un conjunto de líneas de una forma dada.

## Específicas de lenguaje

### HTML + CSS + Javascript

-   Beautify ([link](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)): embellece el código para que siga un estándar de formato.
-   Highlight Matching Tag ([link](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)): resalta de forma inteligente las etiquetas de apertura y de cierre para una persona.
-   jQuery Code Snippets ([link](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets)): colección de Snippets para Javascript.

### PHP

-   ⭐️Intelephense ([link](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)): autocompletado inteligente para PHP.
-   ⭐️PHP DocBlocker ([link](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)): hace más fácil escribir comentarios de PHP ya que hace sugerencias de formato y de contenido de forma inteligente.

### Unity

-   Unity Code Snippets ([link](https://marketplace.visualstudio.com/items?itemName=kleber-swf.unity-code-snippets)): Colección de Snippets para Unitu

## Configuraciones que usuario

Las configuraciones de usuario permiten la customización del editor a tus necesidades. Las configuraciones que yo uso son:

```json
{
  // Controla el ancho del cursor
  "editor.cursorWidth": 4,
  // Encuentrala en: https://www.jetbrains.com/lp/mono/
  // Otras fuentes: http://www.programmingfonts.com/
  "editor.fontFamily": "JetBrains Mono",
  // Si la fuente sopota ligaturas, las activa
  "editor.fontLigatures": true,
  // Controla el tamaño de la fuente por lo general trabajo entre
  // 12 y 14
  "editor.fontSize": 14,
  // Dibuja las líneas verticales en el editor una en el caracter
  // 80, 100 y 120
  // https://nickjanetakis.com/blog/80-characters-per-line-is-a-standard-worth-sticking-to-even-today
  "editor.rulers": [80, 100, 120],
  // Muestra las líneas de identación
  "editor.renderIndentGuides": true,
  // Muestra un caracter en lugar de solo un espacio vacío.
  // Me apoyo mucho para ver que este usando la identación correcta.
  "editor.renderWhitespace": "all",
  // Soy Team Spaces > Tabs, puedes ver más aquí:
  // https://softwareengineering.stackexchange.com/questions/57/tabs-versus-spaces-what-is-the-proper-indentation-character-for-everything-in-e
  // https://www.youtube.com/watch?v=V7PLxL8jIl8
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  // Reduce el espacio entre las letras
  "editor.letterSpacing": 0,
  // Siempre resalta la línea en la que estoy trabajando
  "editor.renderLineHighlight": "all",
  // Cuando llego a la linea 80 automáticamente baja el texto a la siguiente línea
  "editor.wordWrapColumn": 80,
  // Cambia el titulo de la ventaana para que me muestre todo el path
  "window.title": "${activeEditorMedium}${separator}${rootName}"
}
```

## Recursos

Algunos recursos interesantes para el manejo de VS Code.

- [Boost your Coding Fu with Visual Studio Code and Vim](https://www.barbarianmeetscoding.com/blog/2019/02/08/boost-your-coding-fu-with-vscode-and-vim)
- [How to use VS Code like a pro?](https://medium.com/club-devbytes/how-to-use-v-s-code-like-a-pro-fb030dfc9a72)
- [https://vscode.xyz/](https://vscode.xyz/)

