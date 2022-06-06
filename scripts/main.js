var form=document.querySelector("form")
form.addEventListener("submit",sendtoLS)

function Object(name,email,address,amount)
{
    this.name=name
    this.email=email
    this.address=address
    this.wallet=amount
}
function sendtoLS()
{
    event.preventDefault()
   var user=new Object(form.name.value,form.email.value,form.address.value,form.amount.value)
   console.log(user)
   form.name.value=null
   form.email.value=null
   form.address.value=null
   form.amount.value=null
   localStorage.setItem("user",JSON.stringify(user))
  


}