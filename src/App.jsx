import Navigation from "./parts/Navigation/Nav.jsx";
import Products from "./parts/Products/Products.jsx";
import Recommended from "./parts/Recommended/Recommended.jsx";
import Sidebar from "./parts/Sidebar/Sidebar.jsx";
import {useState} from "react";
import data from "../src/db/data.js"
import Card from "./components/Card.jsx";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const filteredItems = data.filter(product => product.title.toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1
    )

    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }

    const handleClick = event => {
        setSelectedCategory(event.target.value)
    }


    const filteredData = (products, selected, query) => {
        let filteredProduct = products

        if (query) {
            filteredProduct = filteredItems
        }

        if (selected) {
            filteredProduct = filteredProduct.filter(({category, color, company, newPrice, title}) =>  category === selected || color === selected || company === selected
                || newPrice === selected || title === selected
            )
        }

        return filteredProduct.map(({img, title, reviews, newPrice, prevPrice}) => (
            <Card
                key={Math.random()}
                img={img}
                title={title}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />)
        )
    }

    const result = filteredData(data, selectedCategory, query)

  return (
    <>
        <Sidebar handleChange={handleChange}/>
        <Navigation query={query} handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
        <Products result={result}/>
    </>
  )
}

export default App
