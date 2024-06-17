//Constantes de la API
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');


//Función para obtener los datos de un usuario

/*
1. El primer error que encontré en esta función fue que al ejecutarla, lanza un SyntaxError dado que await es una función válida solo en funciones asíncronas

2. El segundo error que encontré fue que la función fetch no retorna un objeto JSON, sino una promesa que se resuelve en un objeto JSON. Por lo tanto, la variable data no está definida y no se puede acceder a sus propiedades.

3. El tercer error que encontré fue que las comillas utilizadas en las variables $n, $b y $l no son las correctas. Deben ser backticks (`) para poder interpolar las variables.
*/

async function displayUser(username) {
  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    //convertir el response en un objeto JSON
    const data = await response.json();
    console.log(data);
    //backticks para todos
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    console.log('OH NO!');
    console.log(err);
    n.textContent = `Algo salió mal: ${err}`;
  }
}



//Llamada a la función displayUser
displayUser('stolinski');


/*

En el HTML no estaban bien linkeados ni el archivo css, ni el archivo js para dar la funcionalidad

*/