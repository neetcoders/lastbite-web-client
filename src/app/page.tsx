import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex justify-center items-center h-screen px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-success-main">Last<span className="text-typo-main">Bite</span></p>
          <p className="text-h4 md:text-h3 font-bold text-warning-main text-center">Save Food, Save Money!</p>
        </div>
      </section>

      <section id="about-us" className="py-12 px-12 md:px-24 bg-success-main">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-warning-main">About Us</p>
          <p className="mt-4 font-semibold text-title text-center text-typo-white">
            LastBite as a solution to facilitate the sale and purchase of products that are approaching their expiration date in an efficient and sustainable way. By leveraging technology and digital platforms, LastBite can connect supermarkets with potential consumers interested in purchasing these products at discounted prices, while also helping reduce food waste and supporting environmental sustainability efforts.
          </p>
        </div>
      </section>

      <section id="order" className="py-12">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-success-main">Order</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
