leftPrice = document.querySelector(".leftPrice")
midPrice = document.querySelector(".middlePrice")
rightPrice = document.querySelector(".rightPrice")
btn = document.querySelector(".priceChanger")
circle = document.querySelector(".circle")

monthlyBasic = "19.99"
yearlyBasic = "199.99"

monthlyPro = "24.99"
yearlyPro = "249.99"

monthlyMaster = "39.99"
yearlyMaster = "399.99"

let monthly = true

btn.addEventListener("click", (e) => {
    circle.classList.toggle("checked")
    if (monthly == true) {
        leftPrice.innerText = yearlyBasic
        midPrice.innerText = yearlyPro
        rightPrice.innerText = yearlyMaster
        monthly = false
    } else {
        leftPrice.innerText = monthlyBasic
        midPrice.innerText = monthlyPro
        rightPrice.innerText = monthlyMaster
        monthly = true
    }
})