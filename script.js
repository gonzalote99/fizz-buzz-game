let xinput = parseInt(prompt("enter number")) 
const print1 = [];
for(let i = 2; i <xinput; i++) {
  if(i==xinput) {break;}
  print1.push(i);
  if(i%3== 0) {
    console.log('fizz');
  } else if(i%5 == 0) {
    console.log('buzz')
  } else {
    console.log(i);
  }
}

console.log(print1 + " number between 1 and " +xinput);