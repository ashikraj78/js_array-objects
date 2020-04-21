var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

//1
let penguins = [gunter,ramon,fred];

//2
console.log(penguins[0]);

//3
let secondPenguin = penguins[1];

// 4
console.log(penguins[2].name);

//5

//6
console.log(penguins.length);

//7
penguins[0].canFly = true;

//8
console.log(penguins[0].sayHello());

// 9
for(let penguin of penguins){
        console.log(penguin.name);
    }

// 10
for(let penguin of penguins){
    console.log(penguin.sayHello());
}

//11
for(let penguin of penguins){
    penguin.numberOfFeet=2;
}
// console.log(penguins);

//12
for(let penguin of penguins){
    if(penguin.canFly==true){
        console.log(`${penguin.name} can fly`);
    } else {
        console.log(`${penguin.name} cannot fly`);
    }
}


