# Práctica 03: Boceto de Modelo Canvas con Archify

## Descripción

Esta práctica analiza el modelo de negocio de WhatsApp mediante el Business Model Canvas (BMC). La entrega contiene un Canvas interactivo hecho con HTML, CSS y JavaScript, además de un diagrama complementario generado con Archify.

## Objetivo

Elegir una aplicación multiplataforma de uso cotidiano, estructurar un prompt para generar su modelo Canvas, revisar el resultado, refinar el prompt y documentar los entregables con buenas prácticas.

## Aplicación elegida: WhatsApp

Se eligió WhatsApp porque puede utilizarse desde teléfonos, navegador y escritorio, y porque ofrece productos para personas, pequeños negocios y empresas. Esto permite observar diferentes propuestas de valor, canales, segmentos y fuentes de ingresos.

## Desarrollo de la actividad

1. **Elección de la aplicación:** WhatsApp, como servicio multiplataforma de mensajería y comunicación.
2. **Estructura del prompt:** se especificaron el idioma, los nueve bloques del BMC, los segmentos relevantes y la necesidad de distinguir el servicio personal de los productos para empresas.
3. **Revisión del modelo:** se comprobó que estuvieran representados los nueve bloques y se revisaron las afirmaciones sobre monetización.
4. **Mejora del prompt:** se añadieron restricciones para no inventar precios, comisiones ni disponibilidad, y se pidió mostrar relaciones importantes entre bloques.
5. **Documentación:** se separaron los datos, la interfaz interactiva y el diagrama fuente/exportado.

> **Trazabilidad:** el repositorio no conserva el historial del prompt original. Las versiones siguientes son prompts reproducibles preparados a partir de los entregables actuales; no son transcripciones exactas de una conversación anterior.

## Prompts reproducibles

### Prompt inicial

```text
Genera en español un Business Model Canvas de WhatsApp, una aplicación multiplataforma de mensajería. Incluye los nueve bloques: socios clave, actividades clave, recursos clave, propuesta de valor, relación con clientes, canales, segmentos de clientes, estructura de costos y fuentes de ingresos. Resume cada bloque con elementos concretos y muestra cómo se relacionan entre sí. Presenta el resultado como un diagrama claro que pueda revisarse.
```

### Prompt refinado para Archify

```text
Con Archify, crea un diagrama en español titulado "WhatsApp | Business Model Canvas" con los nueve bloques del Business Model Canvas claramente identificados: socios clave, actividades clave, recursos clave, propuesta de valor, relación con clientes, canales, segmentos de clientes, estructura de costos y fuentes de ingresos.

Considera WhatsApp personal, WhatsApp Business y WhatsApp Business Platform. Distingue usuarios personales, pequeños negocios, empresas, anunciantes, creadores y audiencias cuando corresponda. Representa relaciones directas entre los bloques, en especial entre propuesta de valor, relación con clientes, canales, segmentos e ingresos. Mantén el texto breve y legible.

No inventes precios, comisiones ni disponibilidad regional. Distingue el servicio personal estándar de los productos y funciones comerciales. Si una tarifa o función depende del mercado o de su despliegue, indícalo como variable y no como un dato universal. Genera una representación editable y revisable.
```

## Resultado

El Canvas contiene los nueve bloques oficiales y cinco elementos en cada uno. En la aplicación se puede seleccionar un bloque para consultar sus elementos y alternar entre tema claro y oscuro. El contenido evita presentar como universales las tarifas empresariales, la disponibilidad de funciones o el reparto de suscripciones.

El diagrama de Archify representa los nueve bloques y algunas de sus relaciones. La comprobación automatizada disponible reporta estado `pass` para contención y legibilidad; el campo de revisión visual manual está marcado como pendiente.

## Archivos del proyecto

- [index.html](index.html): estructura de la aplicación interactiva.
- [styles.css](styles.css): diseño, adaptación a distintos tamaños de pantalla y temas.
- [script.js](script.js): creación de los bloques, diálogo de detalle y cambio de tema.
- [data.js](data.js): contenido de los nueve bloques, separado de la interfaz.
- [whatsapp-bmc.architecture.json](whatsapp-bmc.architecture.json): especificación fuente del diagrama de Archify.
- [whatsapp-bmc.html](whatsapp-bmc.html): diagrama HTML exportado.
- [whatsapp-bmc.visual-check.json](whatsapp-bmc.visual-check.json): recibo de comprobación automatizada.
- [whatsapp-bmc.visual-check.html](whatsapp-bmc.visual-check.html): página auxiliar de la comprobación.

## Visualización

Para abrirlo localmente, abre `index.html` en un navegador. Para consultar el diagrama generado por Archify, abre `whatsapp-bmc.html`.

Cuando el repositorio esté publicado en GitHub Pages desde la rama y carpeta configuradas, agrega o reemplaza los marcadores de esta línea por el usuario y el nombre reales del repositorio:

```markdown
[Ver modelo interactivo en GitHub Pages](https://<usuario>.github.io/<repositorio>/Practica%2003/)
```

## Buenas prácticas

- Se mantienen separados los datos, la lógica y los estilos.
- Se conserva el archivo fuente del diagrama junto con su exportación.
- Se utiliza un diálogo para consultar el detalle de cada bloque.
- Se consideran distintos tamaños de pantalla y preferencias de tema.
- Se expresan con cautela los datos de negocio que pueden variar por mercado.

## Conclusión

El Canvas organiza los principales elementos del modelo de negocio de WhatsApp y permite explorar sus relaciones. La revisión del contenido y el refinamiento del prompt ayudan a producir un resultado más claro y a evitar afirmaciones imprecisas sobre ingresos y disponibilidad.
