var array=[];
forLoop(array)
console.log(array)
function forLoop(x){
  for(let i=0; i<25; i++){
    x.push("I am ${i} strange loops.")
  }
}