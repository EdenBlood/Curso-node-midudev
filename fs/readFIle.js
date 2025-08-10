const { error } = require("node:console");
const fs = require("node:fs");

//Description: Forma Síncrona: readFileSync
const contentSync = fs.readFileSync("./fs/archivo.txt", "utf-8");
console.log(contentSync);

//Description: Forma Asíncrona con Callback: readFile
fs.readFile("./fs/archivo.txt", "utf-8", (error, content) => {
  if (error) console.error(error);
  console.log(content);
});

//Description: Forma Asíncrona con Promesas: fs.promises.readFile
fs.promises
  .readFile("./fs/archivo.txt", "utf-8")
  .then((content) => console.log(content))
  .catch((error) => console.error(error));

//Description: Forma Asíncrona mezclada con async await: fs.promises.readFile
// Como estamos en commonJS no podemos usar await sin que este en una funcion async. por ende usaremos una funcion auto invocada.

(async () => {
  const contentAsyncAwait = await fs.promises
    .readFile("./fs/archivo.txt", "utf-8")
    .catch((error) => console.error(error));

  console.log(contentAsyncAwait);
})();

//Important
// Si un modulo no acepta aun Promesas, con una utilidad llamada promisify() podes convertir los módulos en promesas.
// Importar promisify de 'node:util'
const { promisify } = require("node:util");

// convertimos a su version con promesas:
const readFilePromises = promisify(fs.readFile);

readFilePromises("./fs/archivo.txt", "utf-8")
  .then((content) => console.log(content))
  .catch((error) => console.error(error));

// Description: Promesas en paralelo con Promise.all([])
// importante usar el fs.promises.
Promise.all([
  fs.promises.readFile("./fs/archivo.txt", "utf-8"),
  fs.promises.readFile("./fs/archivo2.txt", "utf-8"),
]).then(([content1, content2]) => {
  console.log("primer texto Promises.all: " + content1);
  console.log("segundo texto Promises.all: " + content2);
});

// O;
(async () => {
  const arrayResults = await Promise.all([
    fs.promises.readFile("./fs/archivo.txt", "utf-8"),
    fs.promises.readFile("./fs/archivo2.txt", "utf-8"),
  ]).then((results) => results);

  console.log("primer texto Promises.all: " + arrayResults[0]);
  console.log("primer segundo Promises.all: " + arrayResults[1]);
})();
