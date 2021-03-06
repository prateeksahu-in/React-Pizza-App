import { useContext,useEffect,useState } from 'react';
import { CartContext } from '../CartContext';
const Cart = () => {
    const [products,setProducts] = useState([]);
    const { cart } = useContext(CartContext);
    
    useEffect(() => {
        if(!cart.items){
            return;
        }
        // console.log('cart',Object.keys(cart.items))
        fetch('/api/products/cart-items',{
            method: 'POSt',
            headers:{
                'Content-Type':'applications/json'
                },
                body:JSON.stringify({ids: Object.keys(cart.items)})
        }).then(res => res.json())
        .then(products =>{
            setProducts(products);
        })
    }, [cart]);
    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
            {
                products.map(product =>{
                    return(
                        <li className="mb-12">
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="h-16" src={product.image} alt="" />
                                <span className="font-bold ml-4 w-48">{product.name}</span>
                            </div>
                            <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">-</button>
                            <b className="px-4">2</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">+</button>
                            </div>

                            <span>{product.price}</span>
                            
                            <button className="bg-red-500 text-white px-4 py-2 rounded-full leadign-none">Delete</button>
                            </div>
                        </li>
                    )
                })
            }
                <li className="mb-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-16" src="images/peproni.png" alt="" />
                            <span className="font-bold ml-4 w-48">Double peperoni</span>
                        </div>
                        <div>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">-</button>
                        <b className="px-4">2</b>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">+</button>
                        </div>

                        <span>Rs499</span>
                        
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full leadign-none">Delete</button>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-16" src="images/peproni.png" alt="" />
                            <span className="font-bold ml-4 w-48">Double peperoni</span>
                        </div>
                        <div>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">-</button>
                        <b className="px-4">2</b>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">+</button>
                        </div>

                        <span>Rs499</span>
                        
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full leadign-none">Delete</button>
                    </div>
                </li>
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total: Rs1000</b>
            </div>
            <div className="text-right mt-6">
                <button className="bg-yellow-500 px-4 py-2 rounded-full leadign-none">Order Now</button>
            </div>
        </div>
    )
}

export default Cart