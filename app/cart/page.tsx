import CartContent from "@/components/CartContent";

export default function CartPage() {
    return (
        <main className="container-custom">
            <section className="section">
                <h2>Your Cart</h2>

                <p className="text-lg text-center max-w-2xl mx-auto mt-4">
                    Your selected treasures
                </p>

                <CartContent />
            </section>
        </main>
    );
}