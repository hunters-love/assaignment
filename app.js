// first memory button 
document.getElementById("memory-button1").addEventListener("click", function () {
    const extraMemoryPrice = 0;
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const extraMemoryCostUpdate = extraMemoryCost.innerText;
    extraMemoryCost.innerText = extraMemoryPrice;
    // console.log(extraMemoryCostUpdate);
})
// second memory button
document.getElementById("memory-button2").addEventListener("click", function () {
    const extraMemoryPrice2 = 180;
    const extraMemoryCostUpdate2 = document.getElementById("extra-memory-cost");
    const extraMemoryCostupdates = extraMemoryCostUpdate2.innerText;
    extraMemoryCostUpdate2.innerText = extraMemoryPrice2;
})
// memory button area finish




// first storage button 
document.getElementById("storage-button1").addEventListener("click", function () {
    const extraStorageCost = 0;
    const extraStoraegCostUpdate = document.getElementById("extra-storage-cost");
    const extraStorageCosts = extraStoraegCostUpdate.innerText;
    extraStoraegCostUpdate.innerText = extraStorageCost;
})

// second storage button

document.getElementById("storage-button2").addEventListener("click", function () {
    const extraStorageCost2 = 100;
    const extraStorageCostUpdate = document.getElementById("extra-storage-cost");
    const extraStorageCost = extraStorageCostUpdate.innerText;
    extraStorageCostUpdate.innerText = extraStorageCost2;
})

//third storage button

document.getElementById("storage-button3").addEventListener("click", function () {
    const extraStorageCost3 = 180;
    const extraStoraegCostUpdate = document.getElementById("extra-storage-cost");
    const extraStorageCost = extraStoraegCostUpdate.innerText;
    extraStoraegCostUpdate.innerText = extraStorageCost3;
})


// first delevery button
document.getElementById("delevery-button1").addEventListener("click", function () {
    const freeDeleveryCost = 0;
    const freeDeleveryCostUpdate = document.getElementById("extra-delevery-charge");
    const freeDeleveryCost1Update = freeDeleveryCostUpdate.innerText;
    freeDeleveryCostUpdate.innerText = freeDeleveryCost;
})

// second delevery button

document.getElementById("delevery-button2").addEventListener("click", function () {
    const freeDeleveryCost2 = 20;
    const freeDeleveryCost2Update = document.getElementById("extra-delevery-charge");
    const freeDeleveryCostUpdate2 = freeDeleveryCost2Update.innerText;
    freeDeleveryCost2Update.innerText = freeDeleveryCost2;
})


