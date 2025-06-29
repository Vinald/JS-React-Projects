import Search from "./components/search/Search";
import { useState } from "react";
import FoodList from "./components/foodList/FoodList.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";

const sampleData = [
    {
        id: 1956088,
        title: "Banana Cream Pi",
        image: "https://img.spoonacular.com/recipes/1956088-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 652377,
        title: "Moon Pies",
        image: "https://img.spoonacular.com/recipes/652377-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 680975,
        title: "BLT Pizza",
        image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 649730,
        title: "Lemon Pie",
        image: "https://img.spoonacular.com/recipes/649730-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 655145,
        title: "Peach Pie",
        image: "https://img.spoonacular.com/recipes/655145-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 658277,
        title: "Rice Pilaf",
        image: "https://img.spoonacular.com/recipes/658277-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 650325,
        title: "Loquat Pie",
        image: "https://img.spoonacular.com/recipes/650325-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 632979,
        title: "Aspic Jelly",
        image: "https://img.spoonacular.com/recipes/632979-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 640182,
        title: "Cottage Pie",
        image: "https://img.spoonacular.com/recipes/640182-312x231.jpg",
        imageType: "jpg",
    },
    {
        id: 647675,
        title: "Hushpuppies",
        image: "https://img.spoonacular.com/recipes/647675-312x231.jpg",
        imageType: "jpg",
    },
];

function App() {
    // const [foodData, setFoodData] = useState({[]});
    const [foodData, setFoodData] = useState(sampleData);

    return (
        <div className="App">
            <Nav />
            <Search foodData={foodData} setFoodData={setFoodData} />
            <FoodList foodData={foodData} />
        </div>
    );
}

export default App;
