var array=[];
forLoop(array)
console.log(array.length)

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