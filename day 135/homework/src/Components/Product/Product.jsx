import { useState } from "react"

export default function Product() {
    const [product, setProduct] = useState({
        name: "Laptop",
        price: 1000,
        quantity: 1,
    })

    const increase = () =>
        setProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))

    const decrease = () =>
        setProduct(prev => ({ ...prev, quantity: prev.quantity > 0 ? prev.quantity - 1 : 0 }))

    const raisePrice = () =>
        setProduct(prev => ({ ...prev, price: prev.price * 1.1 }))

    return (
        <div>
            <h2>{product.name}</h2>
            <h3>Price: {product.price.toFixed(2)}</h3>
            <h3>Quantity: {product.quantity}</h3>

            <button onClick={increase}>+1 Quantity</button>
            <button onClick={decrease}>-1 Quantity</button>
            <button onClick={raisePrice}>Price +10%</button>
        </div>
    )
}