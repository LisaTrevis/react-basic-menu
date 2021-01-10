import buttermilkPancakes from "./images/item-1.jpeg";
import baconCheeseburger from "./images/item-2.jpeg";
import birthdayMilkshake from "./images/item-3.jpeg";
import englishDelight from "./images/item-4.jpeg";
import eggBurger from "./images/item-5.jpeg";
import oreoDream from "./images/item-6.jpeg";
import baconOverflow from "./images/item-7.jpeg";
import americanClassic from "./images/item-8.jpeg";
import quarantineBuddy from "./images/item-9.jpeg";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 9.99,
    img: buttermilkPancakes,
    desc: `Our delightfully fluffy pancakes come with berries, powdered sugar, and whipped cream on the side.`,
  },
  {
    id: 2,
    title: "bacon cheeseburger",
    category: "lunch",
    price: 18.99,
    img: baconCheeseburger,
    desc: `The bacon cheeseburger comes with lettuce, tomato, and house made cheese sauce with steak fries on the side.`,
  },
  {
    id: 3,
    title: "birthday milkshake",
    category: "shakes",
    price: 8.99,
    img: birthdayMilkshake,
    desc: `This party milkshake comes with a donut topped in whipped cream and sprinkles. Perfect for celebrating your big day!`,
  },
  {
    id: 4,
    title: "english delight",
    category: "breakfast",
    price: 12.99,
    img: englishDelight,
    desc: `Perfect with a spot of tea, our English Breakfast includes beans covered in cheese, two eggs, and a side of toast.`,
  },
  {
    id: 5,
    title: "egg burger",
    category: "lunch",
    price: 16.99,
    img: eggBurger,
    desc: `Our house hamburger is grilled to perfection and topped with lettuce, tomato, mayo, and a fried egg.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 6.99,
    img: oreoDream,
    desc: `This chocolately milkshake with chunks of Oreo cookie hits the spot. Served with cookies on the side for dipping.`,
  },
  {
    id: 7,
    title: "bacon biscuit sandwich",
    category: "breakfast",
    price: 4.99,
    img: baconOverflow,
    desc: `Lettuce, cheese, fried egg, and bacon on a buttery flaky biscuit. So good, you'll want to order two!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: americanClassic,
    desc: `Our house cheeseburger grilled to order and topped with cheese and a tomato slice. Served with fries on the side.`,
  },
  {
    id: 9,
    title: "quarantine shake",
    category: "shakes",
    price: 9.99,
    img: quarantineBuddy,
    desc: `Share this with someone in your quarantine bubble, or someone you want to risk it all for!`,
  },
];
export default menu;
