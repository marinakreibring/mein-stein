"use client";

import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
    const {
        items,
        totalPrice,
        isInitialized,
    } = useCart();

    const shipping =
        items.length === 0
            ? 0
            : totalPrice >= 50
                ? 0
                : 6.90;

    const finalTotal = totalPrice + shipping;

    if (!isInitialized) {
        return (
            <div className="text-center mt-12 text-gray-500">
                Loading cart...
            </div>
        );
    }

    return (
        <div className="oder-summary-container">
            <div className="content-card p-6 mx-2 sm:mx-6 my-6">

                <h3 className="text-2xl font-semibold mb-6">
                    Order Summary
                </h3>

                {items.length === 0 ? (
                    <p className="text-center text-gray-500 py-6">
                        Your cart is empty.
                    </p>
                ) : (
                    <>
                        {/* PRODUCTS */}
                        <div className="space-y-3 mb-6">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-start gap-4"
                                >
                                    <div className="min-w-0">
                                        <span className="text-gray-800">
                                            {item.title}
                                        </span>

                                        <span className="text-gray-500 ml-2">
                                            × {item.quantity}
                                        </span>
                                    </div>

                                    <span className="shrink-0">
                                        €{(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* DIVIDER */}
                        <div className="border-t pt-4">

                            {/* SUBTOTAL */}
                            <div className="flex justify-between mb-3">
                                <span>Subtotal</span>
                                <span>€{totalPrice.toFixed(2)}</span>
                            </div>

                            {/* SHIPPING */}
                            <div className="flex justify-between mb-3">
                                <span>Shipping</span>

                                <span>
                                    {shipping === 0
                                        ? "Free"
                                        : `€${shipping.toFixed(2)}`}
                                </span>
                            </div>

                            {/* TOTAL */}
                            <div className="flex justify-between border-t pt-4 mt-4 font-semibold text-lg">
                                <span>Total</span>
                                <span>€{finalTotal.toFixed(2)}</span>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}