let outfit = {
    hat:"baseball cap",
    shirts:"Hawaiian shirt",
    pants : "cargo shorts",
    shoes : "lip-flops"
} ;

// 2
let penguinHatType = outfit.hat;
console.log(penguinHatType);

// 3
outfit.accessory = "Pocket watch";

// 4
outfit.hat = "top hat";

// 5
delete outfit.pants;

// 6
for (let key in outfit){
    console.log(key);
}