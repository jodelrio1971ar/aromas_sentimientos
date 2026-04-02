# Proyecto Essences: Aromaterapia & Fragancias

Este repositorio contiene la interfaz web de "Essences — Aromas & Sentimientos", una plataforma digital diseñada para la promoción y visualización de productos de aromaterapia artesanal. La web destaca por un diseño minimalista, lujoso y funcional, centrado en la experiencia sensorial del usuario.

## Descripción General

El archivo `index.html` constituye una "One-Page" que utiliza animaciones suaves y una paleta de colores tierra (dorados, cremas y negros) para transmitir elegancia. El objetivo principal es presentar un catálogo de trece fragancias exclusivas y facilitar el contacto directo para la adquisición de productos.

## Tecnologías Implementadas

Para el desarrollo de este sitio se han utilizado las siguientes tecnologías:

- **HTML5:** Estructura semántica para mejorar la accesibilidad y el SEO.
- **CSS3 Personalizado:** Uso de variables CSS, Grid Layout, Flexbox y animaciones mediante `@keyframes`.
- **JavaScript (Vanilla):** Implementación de la API `IntersectionObserver` para efectos de revelado al hacer scroll y gestión del menú responsivo.
- **Google Fonts:** Integración de las familias tipográficas *Cormorant Garamond* y *Jost*.

## Características del Diseño

El sitio se organiza en diversas secciones que guían al usuario a través de la propuesta de valor de la marca.

### Estética y Efectos Visuales

Para lograr una atmósfera inmersiva, se han incluido los siguientes elementos:

- **Filtro de Ruido (Noise Overlay):** Un fondo sutil con textura para dar profundidad visual.
- **Orbes Flotantes:** Elementos decorativos con desenfoque (blur) que se mueven orgánicamente en la sección principal.
- **Scroll Reveal:** Los elementos aparecen gradualmente mientras el usuario navega hacia abajo.

### Estructura de Secciones

1. **Navegación:** Menú fijo con logotipo vectorial (SVG) y enlaces de anclaje.
2. **Hero Section:** Mensaje de bienvenida con un llamado a la acción (CTA) claro.
3. **Filosofía:** Tres pilares fundamentales sobre el sentido del olfato y el equilibrio energético.
4. **Presentaciones:** Detalle de los envases disponibles (Spray de 200ml y Gatillo de 250ml).
5. **Catálogo de Fragancias:** Grilla interactiva que describe las 13 notas olfativas, desde "Magnolia" hasta "Cristóbal".
6. **Ambientes:** Guía de uso sugerido para el hogar, vehículos, ropa y uso personal.
7. **Contacto:** Enlaces directos a WhatsApp y opción de descarga de catálogo en formato PDF.

## Catálogo de Fragancias

El catálogo incluye una variedad de perfiles olfativos clasificados para facilitar la elección del cliente:

- **Florales:** Magnolia, Gardenias, Jazmín.
- **Cítricos y Revitalizantes:** Sandía y Pepino, Limón y Jengibre.
- **Dulces:** Almendra y Fresia, Miel de Hadas, Coco y Melón.
- **Herbales y Zen:** Té Verde, Bambú.
- **Sofisticados:** Bullbridge, Softy, Cristóbal.

## Instrucciones de Uso y Visualización

Para visualizar el proyecto localmente, no se requieren dependencias externas complejas.

```bash
# Clonar el repositorio o descargar el archivo
# Abrir el archivo index.html en cualquier navegador moderno
```

El diseño es completamente responsivo, adaptándose a dispositivos móviles, tabletas y ordenadores de escritorio mediante el uso de "Media Queries" y unidades relativas.

## Mantenimiento y Estándares

Este proyecto sigue las reglas estrictas de formato Markdown para su documentación, asegurando que no existan errores de linting, que la jerarquía de títulos sea lógica y que la portabilidad del código sea máxima.

Para cualquier modificación en la lógica de las animaciones, se recomienda revisar la constante `observer` dentro de la etiqueta de script en el archivo principal.

---
