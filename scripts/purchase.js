
function main() {
   if(1)
   {
    var purchasedata = JSON.parse(localStorage.getItem("purchase"))
    append(purchasedata)
    var userdata=JSON.parse(localStorage.getItem("user"))
    var balance=userdata.wallet
    console.log(nambalancee)
    document.getElementById("wallet_balance").innerText=balance
   }
    document.getElementById("balance").innerText=balance
}
main()


function append(data) {
    var container = document.getElementById("purchased_vouchers")

    data.forEach(function (ele) {
        if(true)
        {
            var div = document.createElement("div")
        div.setAttribute("class", "voucher")
        var image = document.createElement("img")
        image.src = ele.image
        console.log(image)
        var name = document.createElement("p")
        name.innerText = ele.name
        console.log(name)
        var price = document.createElement("p")
        price.innerText = ele.price
        console.log(price)
        div.append(image, name, price)
        container.append(div)

        }

    })
}

