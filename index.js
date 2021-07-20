const {Client} = require('pg');
const write = require('./writeFile');
const path = './result.json';
const client = new Client({
    port:5432,
    user: "postgres",
    host: "localhost",
    password: "punit",
    database: "demo",
});

async function main(){
    client.connect()

    // let query = await client.query("select * from matches");
    

    // await wait();

    // await write(query,path);
    

    client.end()
}

// function wait(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve();
//         },(5000));
//     });
// }

main();
