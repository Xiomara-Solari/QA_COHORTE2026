# 🚀 QA Automation - Sauce Demo

Este repositorio contiene la resolución de la actividad práctica de la Clase 5 del curso de QA Automation. 

## 📝 Descripción
El objetivo de este proyecto es automatizar los casos de prueba E2E (End-to-End) para la plataforma e-commerce de prueba **Sauce Demo** utilizando Cypress y reportar los bugs encontrados durante la validación de los escenarios de prueba.

## 🛠️ Tecnologías y Herramientas
* **Cypress:** Para la automatización de pruebas E2E.
* **JavaScript:** Lenguaje de programación base.
* **Trello:** Para la documentación y el reporte de bugs.

## 📋 Módulos Automatizados
Se han automatizado los siguientes flujos correspondientes a los casos de prueba requeridos en la consigna:
1. **Carrito de Compras:** Agregar productos, validación de badges numéricos y eliminación de ítems.
2. **Checkout:** Flujo de compra completo, validación de campos obligatorios y captura de fallos de input.

## 🐞 Reporte de Bugs
Durante la ejecución de las pruebas, específicamente utilizando las credenciales de `problem_user`, se identificaron y documentaron 3 bugs (relacionados a imágenes, ordenamiento y campos bloqueados). 

🔗 **[Clic aquí para ver el tablero público de Trello con los reportes detallados](https://trello.com/b/TosGsPxO/qa-automation-2026)**

## 💻 Cómo ejecutar las pruebas localmente
1. Clonar este repositorio en tu equipo.
2. Abrir la terminal en la raíz del proyecto y ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npx cypress open` para abrir el Test Runner de Cypress y correr las suites de prueba.
