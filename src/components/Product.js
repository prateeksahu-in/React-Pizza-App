import React from 'react'

const Product = (props) => {
console.log(props);
const {product} = props;
    return (
         <div>       
            <img src={product.image} alt="pizza"/>
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{product.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full px-4">{product.size}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>{product.price}</span>
                <button className="px-4 py-1 rounded-full font-bold bg-yellow-500">Add</button>
            </div>
        </div>
    )
}

export default Product
