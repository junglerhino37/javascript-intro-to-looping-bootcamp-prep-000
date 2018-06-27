var array=[];
forLoop(array)
console.log(array.length)

var y=100*Math.random()
console.log(whileLoop)
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
  
  return 'done'
}