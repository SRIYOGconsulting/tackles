export default function ContactForm() {
    return (
      <form className="grid gap-4 max-w-lg">
        <input className="border rounded-md px-3 py-2" placeholder="Name" />
        <input className="border rounded-md px-3 py-2" placeholder="Email" type="email" />
        <input className="border rounded-md px-3 py-2" placeholder="City (Dubai/Sydney/SF)" />
        <textarea className="border rounded-md px-3 py-2" rows="4" placeholder="Service needed & message" />
        <button className="bg-emerald-700 text-white px-4 py-2 rounded-md w-fit">Send</button>
      </form>
    );
  }
  