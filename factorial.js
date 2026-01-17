function factorial(n=5){
  
  let facto = 1;
  for(i=2; i<=n;i++){
    facto = facto * i;
  }
  return facto;

}
console.log(factorial());
console.log(factorial(10));