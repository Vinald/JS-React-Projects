import Search from "./components/search/Search";
import { useState } from "react";
import FoodList from "./components/foodList/FoodList.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import Container from "./components/container/Container.jsx";
import {InnerContainer, RightInnerContainer} from "./components/container/InnerContainer.jsx";
import FoodDetails from "./components/foodDetails/FoodDetails.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("");

    return (
        <div className="App">
            <Nav />
            <Search foodData={foodData} setFoodData={setFoodData} />
            <Container>
                <InnerContainer>
                    <FoodList foodData={foodData}  setFoodId={setFoodId} />
                </InnerContainer>
                <RightInnerContainer>
                    <FoodDetails foodId={foodId} />
                </RightInnerContainer>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
