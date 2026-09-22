import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main >
            <div className="hero">
                <Image className="heroimg" src="/images/hero.png" alt="Hero Image" fill />
                <div className="hero-content">
                    <button>Catalogue</button>
                </div>
            </div> 
            <h1 className="mt-12">Popular Categories</h1>
            <div className="flex flex-row justify-around my-12 text-center">
                <Link href="/catalog/bracelets" className="group">
                    <div className="category">
                        <Image
                            src="/images/bracelets.jpg"
                            alt="Bracelets"
                            fill
                            className="category-card"
                        />
                    </div>
                    <h3 className="mt-2">Bracelets</h3>
                </Link>

                <Link href="/catalog/earrings" className="group">
                    <div className="category">
                        <Image
                            src="/images/earrings.jpg"
                            alt="Earrings"
                            fill
                            className="category-card"
                        />
                    </div>
                    <h3 className="mt-2">Earrings</h3>
                </Link>

                <Link href="/catalog/rings" className="group">
                    <div className="category">
                        <Image
                            src="/images/rings.jpg"
                            alt="Rings"
                            fill
                            className="category-card"
                        />
                    </div>
                    <h3 className="mt-2">Rings</h3>
                </Link>
            </div>

            <section className="relative mt-24 min-h-[500px] overflow-hidden">
                <img src="/images/stones.png" alt="background stones"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                    <div className="relative flex min-h-[500px] items-center justify-center px-6 py-16">
                        <div className="colored max-w-xl p-10 text-center shadow-xl md:p-14">
                
                            <h2 className="mt-3 italic">
                                More Than Just Jewelry
                            </h2>

                            <p className="mt-6 leading-8 italic">
                                Mein Stein is a platform for sharing one-of-a-kind,
                                handmade creations of natural stones.
                                <br /><br />
                                We believe in personal service and genuine connections
                                with the people who choose Mein Stein.
                            </p>
                        </div>
                    </div>
            </section>

            <a
            className="flex h-12 w-full items-center justify-center mt-4 gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >           
            Deploy Now
            </a>

        </main>
    );
}
             
        
          
    