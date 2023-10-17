let express = require('express');  //name of the library 
let app = express(); // give back object

// let signs={
//     "data":[
//         {
//             name:"Yve",
//             info:"born in 2001"
//         },{
//             name:"Yves",
//             info:"born in 2002"
//         },{
//             name:"Yvonne",
//             info:"born in 2007"
//         }
//     ]
// }

// app.get('/cute',(request,response)=>{  
//     response.send('cute');
// })

app.use('/',express.static('public'));

// app.get('/others',(request,response)=>{
//     response.send('other');
// })

// app.get('/signs',(req,res)=>{
//     res.json(signs);
// })

// app.get('/signs/:sign',(req,res)=>{
//     console.log(req.params.sign);  //:sign就是req.params
//     let user_sign=req.params.sign;
//     let user_obj;
//     for(let i =0;i<signs.data.length;i++){
//         if(user_sign == signs.data[i].name){
//             user_obj = signs.data[i];
//         }
//     }
// console.log(user_obj);
// if(user_obj){
//     res.json(user_obj);
// } else {
//     res.json({status:"info not present"})
// }
//     res.send('thankyou');

// })
//listen to which server
app.listen(3000,()=>{
    console.log("listen to the 3000");
})
