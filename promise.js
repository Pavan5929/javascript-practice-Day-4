let p1=new Promise(

     (resolve,reject)=>
     {
       setTimeout(() => {
           resolve(100)
       }, 5000);
     }
);

p1.then(

    (data)=>{
        console.log("inside then")
        console.log(data)
    }
)

p1.catch(

    (data)=>{
        console.log("inside catch")
        console.log(data)
    }
)

p1.finally(

    ()=>
    {
        console.log("finally")
    }
)

