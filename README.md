# Portfolio profesional de Organización de Eventos

Portfolio estático, bilingüe y responsive para un perfil junior de **Event Management / Organización de Eventos** con orientación internacional. Está desarrollado con HTML5, CSS3 y JavaScript puro: no necesita instalación, compilación, dependencias ni backend.

> Los contenidos marcados con corchetes y los proyectos conceptuales son editables. No representan experiencias o resultados reales hasta que se sustituyan.

## Abrir localmente

Haz doble clic en `index.html`. Todas las rutas son relativas y la web funciona mediante `file://`. También puedes servir la carpeta con cualquier servidor estático.

## Estructura

```text
PortfolioWeb/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js          # arranque, accesibilidad y hooks de traducción
│   └── portfolio.js     # traducciones, proyectos e interacciones
├── assets/
│   ├── images/          # placeholders SVG locales
│   ├── icons/favicon.svg
│   └── documents/INSTRUCCIONES.txt
├── README.md
└── .gitignore
```

## Cambiar textos y datos personales

Busca `REPLACE` en `index.html` y `js/portfolio.js`. Sustituye:

- `Your Name` / `Tu Nombre` e iniciales `EM`.
- Correo, teléfono, ciudad y disponibilidad.
- Universidad, ciudad y fechas de estudios.
- Experiencias, prácticas y voluntariados.
- LinkedIn, Instagram y portfolio adicional.
- Proyectos, asistentes y resultados verificables.
- Testimonios reales y autorizados.

El texto inicial se encuentra en `index.html`. Las versiones EN/ES están en el objeto `translations` de `js/portfolio.js`. Cada elemento traducible usa una clave como `data-i18n="navHome"`; si añades una, inclúyela en `translations.en` y `translations.es`. Los datos ampliados de proyectos están en `projectData.en` y `projectData.es`.

## Sustituir imágenes

Los archivos de `assets/images` son placeholders locales para que el diseño funcione sin depender de servicios externos.

1. Guarda fotos optimizadas en `assets/images` (WebP o AVIF recomendado; JPG como alternativa).
2. Cambia los `src` y textos `alt` correspondientes en `index.html`.
3. Para proyectos, cambia también la propiedad `image` en `js/portfolio.js`.
4. Intenta mantener cada imagen por debajo de 300–500 KB.

## Añadir el currículum

Guarda el CV real como:

```text
assets/documents/cv.pdf
```

Los botones ya apuntan a esa ruta. Si usas otro nombre, cambia `href="assets/documents/cv.pdf"` en `index.html`. No se incluye un CV ficticio para evitar publicar datos incorrectos o personales por error.

## Enlaces sociales y contacto

Edita en `index.html` los valores `href` de LinkedIn, Instagram, correo (`mailto:`) y teléfono (`tel:`). Sustituye además `your.email@example.com` en `js/portfolio.js`, dentro del fallback del formulario.

## Netlify Forms

El formulario ya incluye `name="contact"`, `method="POST"`, `data-netlify="true"`, `form-name` y honeypot anti-spam.

- Localmente, en GitHub Pages o en otro hosting, JavaScript valida los campos y abre `mailto:`.
- En un subdominio `*.netlify.app`, se envía a Netlify Forms.
- Tras el primer despliegue, revisa **Forms** en Netlify y realiza un envío de prueba.

## Publicar en GitHub Pages

1. Sube el proyecto a la rama `main`.
2. Ve a **Settings → Pages**.
3. Selecciona **Deploy from a branch**.
4. Elige `main` y `/ (root)`.
5. Guarda y espera a que aparezca la URL.

GitHub Pages no procesa Netlify Forms; allí se usa el fallback `mailto:`.

## Publicar en Netlify

1. Selecciona **Add new site → Import an existing project**.
2. Conecta el repositorio.
3. No indiques comando de build.
4. Usa `.` como directorio de publicación si se solicita.
5. Despliega y prueba el formulario.

También puedes arrastrar la carpeta completa a Netlify Drop.

## Git: commit y push

Desde `PortfolioWeb`:

```bash
git add .
git commit -m "feat: crear portfolio profesional de organización de eventos"
git branch -M main
git push -u origin main
```

El remoto ya está configurado. No se realiza ningún push automáticamente.

## Funcionalidades

- Navegación fija, sección activa, scroll suave y menú móvil accesible.
- Selector EN/ES sin recarga y preferencia guardada localmente.
- Hero, sobre mí, experiencia, formación, proyectos, competencias, idiomas, valores, testimonios y contacto.
- Seis conceptos de proyecto editables con modal, Escape, clic exterior y restauración de foco nativa.
- Animaciones que respetan `prefers-reduced-motion`.
- Validación del formulario y compatibilidad con Netlify Forms.
- Año automático, volver arriba, SEO, Open Graph, favicon y HTML semántico.

## Lista final antes de publicar

- Buscar `REPLACE`, `Add`, `Añadir` y `[` y sustituir los placeholders.
- Añadir `assets/documents/cv.pdf`.
- Probar enlaces, correo, teléfono y descarga.
- Revisar ambos idiomas y cada modal.
- Probar el formulario en el hosting elegido.
- Comprimir las fotos y actualizar sus textos alternativos.
- Cambiar `og:image` si preparas una imagen social específica.
