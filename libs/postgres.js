const { Client } = require("pg")

export async function getConnection(){
    const client = new Client({
        host: 'localhost',
        port: 5423,
        user:'Jonathan',
        password:'admin123',
        database:'my_store'
    });

    await client.connect();
    return client;
}

