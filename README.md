# PetCare Cimitarra · Maquetación HTML y CSS

Maquetación inicial de la interfaz web, basada en el prototipo de Figma
(archivo "PetCare Cimitarra — Interfaz"). No incluye lógica de negocio ni base de datos:
valida la estructura visual y la navegación entre pantallas.

## Cómo abrirla

Abre `index.html` en el navegador (doble clic). No requiere instalación.
Necesita conexión solo para cargar la fuente Inter desde Google Fonts; sin conexión usa una fuente del sistema.

## Estructura

| Archivo | Pantalla en Figma |
|---|---|
| `index.html` | 01 · Login |
| `registro.html` | 02 · Registro |
| `panel.html` | 03 · Panel principal (dueño) |
| `animales.html` | 04 · Gestión de animales |
| `nueva-solicitud.html` | 05 · Nueva solicitud |
| `mis-solicitudes.html` | 06 · Mis solicitudes (propuestas) |
| `historial.html` | 07 · Historial del animal |
| `panel-veterinario.html` | 08 · Panel veterinario |
| `reportes.html` | 09 · Reportes / Resumen |
| `css/styles.css` | Tokens y componentes del UI Kit |
| `js/role-redirect.js` | Dirige a la pantalla del dueño o del veterinario según el rol elegido |

## Del UI Kit al CSS

`css/styles.css` está ordenado en: 1 Tokens · 2 Base · 3 Layout · 4 Componentes · 5 Pantallas.

- Colores: las variables de Figma "PetCare Tokens" son las variables CSS `--color-*`.
- Tipografía: Inter. `.title-h2`, `.title-h3` y `.caption` equivalen a Heading/H2, Heading/H3 y Body/Caption.
- Componentes: `.btn` (Button), `.input` (Input field y Textarea), `.tag` (Tag/Urgencia),
  `.card` (Card/Solicitud), `.navbar` (Header/Navbar) y `.avatar` (Avatar).

## Notas

- Los botones "+" de Mis animales y "Proponer fecha" no navegan, igual que en el prototipo (no hay pantalla de destino).
- Los campos de correo y contraseña no llevan atributo `name` a propósito: así no se envían datos por la URL mientras no exista un backend. Agrégalo al conectar la autenticación.
- El gráfico de Reportes usa datos de ejemplo.
