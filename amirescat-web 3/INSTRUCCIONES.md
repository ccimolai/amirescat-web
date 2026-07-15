# AMIRESCAT — Instrucciones paso a paso (para Mac)

No necesitas saber programar para seguir esto. Ve haciendo los pasos en orden.

## Qué hay en esta carpeta

```
amirescat-web/
├── index.html            → página de Inicio
├── reptes.html            → página de Retos y objetivos del proyecto
├── investigadors.html     → página de Investigadores/as
├── contacte.html          → página de Contacto
├── css/style.css          → todo el diseño (colores, tipografía)
├── js/translations.js     → todos los TEXTOS en catalán, castellano e inglés
├── js/researchers.js      → los datos de cada investigador/a
├── js/main.js             → el código que hace funcionar el cambio de idioma
├── img/logo.svg            → el logo (versión simplificada, ver paso 4)
└── INSTRUCCIONES.md       → este archivo
```

La web tiene 4 páginas y un botón CA / ES / EN arriba a la derecha que cambia el idioma de toda la página sin recargarla.

---

## Paso 1 — Ver la web en tu ordenador (sin instalar nada)

La forma más simple: en el Finder, busca la carpeta `amirescat-web`, entra en ella y haz doble clic en `index.html`. Se abrirá en tu navegador (Safari o Chrome) y ya puedes navegar por toda la web.

Si al hacer doble clic ves la página "rota" (sin colores, sin fotos), usa el Paso 2, que es más fiable.

## Paso 2 — Ver la web con un servidor local (recomendado)

Este método evita problemas que a veces da el navegador al abrir archivos directamente.

1. Abre el **Finder** → **Aplicaciones** → **Utilidades** → doble clic en **Terminal**. (O más rápido: pulsa `Cmd + Espacio`, escribe "Terminal" y pulsa Intro.)
2. Se abrirá una ventana negra o blanca con texto. Ahí escribes comandos.
3. Escribe `cd ` (con un espacio después), y luego **arrastra la carpeta `amirescat-web` desde el Finder hasta la ventana de Terminal**. Verás que se escribe sola la ruta de la carpeta. Pulsa **Intro**.
4. Ahora escribe exactamente esto y pulsa Intro:
   ```
   python3 -m http.server 8000
   ```
5. Verás un mensaje como "Serving HTTP on ... port 8000". Eso significa que está funcionando. **No cierres esta ventana.**
6. Abre tu navegador (Safari, Chrome...) y ve a esta dirección:
   ```
   http://localhost:8000
   ```
7. Ya puedes navegar por la web. Para pararla, vuelve a la Terminal y pulsa `Control + C`.

---

## Paso 3 — Cambiar textos

Todos los textos de la web (en los 3 idiomas) están en un solo archivo: `js/translations.js`.

1. Abre ese archivo con el **TextEdit** de tu Mac (clic derecho sobre el archivo → Abrir con → TextEdit), o mejor con una app gratuita llamada **Visual Studio Code** (buscar "Visual Studio Code" en Google, descargar e instalar; luego arrastra la carpeta `amirescat-web` dentro de la ventana de VS Code).
2. Verás bloques como este:
   ```
   "hero.title": "Fer del sud de Catalunya un territori resilient davant el canvi climàtic",
   ```
   El texto entre comillas después de los dos puntos es lo que se muestra en la web. Puedes cambiarlo, pero **no borres las comillas ni la coma final**.
3. Hay tres bloques grandes: `ca: {...}` (catalán), `es: {...}` (castellano) y `en: {...}` (inglés). Cambia el texto en el idioma que quieras editar.
4. Guarda el archivo (`Cmd + S`) y recarga la página del navegador para ver el cambio.

Para cambiar las biografías de los investigadores/as, edita `js/researchers.js` de la misma forma (busca el nombre de la persona y cambia el texto `bio.ca`, `bio.es` o `bio.en`).

## Paso 4 — Poner tu logo real

Ahora la web ya usa el archivo `img/logo.png` en todas las páginas (icono de pestaña, menú y portada). Ahora mismo es una versión dibujada a partir del logo que me enviaste (el edificio gótico en granate) como aproximación, no un calco exacto.

Como tu imagen no tiene fondo transparente, en el menú y en la portada el logo va dentro de una "tarjeta" blanca redondeada con sombra, para que el fondo blanco quede integrado en el diseño en vez de verse como un recorte feo.

Para poner tu imagen real:
1. Guarda tu logo en formato PNG con el nombre exacto **`logo.png`** (puede tener fondo blanco, no hace falta que sea transparente).
2. Cópialo dentro de la carpeta `amirescat-web/img/`, sustituyendo al que ya hay.
3. Recarga el navegador. No hace falta tocar ningún código: todas las páginas ya apuntan a ese archivo.

Si prefieres, adjunta la imagen del logo en el chat y la coloco yo misma.

---

## Paso 5 — Publicar la web gratis con GitHub Pages

Esto hace que tu web tenga una dirección real en internet (tipo `https://tuusuario.github.io/amirescat-web`) sin pagar nada.

### 5.1 Crear una cuenta de GitHub
1. Ve a **https://github.com** y haz clic en **Sign up**.
2. Sigue los pasos con tu correo, un nombre de usuario y una contraseña.

### 5.2 Crear un repositorio (una "carpeta" en GitHub)
1. Ya con sesión iniciada, haz clic en el botón verde **New** (o el símbolo `+` arriba a la derecha → **New repository**).
2. En "Repository name" escribe: `amirescat-web`
3. Marca la opción **Public**.
4. Haz clic en **Create repository**. No marques ninguna otra casilla.

### 5.3 Subir los archivos (sin usar la Terminal)
1. En la página del repositorio que se acaba de crear, haz clic en el enlace **uploading an existing file**.
2. Abre el Finder, entra en la carpeta `amirescat-web`, selecciona **todos los archivos y carpetas de dentro** (Cmd + A) y arrástralos a la zona de GitHub que dice "Drag files here to add them to your repository".
3. Espera a que termine de subir (puede tardar según tu conexión).
4. Abajo, en "Commit changes", deja el texto que sale por defecto y haz clic en el botón verde **Commit changes**.

### 5.4 Activar GitHub Pages
1. Dentro del repositorio, ve a la pestaña **Settings** (arriba).
2. En el menú de la izquierda, haz clic en **Pages**.
3. En "Branch", elige **main** y en la carpeta selecciona **/ (root)**. Haz clic en **Save**.
4. Espera 1-2 minutos y recarga la página. Arriba te aparecerá un mensaje: "Your site is live at https://tuusuario.github.io/amirescat-web/". Esa es tu web publicada.

### 5.5 Actualizar la web en el futuro
Cada vez que cambies algo en tu ordenador (por ejemplo, un texto en `translations.js`):
1. Entra en tu repositorio en github.com.
2. Abre el archivo que cambiaste, haz clic en el icono del lápiz (Edit), pega el nuevo contenido y haz clic en **Commit changes**.
   - O bien repite el paso 5.3 arrastrando de nuevo los archivos (GitHub te preguntará si quieres reemplazarlos: di que sí).
3. Los cambios se publican solos en 1-2 minutos.

---

## Resumen de lo que hay que saber

- Para **ver** la web en tu ordenador: doble clic en `index.html`, o usa el servidor local del Paso 2.
- Para **cambiar textos**: edita `js/translations.js` (contenido general) o `js/researchers.js` (biografías).
- Para **publicar**: sube la carpeta entera a GitHub y activa GitHub Pages (Paso 5).

Si te atascas en cualquier paso, dime exactamente en qué punto estás y qué ves en pantalla, y seguimos desde ahí.
