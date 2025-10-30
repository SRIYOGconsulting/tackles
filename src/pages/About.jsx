import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-semibold text-green-800 mb-4">About Tackles.pro</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tackles.pro is your one-stop solution for all home and office repairs.
          Our expert team delivers professional handyman services across Dubai, Sydney, and San Francisco.
        </p>
      </main>
      <Footer />
    </>
  );
}
