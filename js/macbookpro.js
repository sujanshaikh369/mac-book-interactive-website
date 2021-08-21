/* function total(price, product) {
  const totalPrice = document.getElementById(product);
  totalPrice.innerText = price;
  const total = document.getElementById("total");
  const totalNumber = parseInt(total.innerText);

  if (price == 180) {
    return (total.innerText = totalNumber + 180);
  } else if (price == 100) {
    total.innerText = totalNumber + 100;
  } else if (price == 20) {
    total.innerText = totalNumber + 20;
  } else if (price == 0) {
    total.innerText = 1299;
  }
  // const firstValue = document.getElementById("extra-memory");
  // const ssdCrad = document.getElementById("extra-storage");
  // const totalF = firstValue + ssdCrad;
}

document.getElementById("memory-gb8").addEventListener("click", function () {
  total(0, "extra-memory");
});
document.getElementById("memory-gb16").addEventListener("click", function () {
  total(180, "extra-memory");
});
document
  .getElementById("ssd-storage256")
  .addEventListener("click", function () {
    total(0, "extra-storage");
  });
document
  .getElementById("ssd-storage512")
  .addEventListener("click", function () {
    total(100, "extra-storage");
  });
document
  .getElementById("ssd-storage1tb")
  .addEventListener("click", function () {
    total(180, "extra-storage");
  });
document
  .getElementById("frist-delivery")
  .addEventListener("click", function () {
    total(0, "delivery-cost");
  });
document
  .getElementById("second-delivery")
  .addEventListener("click", function () {
    total(20, "delivery-cost");
  });
 */

// function memorySecTotal(price, isIncreasing) {
//   const extraMemory = (document.getElementById("extra-memory").innerText =
//     price);
//   console.log(extraMemory);
//   //   totalPrice(price);
// }

// function ssdTotal(price) {
//   const extraMemory = (document.getElementById("extra-storage").innerText =
//     price);
//   console.log(extraMemory);
//   //   totalPrice(price);
// }
// function deliveryCost(price) {
//   const extraMemory = (document.getElementById("delivery-cost").innerText =
//     price);
// }
// function totalPrice(price) {
//   const total = document.getElementById("total");
//   const totalNumber = parseInt(total.innerText) + price;
//   total.innerText = totalNumber;
//   if (price == 0) {
//     return (total.innerText = 1299);
//   }
//   if (price == 100) {
//     return (total.innerText = 1299);
//   }
//   console.log(total);

//   //   total.innerText = totalNumber - price;
// }

// document.getElementById("memory-gb8").addEventListener("click", function () {
//   memorySecTotal(0);
//   totalPrice(0);
// });
// document.getElementById("memory-gb16").addEventListener("click", function () {
//   memorySecTotal(180);
//   totalPrice(180);
// });

// document
//   .getElementById("ssd-storage256")
//   .addEventListener("click", function () {
//     ssdTotal(0);
//     totalPrice(0);
//   });
// document
//   .getElementById("ssd-storage512")
//   .addEventListener("click", function () {
//     ssdTotal(100);
//     totalPrice(100);
//   });
// document
//   .getElementById("ssd-storage1tb")
//   .addEventListener("click", function () {
//     ssdTotal(180);
//     totalPrice(180);
//   });
// document
//   .getElementById("frist-delivery")
//   .addEventListener("click", function () {
//     deliveryCost(0);
//     totalPrice(0);
//   });
// document
//   .getElementById("second-delivery")
//   .addEventListener("click", function () {
//     deliveryCost(20);
//     totalPrice(20);
//   });
const extra = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage");

function updateTotal() {
    const totalPrice = document.getElementById("total");
    const bestPrice = document.getElementById("best-price");
    const deliveryCost = document.getElementById("delivery-cost");
    const deliveryCharge = parseInt(deliveryCost.innerText);
    const extraS = parseInt(extraStorage.innerText);
    const extraCharge = parseInt(extra.innerText);
    const extraTotal = parseInt(bestPrice.innerText);
    const totalExtra = extraCharge + extraTotal;
    totalPrice.innerText = totalExtra + extraS + deliveryCharge;
}
const discountCode = document.getElementById("pomo-code");

document.getElementById("pomo-Code").addEventListener("click", function () {
    const totalPrice = document.getElementById("total");
    const allTotal = document.getElementById("all-total");
    if (discountCode == "stevenkaku") {
        totalPrice.innerText / 20;
        allTotal.innerText = totalPrice.innerText;
    } else {
        return "err";
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