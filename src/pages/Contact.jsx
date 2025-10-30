import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-10 bg-green-50 min-h-screen">
        <h1 className="text-4xl font-semibold text-green-800 text-center mb-8">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
