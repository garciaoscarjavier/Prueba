//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1098743036.Oscar',
  database: 'gstpanel_carinosas'
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión: ' + error);
    return;
  }
  console.log('¡Conectado a la base de datos!');
});

module.exports = connection;