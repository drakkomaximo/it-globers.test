// 5. En un Ecommerce de moda muy personalizado, poseen un landing muy dinámico, por lo que
// tienen un script que cambia propiedades CSS de forma muy dinámica también. Dicho script no está
// funcionando. El error que arroja la consola es que un elemento no se encuentra declarado; sin
// embargo, al inspeccionar el contenido html el objeto sí existe ¿qué crees que puede estar
// sucediendo ?

// R/:
// a. Como lo dice el error, el elemento no se encuentra declarado por lo que es un error propio
// del script y habría que entrar a revisarlo.
// b. El DOM no ha cargado o no ha terminado de cargar todos los objetos y contenidos, por lo
// que debe hacer uso del evento document.ready o de un evento onload. ---- respuesta correcta
// c. El script funciona por eventos, sólo que los eventos no están correctamente relacionados o
// se olvidó programar los triggers