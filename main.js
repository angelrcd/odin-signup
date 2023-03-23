const pswdInput = document.querySelector("#pswd");
const repeatpswdInput = document.querySelector("#pswd-confirm")

console.log(repeatpswdInput);

pswdInput.addEventListener('change', ()=>{
  console.log(pswdInput.value);
  repeatpswdInput.pattern = pswdInput.value;
})