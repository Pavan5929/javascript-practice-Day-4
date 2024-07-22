/*function prouduct(pname,pprice){

         this.name=pname;
         this.price=pprice;
}

let p1 = new prouduct('real me pro',2000)

console.log(p1)

console.log(prouduct.prototype ==Object.getPrototypeOf(p1)); */

function prouduct(pname,pprice){

    this.name=pname;
    this.price=pprice;

    
}

  prouduct.prototype.getdetails=()=>
  {
    console.log("hi")
  }

let p1 = new prouduct('real me pro',2000)

console.log(p1)

let p2 = new prouduct('vivo',2000)
console.log(p2)

