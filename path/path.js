const path = require("node:path");

//Important No crear las rutas porque en diferentes sistemas operativos se usan barras diferentes, ejemplo:
// ==> unix "/"
// ==> windows "\"

// Para saber que separación utiliza tu sistema operativo puede usar:
console.log("mi sistema operativo separa las direcciones con: ", path.sep);

//Description: Unir rutas con path.join()
// /content/subfolder/text.txt
const filePath = path.join("content", "subfolter", "text.txt");

console.log(filePath);

//Description: Para obtener el nombre del fichero podemos usar path.basename()
const base = path.basename("/tmp/edenblood/password.txt");

console.log(base); // password.txt

// También puedes quitarle la extensión al fichero
const baseNoExtent = path.basename("/tmp/edenblood/password.txt", ".txt");

console.log(baseNoExtent); // password

//Description: Obtener la extensión de un archivo con: path.extname();
const extension = path.extname("image.jpg");

console.log(extension); // ".jpg"
