export const dynamic = "force-dynamic";

import ShopContent from "@/components/ShopContent";
import clientPromise from "@/lib/mongodb";

export default async function ShopPage() {
    const client = await clientPromise;

    const db = client.db("jewelry_store");

    const products = await db
        .collection("jewelry")
        .find({})
        .toArray();

    const productsForClient = products.map((product) => ({
        id: product._id.toString(),
        title: product.title,
        type: product.type,
        price: product.price,
        material: product.material,
        stone: product.stone,
        description: product.description,
        imageUrl: product.imageUrl ?? product.imageURL,
        inStock: product.inStock,
    }));

    return (
        <main className="container-custom">

            <section className="section mb-6">
                <div>
                    <h2 className="mt-4">
                        Handmade Treasures
                    </h2>

                    <p className="text-lg text-center max-w-2xl mx-auto mt-4">
                        Explore our collection of handcrafted goods made with care,
                        creativity, and attention to detail.
                    </p>

                    <ShopContent products={productsForClient} />
                </div>
            </section>
        </main>
    );
}