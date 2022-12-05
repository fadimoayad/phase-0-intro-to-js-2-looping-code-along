let arr=["Guadalupe", "Ollie", "Aki"]
let surprise="surprise"
let arr2=[]

function writeCards(arr){
  for (let i = 0; i <= arr.length-1; i++) {
     arr2.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
}
return arr2
}

function countDown(num){

  while ( num >= 0) {
     console.log(num)
     num--;
  }
}



