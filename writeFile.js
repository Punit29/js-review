const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');



function writeFunc(query,path){

    return new Promise((resolve,reject) => {
        fs.writeFile(path,JSON.stringify(query), err =>{
            if(err){
                reject(err)
            }
            else{
                console.log('Done!');
                resolve();
            }
        });
    })
}


module.exports = writeFunc;