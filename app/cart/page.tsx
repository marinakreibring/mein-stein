import CartContent from "@/components/CartContent";

export default function CartPage() {
    return (
        <main className="container-custom">
            <section className="section">
                <h1>Your Cart</h1>

                <CartContent />
            </section>
        </main>
    );
}