# Matriz de Entrenamientos

## Resumen Ejecutivo

El proyecto Matriz de Entrenamientos es una solución ligera desarrollada para visualizar, organizar y administrar los entrenamientos y certificaciones del personal dentro de una empresa. Surge como respuesta a limitaciones técnicas durante el desarrollo, ya que no se contaba con un entorno local adecuado para ejecutar IDEs como NetBeans. Para garantizar portabilidad y disponibilidad, se utilizó CodePen como plataforma principal de ejecución, permitiendo mostrar el funcionamiento completamente en línea sin instalación local.

El sistema se complementa con un repositorio GitHub donde se lleva el control de versiones, issues, commits, branches, pull requests y documentación extendida mediante la Wiki del proyecto.

---

## Requerimientos

### Requerimientos funcionales
1. Permitir visualizar entrenamientos asignados a cada colaborador.
2. Mostrar estatus de cumplimiento de los entrenamientos.
3. Permitir manipular, actualizar o modificar datos dentro de la interfaz (según la estructura del proyecto).
4. Ejecutarse correctamente desde CodePen o desde navegador abriendo el archivo HTML.

### Requerimientos no funcionales
1. El sistema debe ser accesible desde cualquier navegador moderno.
2. No requiere instalación de software adicional.
3. Mantener una arquitectura simple basada en front-end.
4. Documentación organizada mediante README y Wiki.
5. Control de versiones usando GitHub.

---

## Arquitectura

La arquitectura del sistema fue diseñada para ser sencilla, portable y de fácil ejecución.

Modelo general:

Usuario → Navegador Web → Front-end (HTML, CSS y JavaScript en CodePen) → Repositorio GitHub (control de versiones y documentación)

Componentes principales:
- Front-end desarrollado en CodePen.
- Repositorio GitHub con ramas, issues, pull requests, etiquetas y releases.
- Wiki utilizada para documentación extendida.
- Despliegue sin servidor, ejecutándose directamente en navegador.

Para más detalles, consultar la sección Arquitectura en la Wiki:
https://github.com/Aaroncanve/Matriz-entrenamientos/wiki/Arquitectura

---

## Instalación

Este proyecto no requiere instalación local debido a que está diseñado para funcionar en línea.

### Opción 1: Ejecución desde CodePen (recomendada)
1. Abrir el enlace del proyecto en CodePen.
2. El sistema cargará automáticamente la interfaz.
3. No se requiere configuración o software adicional.

### Opción 2: Ejecución desde GitHub
1. Clonar el repositorio:
   git clone https://github.com/Aaroncanve/Matriz-entrenamientos.git
2. Abrir el archivo index.html en un navegador.
3. No se requiere servidor, ya que todo el sistema opera en front-end.

---

## Configuración

El sistema no requiere configuración avanzada.  
Los únicos requisitos mínimos son:

- Navegador actualizado (Chrome, Edge o Firefox).
- Conexión a internet para ejecutar la versión alojada en CodePen.
- En caso de edición, un editor de código como VS Code (opcional).

No se utilizan variables de entorno, bases de datos ni dependencias externas.

---

## Tabla de Contenidos (ToC)

- [Resumen Ejecutivo](#resumen-ejecutivo)
- [Requerimientos](#requerimientos)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Configuración](#configuración)
- Documentación extendida en Wiki:
  - https://github.com/Aaroncanve/Matriz-entrenamientos/wiki

---

## Documentación Extensa (Wiki)

Las siguientes secciones se encuentran detalladas dentro de la Wiki del proyecto:

- Descripción General  
- Arquitectura  
- Instalación  
- Guía de Uso  
- Contribución  
- Preguntas Frecuentes  

Wiki oficial:  
https://github.com/Aaroncanve/Matriz-entrenamientos/wiki

---

## Enlace al Producto en Línea

El sistema puede visualizarse en CodePen mediante el siguiente enlace:  
https://codepen.io/Aaroncanve/pen/PwNeMyg
---

## Contribución

Para contribuir al proyecto:

1. Crear un branch para nuevas funciones:
   git checkout -b feature/nueva-funcionalidad
2. Realizar los cambios.
3. Hacer commits claros.
4. Subir el branch:
   git push origin feature/nueva-funcionalidad
5. Crear un Pull Request hacia la rama develop.

Para más detalles, revisar la sección Contribución en la Wiki.

---

## Autor

Desarrollado por Aaron Canve como parte del proyecto académico de gestión y documentación de código.
