var array=[];
var y=Math.floor(100*Math.random())


console.log(y)
console.log(whileLoop(y))



function forLoop(x){
  for(let i=0; i<25; i++){
    if (i===1)  {
      x.push("I am 1 strange loop.")
    } else {
      x.push(`I am ${i} strange loops.`)
    }
  }

  return x
}



function whileLoop(x){
  while (x>=0){
    console.log(x)
    x--
  }
  return 'done'
}