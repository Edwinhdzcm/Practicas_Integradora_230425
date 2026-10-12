# Práctica 06: Diagrama de secuencia de pantallas de WhatsApp

## Descripción

Esta práctica representa, mediante wireframes de baja fidelidad, los recorridos de navegación de dos roles dentro de una aplicación de mensajería inspirada en WhatsApp: el administrador de un grupo y un miembro/participante. La entrega es una página web interactiva que permite explorar las pantallas, leer qué acciones se pueden realizar en cada una y comparar los permisos de ambos roles.

Es un ejercicio académico independiente; no es una aplicación oficial ni está afiliado a WhatsApp. Los nombres, mensajes y datos de contacto que aparecen en los bocetos son ejemplos.

## Objetivo

Organizar visualmente la navegación de los dos roles, mostrar en qué punto sus flujos se separan y explicar qué acciones de administración no están disponibles para un miembro. Cada pantalla se dibuja como un teléfono con elementos esquemáticos de interfaz y se conecta a la siguiente con una flecha rotulada con la acción que realiza la persona.

## Alcance del diagrama

El diagrama contiene **17 pantallas esquemáticas** en tres recorridos:

### Recorrido común — 4 pantallas

1. **Bienvenida:** aceptación de términos y selección de idioma.
2. **Verificar número:** país, número telefónico y código SMS de seis dígitos.
3. **Tu perfil:** nombre y foto opcional.
4. **Chats:** lista de conversaciones, acceso a las pestañas Chats, Novedades, Comunidades y Llamadas, y botón `+`.

Desde Chats se separan los recorridos según el rol:

### Administrador de grupo — 7 pantallas

1. **Seleccionar participantes:** búsqueda y selección de contactos para un grupo nuevo.
2. **Nombre y foto:** configuración del nombre, foto opcional y participantes.
3. **Chat del grupo:** conversación inicial del grupo recién creado.
4. **Info del grupo:** agregar participantes, consultar la lista, promover administradores o quitar participantes.
5. **Ajustes del grupo:** quién puede editar la información, quién puede enviar mensajes y aprobación de nuevos participantes.
6. **Enlace de invitación:** copiar, compartir o restablecer el enlace.
7. **Salir o eliminar el grupo:** confirmar la salida o la eliminación del grupo.

Las acciones exclusivas del administrador se destacan con un borde verde y notas explicativas. El creador del grupo aparece como administrador en el recorrido ilustrativo.

### Miembro / participante — 6 pantallas

1. **Chat del grupo:** lectura y envío de mensajes.
2. **Adjuntar y enviar:** opciones esquemáticas para documento, cámara, galería, audio, ubicación y contacto.
3. **Info del grupo (solo lectura):** silenciar, ver participantes y consultar ajustes sin modificarlos.
4. **Lista de participantes:** personas del grupo e identificación del administrador.
5. **Silenciar notificaciones:** duración y preferencia para mostrar notificaciones.
6. **Salir o reportar el grupo:** acciones para abandonar o reportar el grupo.

### Estados alternos

Además de los flujos principales, la página incluye tarjetas para estos casos:

- Código de verificación incorrecto.
- Falta de conexión.
- El grupo permite enviar mensajes solo a administradores.
- El administrador necesita elegir a otra persona como administradora antes de salir.

## Interacción y uso

- Los controles **Administrador** y **Miembro** muestran u ocultan sus respectivos carriles; siempre permanece visible por lo menos uno.
- Seleccionar una pantalla abre un detalle con su descripción, acciones disponibles, destino del flujo y, cuando aplica, una nota sobre permisos.
- El detalle incluye botones **Anterior** y **Siguiente**. También se puede avanzar con las flechas izquierda y derecha del teclado.
- Las pantallas se pueden enfocar con el teclado mediante `Tab` y abrir con `Enter`.
- En ventanas estrechas, los carriles permiten desplazamiento horizontal.

## Archivos de la práctica

- [index.html](index.html): página principal publicada; contiene la estructura, los estilos, los datos de las pantallas y la lógica de interacción en un único archivo.
- [secuencia_pantallas_whatsapp.html](secuencia_pantallas_whatsapp.html): archivo HTML independiente con el mismo diagrama y contenido, conservado como copia alternativa.
- [README.md](README.md): descripción del ejercicio, alcance, instrucciones y prompt de referencia.

No se requieren paquetes ni servicios externos para abrir la página localmente.

## Cómo visualizar

Para consultar la práctica localmente, abre `index.html` en un navegador web moderno. También puedes abrir `secuencia_pantallas_whatsapp.html` directamente.

[Sketches GitHub Pages](https://edwinhdzcm.github.io/Practicas_Integradora_230425/Practica%2006/).

## Correspondencia con el prompt

El resultado cubre el formato de página HTML, los dos roles, los carriles separados, las flechas con acciones, las pantallas en forma de teléfono y las notas de permisos administrativos. Los bocetos usan controles y textos de ejemplo, no capturas ni imágenes reales.

Hay dos diferencias importantes respecto del prompt de referencia:

- La conversación individual mencionada entre las pantallas comunes no se representa como pantalla independiente; el flujo común llega hasta la pantalla principal y luego se muestran los chats de grupo de cada rol.
- Aunque los teléfonos se representan como wireframes esquemáticos, la página usa una interfaz web con acentos verdes, no un estilo estrictamente monocromático en blanco y negro.

El resultado es una representación navegable de los flujos y no una implementación funcional de WhatsApp: no valida números, no envía SMS ni mensajes, no administra grupos reales y no conecta con servicios externos.

## Prompt de referencia

El siguiente prompt se incluye para registrar la especificación de diseño compartida para esta documentación. Su inclusión sirve como referencia y no significa que cada punto se haya implementado literalmente.

```text
Actúa como un diseñador UX/UI experto en aplicaciones móviles. Necesito que generes un Diagrama de Secuencia de Pantallas (sketches / wireframes de baja fidelidad) de la aplicación móvil WhatsApp, mostrando el flujo de navegación de 2 roles:

ROL 1: Administrador de grupo
ROL 2: Miembro / Participante de grupo

CONTEXTO
- Plataforma: aplicación móvil (Android/iOS), orientación vertical.
- Estilo: sketches en blanco y negro o escala de grises, trazo simple, estilo boceto (wireframe de baja fidelidad), sin colores ni imágenes reales; usa rectángulos, íconos simples y texto de relleno.

PANTALLAS COMUNES (ambos roles)
1. Splash / Bienvenida
2. Verificación de número telefónico y código SMS
3. Configuración de perfil (nombre y foto)
4. Pantalla principal con pestañas: Chats, Novedades (Estados), Comunidades y Llamadas
5. Conversación individual
6. Información del grupo

FLUJO DEL ADMINISTRADOR DE GRUPO
1. Pantalla principal → botón "Nuevo chat" → "Nuevo grupo"
2. Selección de participantes
3. Nombre del grupo y foto
4. Chat del grupo (recién creado)
5. Info del grupo → agregar participantes
6. Info del grupo → promover o quitar administradores
7. Info del grupo → eliminar participantes
8. Ajustes del grupo (quién puede enviar mensajes, editar info del grupo)
9. Enlace de invitación al grupo
10. Eliminar grupo / salir del grupo

FLUJO DEL MIEMBRO / PARTICIPANTE
1. Pantalla principal → abrir chat del grupo
2. Enviar mensaje, foto, audio o documento
3. Ver info del grupo (solo lectura de ajustes)
4. Ver lista de participantes
5. Silenciar notificaciones
6. Salir del grupo
7. Reportar grupo

FORMATO DE SALIDA
- Un diagrama de secuencia donde cada pantalla sea un recuadro con forma de celular (sketch) y esté conectada con flechas rotuladas con la acción del usuario (ej. "toca +", "selecciona contactos", "presiona Crear").
- Dos carriles (swimlanes) horizontales: uno para el Administrador y otro para el Miembro, mostrando en qué pantallas se separan los flujos y en cuáles coinciden.
- Cada pantalla debe tener un título corto y numerado, y los elementos clave de la interfaz (barra superior, botones, campos, lista).
- Resalta con una nota qué opciones solo ve el Administrador.
- Entrega el resultado como [HTML / SVG / Mermaid / imagen], listo para exportar o incluir en un documento.
```

## Conclusión

La práctica presenta un flujo común de inicio y dos recorridos de grupo con permisos diferenciados. El diagrama permite revisar de forma interactiva las pantallas principales, las acciones que conectan cada paso, las capacidades del administrador y las opciones disponibles para un miembro.
