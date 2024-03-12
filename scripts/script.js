// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
function totalCoffeeSold(sales){
    let totalCoffee = 0;

    for (let i = 0; i < sales.length; i++){
        totalCoffee += sales[i];
    }
    return totalCoffee;
}


// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options

function filterDecaf(options){
    let coffee =[];
    for(const filterOption of filterOptions){
        if (filterOption.decaf === false){
            coffee.push(filterOption);
        }
    }
    return coffee;
}
const filterOptions = [
    { name: "Mocha", nonDecaf: false},
    { name: "Latte", decaf: true},
    { name: "Macchiato", decaf: true}
];
const coffee = filterDecaf(filterOptions);
console.log("Non decaf coffee: ", coffee);

// Task 3: Define a class for Jazz Coffee Roasters

class JazzCoffeeRoaster{
    constructor(name, location, type){
        this.name = name;
        this.type = type;
        this.location = location;
    }
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoasters extends JazzCoffeeRoaster {
    constructor(name, location, type, age){
        super(name, location, type);
        this.age = age;
    }
}

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function jazzCoffeeBlends(name, type){
    this.name = name; 
    this.type = type;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups {
    constructor(color = "Cup Color", size = "Cup Size"){
        this.color = color;
        this.size = size;

    }
}

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    
    let message = ("Hosting a coffee event this week! at Jazz Jam April 10,2024 at our Jazz &Java venue")
    console.log(message);
    
    // Task 9: Use spread operators on an array
    
    const updatedCoffeeTypes = [...coffeeTypes, newType];

    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    