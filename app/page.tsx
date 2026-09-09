import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <div>
      <h1>Mein Stein</h1>

      <p>
        Discover unique handmade jewelry and accessories.
      </p>
      
      <button>Catalogue</button>
      </div>
      <div>
      <h1>Popular Categories</h1>


      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Bracelets</h2>
        <p>Handmade silver bracelet</p>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Earrings</h2>
        <p>Handmade agate earrings</p>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Chokers</h2>
        <p>Handmade lavastone choker</p>
      </div>
      </div>
      <div>   
      <h1>About Us</h1>
      <p>
        Mein Stein is a small business dedicated to creating unique, handmade jewelry and accessories. Our pieces are crafted with care and attention to detail, ensuring that each item is one-of-a-kind.
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
             
        
          
    