import "./Category.css"
import Input from "../../../components/Input.jsx";

const Category = ({handleChange}) => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label htmlFor="" className="sidebar-label-container">
                    <input type="radio" name="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>All
                </label>

                <Input handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input handleChange={handleChange}
                       value="flats"
                       title="Flats"
                       name="test"
                />
                <Input handleChange={handleChange}
                       value="sandals"
                       title="Sandals"
                       name="test"
                />
                <Input handleChange={handleChange}
                       value="heels"
                       title="Heels"
                       name="test"
                />
            </div>
        </div>
    )
}

export default Category