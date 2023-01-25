# node-code-verifier

#Dependencias utilizadas en el proyecto
-----------------------------------------------------------------------
concurrently@7.6.0 => permite ejecutar varios comandos simultaneamente.

dotenv@16.0.3 => es un módulo de dependencia 0 que almacena variables de entorno en un archivo separado del código.

eslint@8.32.0 =>  es completamente conectable, cada regla es un complemento y puede agregar más en tiempo de ejecución.

express@4.18.2 => Infraestructura web rápida, minimalista y flexible para Node.js.

jest@29.3.1 => solución de prueba de JavaScript completa y lista para configurar. Funciona de inmediato para cualquier proyecto de React.

nodemon@2.0.20 => es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos del directorio.

supertest@6.3.3 => es proporcionar una abstracción de alto nivel para probar HTTP.

typescript@4.9.4 => es un lenguaje para JavaScript a escala de aplicación. TypeScript agrega tipos opcionales a JavaScript que admiten herramientas para aplicaciones de JavaScript a gran escala para cualquier navegador, para cualquier host, en cualquier sistema operativo.

webpack@5.75.0 => Su objetivo principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo.

cors@2.8.5 => CORS es un paquete .js nodo para proporcionar un middleware Connect/Express que se puede utilizar para habilitar CORS con varias opciones.

helmet@6.0.1 => ayuda a proteger sus aplicaciones Express configurando varios encabezados HTTP. No es una bala de plata, ¡pero puede ayudar!

mongoose@6.9.0 =>  es una herramienta de modelado de objetos MongoDB diseñada para funcionar en un entorno asíncrono.

#Script NPM
------------------------------------------------------------------------
"build": "npx tsc" => transcribe el código typescript en JS

"start": "node ./dist/index.js" => Ejecuta el index.js desde la carpeta dist

"dev": "concurrently \"npx tsc --watch\" \"nodemon -q ./dist/index js \" ", => ejecuta varios comandos recurrentes y ejercuta nodemon quien reinicia el servidor cada ves que guardamos cambios.

"test": "jest" => Funciona para realizar pruebas en el entorno de JS

#Variables de entorno
------------------------------------------------------------------------
PORT => toma el número de puerto asignado para la ejecución del servidor.
