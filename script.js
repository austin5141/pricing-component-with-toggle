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

    if (monthly == true) {
        leftPrice.textContent = yearlyBasic
        midPrice.textContent = yearlyPro
        rightPrice.textContent = yearlyMaster
        monthly = false
    } else {
        leftPrice.textContent = monthlyBasic
        midPrice.textContent = monthlyPro
        rightPrice.textContent = monthlyMaster
        monthly = true
    }
})