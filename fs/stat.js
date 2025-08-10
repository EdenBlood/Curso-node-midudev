const fs = require("node:fs"); // Recomendable colocar el prefijo "node:" a partir de la version 16 de Node.

const stats = fs.statSync("./fs/archivo.txt");

const info = {
  esFichero: stats.isFile(),
  esDirectorio: stats.isDirectory(),
  esEnlaceSimbólico: stats.isSymbolicLink(),
  tamaño: stats.size, // en bytes
};

console.log(info);
