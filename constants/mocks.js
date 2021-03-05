import AsianFoodIcon from '../assets/icons/asian_food_icon.png';
import VegetarianIcon from '../assets/icons/vegetarian_food_icon.png';
import ItalianIcon from '../assets/icons/icon_pizza.png';
import BakeryIcon from '../assets/icons/bakery_icon.png';

import MargaritaPizza from '../assets/images/pizza_margarita-trimmy.png';
import PeperroniPizza from '../assets/images/pepperoni_pizza.png';
import spaghetti from '../assets/images/spaghetti.png';
import tonkatsu from '../assets/images/tonkatsu-trimmy.png';
import greekSalad from '../assets/images/greek_salad-trimmy.png';
import sushi from '../assets/images/sushi_plate-trimmy.png';


import BGimageBlue from '../assets/images/pizza_header_background_blue.png';

const tagFoods = [
    {
        image: ItalianIcon,
        name: 'Italian',
        color: '#FCE8E8'
    },
    {
        image: VegetarianIcon,
        name: 'Vegetarian',
        color: '#BDE0F9'
    },
    {
        image: AsianFoodIcon,
        name: 'Asian',
        color: '#FFE7A8'
    },
    {
        image: BakeryIcon,
        name: 'Bakery',
        color: '#FFE082'
    }
]
const foods = [
    {
        name: "Pizza Margarita",
        price: 12.50,
        image: MargaritaPizza,
        tag: ['Italian'],
    },
    {
        name: "Spaghetti",
        price: 15,
        image: spaghetti,
        tag: ['Italian'],
    },
    {
        name: "Tonkatsu",
        price: 18.99,
        image: tonkatsu,
        tag: ['Asian'],
    },
    {
        name: "Greek Salad",
        price: 20.00,
        image: greekSalad,
        tag: ['Vegetarian'],
    },
    {
        name: "Pizza Pepperoni",
        price: 12.50,
        image: PeperroniPizza,
        tag: ['Italian'],
    },
    {
        name: "Sushi",
        price: 19.75,
        image: sushi,
        tag: ['Asian'],
    },
];

const restaurant = {
    bgImage: BGimageBlue,
    name: 'Brooklyn Pizza',
    avaliation:4.6,
    distance:2.1,
    deliveryTax:2,
    adress:'542 Green St. San Franciso, CA 94133',
    description:'Funky joint serving focaccia pizza to daytime snackers & a late-night, post-bar crowd.',
    tags: ['Italian', 'Bakery'],
    coordenates: {
        latitude:40.765931460421065,
        longitude:-73.95316767260623,
    },
    popularPlates:[foods[0],foods[4]]
};

export {
    foods,
    tagFoods,
    restaurant
}