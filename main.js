const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your appetizer is ${appetizer.name} for $${appetizer.price}. \nYour main is ${main.name} for $${main.price}. \nYour dessert is ${dessert.name} for $${dessert.price}. \nThe total price is $${totalPrice}.`
    },
};

menu.addDishToCourse('appetizers', 'Fried Pickles', 5.50);
menu.addDishToCourse('appetizers', 'Chips', 5);
menu.addDishToCourse('appetizers', 'Wings', 7);
menu.addDishToCourse('mains', 'Steak', 20);
menu.addDishToCourse('mains', 'Burger', 15);
menu.addDishToCourse('mains', 'Pasta', 12);
menu.addDishToCourse('desserts', 'Cheesecake', 4);
menu.addDishToCourse('desserts', 'Ice cream', 4.5);
menu.addDishToCourse('desserts', 'Cinnamon roll', 3);

console.log(menu);

let meal = menu.generateRandomMeal();

console.log(meal);
