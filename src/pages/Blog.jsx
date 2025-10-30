import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-semibold text-green-800 mb-4">Blog</h1>
        <p className="text-gray-600">Coming soon...</p>
      </main>
      <Footer />
    </>
  );
}
