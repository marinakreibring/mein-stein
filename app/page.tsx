import Image from "next/image";

export default function Home() {
    return (
        <main >
            <div className="hero">
                <Image className="heroimg" src="/images/hero.png" alt="Hero Image" fill />
                <div className="hero-content">
                    <button>Catalogue</button>
                </div>
            </div> 
            <h1 className="mt-8">Popular Categories</h1>
            <div className="flex flex-row justify-around mt-4 text-center">                
                <div>
                    <div className="category">
                        <Image src="/images/bracelets.jpg" alt="Bracelet" fill className="category-card"/>
                    </div>
                    <h3 mt-2>Bracelets</h3>
                </div>
                <div>
                    <div className="category">
                        <Image src="/images/earrings.jpg" alt="Earrings" fill className="category-card" />
                    </div>
                    <h3 mt-2>Earrings</h3>
                </div>
                <div>
                    <div className="category">
                        <Image src="/images/rings.jpg" alt="Rings" fill className="category-card"/>
                    </div>
                    <h3 mt-2>Rings</h3>
                </div>
            </div>

            <div>   
                <h2 className="mt-12">More Than Just Jewelry</h2>
                <p className="my-4 text-center">
                    Mein Stein is a platform for sharing one-of-a-kind, handmade creations of natural stones. <br />
                    We believe in personal service and genuine connections with the people who choose Mein Stein.
                </p>
            </div>

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
             
        
          
    