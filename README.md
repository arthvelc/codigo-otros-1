# Correcciones realizadas

## HTML
- Estaba mal linkeado el css.
- Estaba mal linkeado el script.

# JS

- Estaban mal referenciados los argumentos del querySelector.
- Estaban mal nombradas las constantes.
- La función `displayUser` lanzaba un SyntaxError dado que await es una función válida solo en funciones asíncronas
- La función `fetch` no retornaba un objeto `JSON`, sino una promesa que se resuelve en un objeto `JSON`. Por lo tanto, la variable data no está definida y no se podía acceder a sus propiedades.
- Las comillas utilizadas en las variables `n`, `b` y `l` no son las correctas. Deben ser backticks (`) para poder interpolar las variables.
- Eliminé la función de error y le puse mejor un `try`y un `catch` dentro de la misma función `displayUser` para manejar mejor los errores.

