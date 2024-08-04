const fs=require("fs");
const data=fs.readFileSync("myNewData.txt","utf-8");
console.log(data);
fs.readFile("myNewData.txt","utf-8",(err,data)=> {
    console.log(data);
})