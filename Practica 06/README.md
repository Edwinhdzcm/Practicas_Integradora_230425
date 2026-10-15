# Práctica 06: Sketches de WhatsApp Business

## Descripción

Prototipo web interactivo de baja fidelidad que muestra pantallas de WhatsApp Business y WhatsApp desde dos recorridos: **Administrador Business** y **Rol de usuario**. Permite consultar cada pantalla dentro de una maqueta de teléfono y explorar las acciones o destinos representados.

El diseño utiliza un tema oscuro con acentos verdes. Los controles y las pantallas son ilustrativos: el prototipo no inicia sesión ni se conecta a WhatsApp.

## Objetivo

Representar y comparar las opciones disponibles para administrar una cuenta de negocio con las pantallas de uso general de una persona usuaria, en un formato que se pueda explorar desde el navegador.

## Recorridos representados

### Pantallas comunes

Ambos roles comparten las pantallas iniciales de bienvenida, verificación del número, configuración del perfil y Chats. La pantalla principal muestra las secciones **Chats, Novedades, Comunidades y Llamadas**.

### Administrador Business

El recorrido de administración incluye cinco pantallas:

1. **Panel de negocio:** accesos al perfil de empresa, catálogo, pedidos, estadísticas y herramientas de mensajes.
2. **Perfil de empresa:** datos públicos, como nombre, descripción, categoría, horario y contacto.
3. **Catálogo:** productos y servicios de ejemplo.
4. **Herramientas de mensajes:** bienvenida, ausencia, respuestas rápidas y etiquetas.
5. **Estadísticas:** métricas ilustrativas de actividad y conversaciones.

### Rol de usuario

El recorrido de usuario incluye:

- Conversación de grupo y opciones para adjuntar contenido.
- Información y lista de participantes del grupo.
- Silenciar notificaciones, salir del grupo y reportarlo.
- **Nuevo chat**, **Novedades**, **Comunidades** y **Llamadas**.
- **Configuración**, presentada como una lista desplazable que reúne las secciones de los bocetos de ajustes.
- Confirmación para cerrar sesión.

El flujo de usuario incluye textos y contactos genéricos, sin números telefónicos personales.

## Cómo usar el prototipo

1. Selecciona **Administrador Business** o **Rol de usuario** en la parte superior.
2. Elige una pantalla desde la lista **Recorrido**.
3. Consulta la vista previa en el teléfono y las opciones representadas en el panel **Desde aquí puedes ir a**.
4. Sigue los destinos para explorar las pantallas relacionadas.

La interfaz adapta su distribución a pantallas más estrechas. No requiere paquetes, compilación ni servicios externos.

## Archivos

- [index.html](index.html): página principal; incluye la interfaz, los estilos, los datos de los recorridos y las interacciones.
- [secuencia_pantallas_whatsapp.html](secuencia_pantallas_whatsapp.html): copia independiente del prototipo.
- [README.md](README.md): documentación de la práctica.

## Visualización

Puedes abrir [index.html](index.html) o [secuencia_pantallas_whatsapp.html](secuencia_pantallas_whatsapp.html) directamente en un navegador web moderno.

También puedes consultar la versión publicada en **GitHub Pages**:

**[Sketches ](https://edwinhdzcm.github.io/Practicas_Integradora_230425/Practica%2006/)**

## Alcance

Este trabajo es un prototipo académico de navegación visual. Las acciones como guardar cambios, enviar mensajes, administrar pedidos o cerrar sesión se representan como pantallas y opciones de interfaz; no modifican una cuenta ni datos reales. Los productos, mensajes y estadísticas son ejemplos ilustrativos.
