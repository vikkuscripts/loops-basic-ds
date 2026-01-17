function prime(n) {
  if(n<=1) {
    return false
  }
  
  for(let i = 2; i <n; i++){
    if(n%i === 0){
      return false
    }
  }
   return true;
}
console.log(prime(13));
console.log(prime(14));
console.log(prime(15));
console.log(prime(17));