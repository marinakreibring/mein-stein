
import Image from "next/image";

export default function AboutPage() {    
    return (
        <main className="container-custom">      

        <section>
            <div>
                <h1 className="mt-8">
                    Crafted with Passion. Shared with Love.
                </h1>
                <div className="mt-4 flex w-full max-w-6xl mx-auto flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:items-stretch">
                    <div className="w-[clamp(220px,30vw,700px)] sm:self-stretch">
                        <Image
                            src="/images/image.webp"
                            alt="Handmade"
                            width={700}
                            height={800}
                            className="h-full w-full rounded-lg object-cover shadow-[0_5px_10px_var(--foreground)]"
                        />
                    </div>

                    <p className="mx-4 flex-1 text-center sm:text-left">
                        Mein Stein is a small business of the Kreibring family. We create unique, handmade jewelry
                        and accessories inspired by the natural beauty of stones.
                        <br /><br />
                        Every piece is thoughtfully crafted by hand, with care and
                        attention to detail.
                        No two natural stones are exactly alike, making each piece as
                        individual as the person who wears it.
                        <br /><br />
                        We believe jewelry should be more than just an accessory —
                        it should reflect your personality, tell a story, and become
                        something you truly cherish.
                    </p>
                </div>
                <div className="mt-12 flex flex-row items-center justify-center gap-4">
                    <button><a href="/shop">Shop Now</a></button>
                    <button><a href="/contact-form">Contact Us</a></button>
                </div>
            </div>
            
        </section>

        <section className="relative mt-24 min-h-[500px] overflow-hidden">
                <img src="/images/stones.png" alt="background stones"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                    <div className="relative flex min-h-[500px] items-center justify-center px-6 py-16">
                        <div className="colored max-w-xl p-10 text-center shadow-xl md:p-14">
                
                            <h2 className="mt-3 italic">
                                Made with Meaning
                            </h2>

                            <p className="mt-6 leading-8 italic">
                                At Mein Stein, we believe that choosing jewelry can be a more personal and 
                                thoughtful experience. That’s why we focus on natural materials, 
                                careful craftsmanship, and a personal touch in everything we create.
                                <br /><br />
                                From selecting each stone to preparing your order, we pay attention 
                                to the little details that make a difference.
                            </p>
                        </div>
                    </div>
            </section>

            <section className="my-12">    
                <h2>
                    The Beauty in Every Detail
                </h2>            
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 text-center mt-4 mb-6 align-items-center justify-items-center">
                    {/* CARD 1 */}
                    <div className="card">
                        <div className="text-5xl mb-4">
                            💎
                        </div>
                        <h3>
                            Natural Stones
                        </h3>

                        <p className="mx-2 my-2">
                            Carefully selected natural stones, each with its own unique beauty and character.
                        </p>
                    </div>
                    {/* CARD 2 */}
                    <div className="card">
                        <div className="text-5xl mb-4">
                            🤲🏻
                        </div>
                        <h3>
                            Handmade
                        </h3>

                        <p className="mx-2 my-2">
                            Made by hand with care, attention to detail, and a passion for timeless design.
                        </p>
                    </div>
                    {/* CARD 3 */}
                    <div className="card">
                        <div className="text-5xl mb-4">
                            🎁
                        </div>
                        <h3>
                            Gift Packaging
                        </h3>
    
                    <p className="mx-2 my-2">
                        Every order is beautifully packaged to make a gift special for your loved ones.
                    </p>
                </div>
                {/* CARD 4 */}
                    <div className="card">
                        <div className="text-5xl mb-4">
                            💖
                        </div>
                        <h3>
                            Individual Approach
                        </h3>
    
                        <p className="mx-2 my-2">
                            Every piece is created with you in mind, with a personal touch and attention to your wishes.
                        </p>
                    </div>
            </div>
        
        </section>       
        
    </main>
    );
}