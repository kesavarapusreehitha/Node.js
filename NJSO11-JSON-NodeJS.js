const fs=require('fs');
const bioData={
    name:"Mounika",
    age:24,
    skill:"NodeJs Programmer"
}
console.log(bioData);
const jsonData=JSON.stringify(bioData); 
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process Completed.....");
})
