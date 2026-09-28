"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link"; 

export default function CartContent() {
    const { items, removeFromCart, updateQuantity, totalPrice, isInitialized } = useCart();

    const shipping = items.length === 0 ? 0 : (totalPrice >= 50 ? 0 : 5.00);
    const finalTotal = totalPrice + shipping;

    // Пока корзина инициализируется из localStorage, можно показать заглушку
    if (!isInitialized) {
        return <div className="text-center mt-12 text-gray-500">Loading cart...</div>;
    }

    return (
        <div className="grid gap-8 lg:grid-cols-3 mt-12">
            
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
                {items.length === 0 ? (
                    <div className="content-card p-6 h-fit mx-6 my-6">
                        <p className="text-center text-gray-500">
                            Your cart is empty.
                        </p>
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.id} className="content-card p-6 mx-6 my-6 flex items-center justify-between gap-4">
                            {/* Информация о товаре */}
                            <div className="flex items-center gap-4">
                                {item.image && (
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                )}
                                <div>
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-gray-500">€{item.price.toFixed(2)}</p>
                                </div>
                            </div>

                            {/* Управление количеством и удаление */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center border rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-4 py-1 bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-1">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        +
                                    </button>
                                </div>

                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 text-sm ml-2"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ORDER SUMMARY */}
            <div className="content-card p-6 h-fit my-6 mx-6">
                <h3 className="text-2xl font-semibold mb-6">
                    Order Summary
                </h3>

                <div className="flex justify-between mb-3">
                    <span>Subtotal</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-3">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between border-t pt-4 mt-4 font-semibold text-lg">
                    <span>Total</span>
                    <span>€{finalTotal.toFixed(2)}</span>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    <button 
                        disabled={items.length === 0}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Proceed to Checkout
                    </button>

                    <button>
                       <Link 
                        href="/shop"
                        >
                            Continue Shopping
                        </Link> 
                    </button>

                    
                </div>
            </div>

        </div>
    );
}