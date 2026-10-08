"use client";

import OrderSummary from "@/components/OrderSummury";

export default function CheckoutPage() {

    return (
        <main>
            <section className="section">

                <h2>
                    Thank you for your order!
                </h2>
                <p className="section-description">
                    Your order is ready for processing. <br />
                </p>

                <OrderSummary />

                <p className="section-description">
                    We will contact you shortly with the details of your order and shipping information.
                </p>
            </section>
        </main>
    );
}