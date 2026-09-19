export const dynamic = "force-dynamic";

import { sql } from "@/app/lib/db";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ShopContent from "@/components/ShopContent";

export default async function ShopPage() {  
    const products = await sql`
        SELECT
            products.*,
            ROUND(AVG(reviews.rating), 1) AS rating
            FROM products
            LEFT JOIN reviews
                ON products.id = reviews.product_id
                GROUP BY products.id
                ORDER BY products.title
            `;

    const reviews = await sql`
        SELECT *
            FROM reviews
            ORDER BY id DESC
            `;

    const productsWithReviews = products.map((product) => {
        const latestReview = reviews.find(
        (review) => review.product_id === product.id
        );

    return {
    ...product,
        latest_review: latestReview?.review || null,
        latest_reviewer: latestReview?.name || null,
        };
    });
    return (
        <main className="container-custom">
        <Navbar />

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            {/* LEFT SIDE */}
            <div>
                <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
                    Unique Goods, <br /> Made with Love
                </h2>

                <p className="text-lg mb-8 max-w-md ">
                    Discover exclusive handmade products created by talented artisans.
                    Every item is crafted with care and reflects the creativity,
                    skill, and passion of its maker.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button><a href="/artisans">Our Artisans</a></button>
                    <button><a href="/seller-form">Become a Seller</a></button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-image">
                <Image
                    src="/images/about3.jpg"
                    alt="Handcrafted jar"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />

            </div>
        </section>
        {/* PRODUCTS Section */}
        <section className="section">
            <div className="section-header">
                <h3 className="section-title">
                    Handmade Treasures
                </h3>
        
                <p className="section-description">
                    Explore our collection of handcrafted goods made with care, 
                    creativity, and attention to detail. Every purchase directly 
                    supports independent artisans.
                </p>
        
                <ShopContent products={productsWithReviews as any} />
                        
            </div>
                
        </section>                       

        {/* FOOTER */}
        <Footer />
    </main>
    );
}