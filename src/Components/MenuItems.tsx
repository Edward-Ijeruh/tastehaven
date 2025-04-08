//Custom type
export type MenuItemType = {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
    quantity?: number;
};

//MenuItems List
export const MenuItems: MenuItemType[] = [
    // Jollof Rice
    { id: 1, name: "Jollof Rice", price: 800, category: "Rice", img: "url(../assets/menu_pictures/jollof_rice.jpeg)" },
    { id: 8, name: "Fried Rice", price: 850, category: "Rice", img: "../assets/menu_pictures/fried_rice.jpg" },
    // Chicken
    { id: 2, name: "Fried Chicken", price: 600, category: "Chicken", img: "../assets/menu_pictures/fried_chicken.jpg" },
    { id: 3, name: "Grilled Chicken", price: 700, category: "Chicken", img: "../assets/menu_pictures/grilled_chicken.jpeg" },
    { id: 4, name: "Chicken Wings", price: 750, category: "Chicken", img: "../assets/menu_pictures/chickenwings.jpeg" },
    // Sides
    { id: 5, name: "Fried Plantains", price: 400, category: "Sides", img: "../assets/menu_pictures/plantain.jpeg" },
    { id: 6, name: "Moi Moi", price: 350, category: "Sides", img: "../assets/menu_pictures/moimoi.jpeg" },
    // Pastries
    { id: 8, name: "Meat Pie", price: 250, category: "Pastries", img: "../assets/menu_pictures/meat pie.jpeg" },
    { id: 9, name: "Chicken Pie", price: 300, category: "Pastries", img: "../assets/menu_pictures/chickenpie.jpeg" },
    { id: 10, name: "Sausage Roll", price: 200, category: "Pastries", img: "../assets/menu_pictures/sausageroll.jpeg" },
    { id: 12, name: "Fish Roll", price: 280, category: "Pastries", img: "fish-roll.jpg" },
    { id: 13, name: "Pizza", price: 1500, category: "Pastries", img: "pizza.jpg" },
    { id: 14, name: "Shawarma", price: 1200, category: "Pastries", img: "shawarma.jpg" },

    // Soda Drinks
    { id: 15, name: "Coke", price: 150, category: "Soda Drinks", img: "coke.jpg" },
    { id: 16, name: "Fanta", price: 150, category: "Soda Drinks", img: "fanta.jpg" },
    { id: 17, name: "Sprite", price: 150, category: "Soda Drinks", img: "sprite.jpg" },
    { id: 18, name: "Pepsi", price: 150, category: "Soda Drinks", img: "pepsi.jpg" },
    { id: 19, name: "Malt Drink", price: 180, category: "Soda Drinks", img: "malt-drink.jpg" },

];