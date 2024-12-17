# Desafio - Firebase Dos

💡 Realizado [cristiandpto23](https://github.com/cristiandpto23) con HTML y JS<br>
➡ Front-End G17 - Desafío Latam<br>
🔗 Desplegado en Vercel [aquí]()<br>
🔗 Desplegado en Firebase Hosting [aquí](https://fir-auth-11456.web.app/)<br>

## Introducción

Validaremos nuestros conocimientos de Firebase, implementando una aplicación web que utilice el servicio de autentificación con Firebase para resolver un problema.

## Descripción

Un cliente nos solicita un demo de una aplicación web que contenga autentificación. En este demo nos pide que existan 3 vistas: Sign up, Login y Home. La vista de Home es necesario que esté restringida, es decir, que el ususario al ingresar a la aplicación, automáticamente será redirigido a la vista Sign up en caso de que no esté registrado.

-   La vista Sign Up deberá ser pública y solo visible para los usuarios que no estén logueados, siendo su función ofrecer un formulario de registro de usuarios.
-   La vista Login deberá ser pública y solo visible para los usuaios que no estén logueados, su función será permitir el inicio de sesión de usuarios.
-   La vista Home deberá ser una vista privada solo accesible por usuarios autentificados.

Deberás usar los guardianes de Vue Router para condicionar y restringir el acceso a los usuarios a la vista Home.

## Requerimientos

Se requiere crear un sistema de autentificación con Vue Router y Firebase Authentication que contenga tres vistas: Sign Up, Login y Home.

1. Usar Firebase Authentication para integrar un sistema de usuarios.
2. Usar guardianes de Vue Router para restringir el acceso a la vista Home.
3. Crear un componente que permita crear nuevos usuarios.
4. Crear un componente que permita iniciar sesión.
5. Generar el Build producción para desplegar la aplicación con Firebase Hosting.

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![VueJS](https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) ![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
