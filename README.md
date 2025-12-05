# Matriz de Entrenamientos

## Resumen Ejecutivo

El proyecto Matriz de Entrenamientos se desarrolló como una solución ligera para visualizar y organizar los entrenamientos y certificaciones del personal desde cualquier navegador. Durante el desarrollo se identificó el problema de no contar con un entorno local adecuado para ejecutar IDEs como NetBeans, ya que por motivos laborales únicamente se tenía acceso a una computadora que no permitía instalar ni utilizar herramientas de desarrollo. Esto impedía generar un WAR/JAR o ejecutar un proyecto completo en Java.  
Como solución, se decidió trabajar con CodePen, lo que permitió avanzar sin depender de instalaciones pesadas y mantener el sistema disponible en línea. La arquitectura del proyecto se mantiene simple: un front-end construido con HTML, CSS y JavaScript, visualizado en CodePen y documentado en GitHub mediante ramas, commits, pull requests y una Wiki complementaria.

---

## Tabla de Contenidos (ToC)

- [Resumen Ejecutivo](#resumen-ejecutivo)  
- [Requerimientos](#requerimientos)  
- [Instalación](#instalación)  
- [Configuración](#configuración)  
- [Uso](#uso)  
- [Contribución](#contribución)  
- [Roadmap](#roadmap)  
- [Conclusión](#conclusión)  
- Documentación extendida en Wiki:  
  https://github.com/Aaroncanve/Matriz-entrenamientos/wiki

---

## Requerimientos

### Requerimientos funcionales
1. Visualizar entrenamientos asignados a cada colaborador.
2. Mostrar estatus de cumplimiento.
3. Permitir manipular o actualizar información desde la interfaz.
4. Ejecutarse correctamente desde CodePen o navegador.

### Requerimientos no funcionales
1. Accesible desde cualquier navegador moderno.
2. No requiere instalación local ni servidores.
3. Arquitectura simple basada en front-end.
4. Control de versiones mediante GitHub.
5. Documentación disponible en README y Wiki.

### Requerimientos técnicos

**Servidores, bases de datos o backend:**  
No utiliza servidores, bases de datos ni backend; todo se ejecuta en el navegador.

**Paquetes adicionales:**  
No requiere librerías externas ni dependencias.

**Versiones o entornos:**  
No utiliza Java ni requiere instalaciones adicionales.  
Solo se necesita un navegador actualizado.

---

## Instalación

### Instalación del ambiente de desarrollo
El proyecto no necesita un entorno complejo. Basta con acceder a CodePen o clonar el repositorio y abrir `index.html` en el navegador.

### Pruebas manuales
Las pruebas se ejecutan directamente desde el navegador interactuando con la interfaz, validando visualización correcta, funcionamiento de elementos y comportamiento esperado de la matriz.

### Implementación en producción
El sistema puede ejecutarse:
- Localmente abriendo `index.html`
- En CodePen
- En servicios estáticos como GitHub Pages, sin configuraciones adicionales

---

## Configuración

### Archivos de configuración
El proyecto no requiere archivos de configuración; toda la lógica está contenida en HTML, CSS y JavaScript.

### Configuración de requerimientos
Los únicos requisitos son:
- Navegador actualizado  
- Acceso a internet para la versión en CodePen  
- Editor opcional para revisar o ajustar el código  

No usa variables de entorno ni dependencias externas.

---

## Uso

### Para usuario final
El usuario accede al sistema desde el navegador y puede visualizar la matriz, consultar entrenamientos y revisar estatus. La interfaz es sencilla e intuitiva y no requiere instalación.

### Para usuario administrador
El administrador puede editar el código desde CodePen o GitHub, actualizar la información de la matriz y realizar pruebas manuales. Además, puede gestionar ramas, issues y pull requests dentro del repositorio.

---

## Contribución

1. Clonar el repositorio:
git clone https://github.com/Aaroncanve/Matriz-entrenamientos.git
cd Matriz-entrenamientos

markdown
Copiar código

2. Crear una nueva rama:
git checkout -b feature/nueva-funcionalidad

markdown
Copiar código

3. Realizar cambios y crear commits:
git add .
git commit -m "Descripción breve del cambio"

markdown
Copiar código

4. Subir la rama:
git push origin feature/nueva-funcionalidad

yaml
Copiar código

5. Crear un Pull Request hacia la rama develop.

6. Esperar la revisión y el merge correspondiente.

---

## Roadmap

- Permitir edición directa de entrenamientos desde la interfaz.  
- Agregar filtros, búsqueda y validaciones visuales.  
- Implementar almacenamiento temporal mediante localStorage.  
- Preparar bases para futura integración con API o base de datos.  
- Ampliar la documentación del usuario final con ejemplos visuales.

---

## Enlace al producto en línea

https://codepen.io/Aaroncanve/pen/PwNeMyg
