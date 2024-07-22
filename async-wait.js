 async function test(){

       let pr=await new Promise(

           (res,rej)=>{
                setTimeout(() => {
                      res(100)
                }, 3000);
           }
       )
        console.log("hello")
       console.log(pr)
  }

  test()