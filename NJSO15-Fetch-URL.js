const https = require('https');
  //https://jsonplaceholder.typicode.com/todos/1
  https.get('https://jsonplaceholder.typicode.com/todos/', (resp) => {
    let data= '';

    resp.on('data', (chuck)=> {
        data += chuck;
    });
    resp.on('end', ()=> {
        console.log(JSON.parse(data));
        console.log(data)
    });
}).on("error",(err) => {
    console.log("Error: "+ err.message);
});