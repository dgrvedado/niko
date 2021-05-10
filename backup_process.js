/* Hacemos Dump */
const { exec } = require("child_process");

var $cmd = 'pg_dump -i -h localhst -p 5432 -U postgres -W 123456 -T public.order* -F p -v -f "/var/www/html/niko/tablasBD.sql" postgres';

exec($cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

/* Guardamos en una Variable y Convertimos a Base64 */
FILE = "/var/www/html/niko/tablasBD.sql";
var archivo = fs.readFileSync(FILE, 'utf-8');
archivo = getBase64(archivo); // prints the base64 string

/* Guardamos en la BD */
require("conexion.js");

