import Jollof from "../assets/menu_pictures/jollof_rice.jpeg";
import Fried from "../assets/menu_pictures/fried_rice.jpg";
import Chicken from "../assets/menu_pictures/fried_chicken.jpg";
import Grilled from "../assets/menu_pictures/grilled_chicken.jpeg";
import Wings from "../assets/menu_pictures/chickenwings.jpeg";
import Plantain from "../assets/menu_pictures/plantain.jpeg";
import MoiMoi from "../assets/menu_pictures/moimoi.jpeg";
import MeatPie from "../assets/menu_pictures/meat pie.jpeg";
import ChickenPie from "../assets/menu_pictures/chickenpie.jpeg";
import SausageRoll from "../assets/menu_pictures/sausageroll.jpeg";
import FishRoll from "../assets/menu_pictures/fishpie.jpeg";
import Pizza from "../assets/menu_pictures/pizza.jpeg";
import Shawarma from "../assets/menu_pictures/shawarma.jpeg";
import Coke from "../assets/menu_pictures/coke.jpeg";
import Fanta from "../assets/menu_pictures/fanta.jpeg";
import Sprite from "../assets/menu_pictures/sprite.jpeg";
import Pepsi from "../assets/menu_pictures/pepsi.jpeg";
import Malt from "../assets/menu_pictures/malt.jpeg";


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
    { id: 1, name: "Jollof Rice", price: 900, category: "Rice", img: Jollof },
    { id: 2, name: "Fried Rice", price: 950, category: "Rice", img: Fried },
    { id: 3, name: "Fried Chicken", price: 1500, category: "Chicken", img: Chicken },
    { id: 4, name: "Grilled Chicken", price: 1700, category: "Chicken", img: Grilled },
    { id: 5, name: "Chicken Wings", price: 7500, category: "Chicken", img: Wings },
    { id: 6, name: "Fried Plantains", price: 400, category: "Sides", img: Plantain },
    { id: 7, name: "Moi Moi", price: 350, category: "Sides", img: MoiMoi },
    { id: 8, name: "Meat Pie", price: 750, category: "Pastries", img: MeatPie },
    { id: 9, name: "Chicken Pie", price: 750, category: "Pastries", img: ChickenPie },
    { id: 10, name: "Sausage Roll", price: 400, category: "Pastries", img: SausageRoll },
    { id: 11, name: "Fish Roll", price: 680, category: "Pastries", img: FishRoll },
    { id: 12, name: "Pizza", price: 10000, category: "Pastries", img: Pizza },
    { id: 13, name: "Shawarma", price: 3000, category: "Pastries", img: Shawarma },
    { id: 14, name: "Coke", price: 480, category: "Soda Drinks", img: Coke },
    { id: 15, name: "Fanta", price: 480, category: "Soda Drinks", img: Fanta },
    { id: 16, name: "Sprite", price: 480, category: "Soda Drinks", img: Sprite },
    { id: 17, name: "Pepsi", price: 480, category: "Soda Drinks", img: Pepsi },
    { id: 18, name: "Malt Drink", price: 480, category: "Soda Drinks", img: Malt },
];