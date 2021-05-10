const { Client } = require('pg');

const connectionData = new Client({
    user: 'postgre',
    host: 'localhst',
    database: 'postgre',
    password: '123456',
    port: 5432,
  });
const client = new Client(connectionData)

client.connect()
client.query('SELECT * FROM table')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })