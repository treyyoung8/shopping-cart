import React from 'react'

const Form = (props) => {
    var options = props.products.map(item => {
        return (
            <option key={item.id} value={item.id}>{item.name}</option>
        )
    })
    return (
        <div className="container">
            <form>
                <div>
                    <p>Total Price: ${props.total}</p>
                </div>
                <div className="form-group col-md-12">
                    <p>Quantity</p>
                <input className="col-md-12 quantityInput" onChange={(e) => props.quantity(e)}></input>
                </div>
                <div className="form-group col-md-12">
                    <p>Products</p>
                    <select onChange={(e) => props.item(e)} className="col-md-12">
                        <option>Please select an option...</option>
                        {options}
                    </select>
                </div>
                <div className="form-group col-md-12">
                    <button className="btn btn-primary" onClick={(e) => props.addItemToCart(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form