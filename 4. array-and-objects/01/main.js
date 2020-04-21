
//1
let favouriteFoods = ["Krill", "Fish", "Squid"];

//2
console.log(favouriteFoods[1]);

// 3
let firstFavFood = favouriteFoods[0];
// alert(firstFavFood);

// 4
favouriteFoods.push("Friuts");

//5
console.log(favouriteFoods.length);

//6
favouriteFoods[3]="pineapples" ;

//7
let lastFavFood = favouriteFoods[favouriteFoods.length - 1];
// alert(lastFavFood);

//8
for(let favouriteFood of favouriteFoods ){
    console.log(favouriteFood);
}

