"use client";

export default function CartContent() {
    return (
        <div className="grid gap-8 lg:grid-cols-3 mt-12">
      
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
                <div className="content-card p-6 h-fit mx-6 my-6">
                    <p className="text-center text-gray-500">
                         Your cart is empty.
                    </p>
                </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="content-card p-6 h-fit my-6 mx-6">
                <h3 className="text-2xl font-semibold mb-6">
                    Order Summary
                </h3>

                <div className="flex justify-between mb-3">
                    <span>Subtotal</span>
                    <span>€0.00</span>
                </div>

                <div className="flex justify-between border-t pt-4 mt-4 font-semibold text-lg">
                    <span>Total</span>
                    <span>€0.00</span>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    <button>
                        Proceed to Checkout
                    </button>

                    <button>
                        Continue Shopping
                    </button>
                </div>
            </div>

        </div>
    );
}