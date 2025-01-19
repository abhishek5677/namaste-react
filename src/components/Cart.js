import { useDispatch, useSelector } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";
import { emptyCart } from "../utils/slices/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store?.cart?.items) || []

    const dispatch = useDispatch()

    const clearCart = () => {
        dispatch(emptyCart())
    }

    return (
        <div className="p-5">
            <h1 className="text-4xl	font-bold text-black text-center">Cart</h1>
            <button className="py-1 px-3 absolute bg-black text-white right-10 rounded" onClick={() => clearCart()}>
                Clear cart
            </button>
            {cartItems.length === 0 ? (
                <h1 className="text-4xl	font-bold text-black text-center">
                    Your cart is empty
                </h1>
            ) : (
                <RestaurantCategory
                    data={cartItems}
                    showItem={true}
                    setShowIndex={() => console.log('trigger')}
                />
            )}
        </div>
    )
}

export default Cart;