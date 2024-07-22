async function getdata(){

try{

        let res=await fetch('https://fakestoreapi.com/products');
        let data=await res.json();
        console.log(data)
    }

    catch (error){

        console.log(error)
    }
}

getdata()