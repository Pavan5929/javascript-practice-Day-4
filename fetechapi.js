// let x=fetch('https://fakestoreapi.com/products');

// x.then(

//      res=>{
//         console.log(res)
//      }
// )

// x.catch(

//     err=>{

//         console.log(err)
//     }
// )


// let p={

//     title:'test product',
//     price:233,
//     description:'lorem ipsum set',
//     category:'electronic'
// }


// fetch('https://fakestoreapi.com/products',{

//     method:"POST",
//     headers:{

//         'content-type':'application/json'

//     },
//     body:JSON.stringify(p)
// }

// )

// .then(

//     res=>
//     {
//        return res.json()
//     }
// ).then(

//       data=>{

//         console.log(data)
//       }
// )

// .catch(
//     err=>{
//         console.log(err)
//     }
// )


// let p={

//     title:'test product',
//     price:233,
//     description:'lorem ipsum set',
//     category:'electronic'
// }


// fetch('https://fakestoreapi.com/products/1',{

//     method:"PUT",
//     headers:{

//         'content-type':'application/json'

//     },
//     body:JSON.stringify(p)
// }

// )

// .then(

//     res=>
//     {
//        return res.json()
//     }
// ).then(

//       data=>{

//         console.log(data)
//       }
// )

// .catch(
//     err=>{
//         console.log(err)
//     }
// )

fetch('https://fakestoreapi.com/products/1',

       {
        method:"DELETE"
       }
)

.then(

    res=>{
        return res.json()
    }
).then(
    
    data=>{

        console.log(data)
    }
)

.catch(

     err=>{

         console.log(err)
     }
)