const Input = ({handleChange, value, title, name, color}) => {
    return (
        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test" onChange={handleChange} value={value} name={name}/>
            <span className="checkmark" style={{backgroundColor: color}}></span>{title}
        </label>
    )
}

export default Input