
const allTotalPrice = document.getElementById("all-total");
const extra = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage");

function updateTotal() {
    const totalPrice = document.getElementById("total");
    //  allTotalPrice = document.getElementById("all-total");
    const bestPrice = document.getElementById("best-price");
    const deliveryCost = document.getElementById("delivery-cost");
    const deliveryCharge = parseInt(deliveryCost.innerText);
    const extraS = parseInt(extraStorage.innerText);
    const extraCharge = parseInt(extra.innerText);
    const extraTotal = parseInt(bestPrice.innerText);
    const totalExtra = extraCharge + extraTotal;
    totalPrice.innerText = totalExtra + extraS + deliveryCharge;
    allTotalPrice.innerText = totalExtra + extraS + deliveryCharge;
}
const discountCode = document.getElementById("pomo-code");

document.getElementById("pomo-Code").addEventListener("click", function () {
    const totalPrice = document.getElementById("total");
    console.log(totalPrice.innerText);
    // const allTotal = document.getElementById("all-total");
    // console.log(allTotal);
    let totalAfterPromo = allTotalPrice.innerText;
    if (discountCode.value.toLowerCase() == "stevekaku") {
        /* totalPrice.innerText / 20;
        allTotal.innerText = totalPrice.innerText; */
        allTotalPrice.innerText = totalAfterPromo - (totalAfterPromo * 20) / 100;
    } else {
        alert('Invalid Promo');
    }
});

document.getElementById("memory-gb8").addEventListener("click", function () {
    extra.innerText = "0";
    updateTotal();
});
document.getElementById("memory-gb16").addEventListener("click", function () {
    extra.innerText = "180";
    updateTotal();
});
document
    .getElementById("ssd-storage256")
    .addEventListener("click", function () {
        extraStorage.innerText = "0";
        updateTotal();
        console.log(extraStorage);
    });
document
    .getElementById("ssd-storage512")
    .addEventListener("click", function () {
        extraStorage.innerText = "100";
        updateTotal();
        console.log(extraStorage);
    });
document
    .getElementById("ssd-storage1tb")
    .addEventListener("click", function () {
        extraStorage.innerText = "180";
        updateTotal();
        console.log(extraStorage);
    });

document
    .getElementById("first-delivery")
    .addEventListener("click", function () {
        const deliveryCost = document.getElementById("delivery-cost");
        deliveryCost.innerText = 0;
        updateTotal();
    });
document
    .getElementById("second-delivery")
    .addEventListener("click", function () {
        const deliveryCost = document.getElementById("delivery-cost");
        deliveryCost.innerText = 20;
        updateTotal();
    });