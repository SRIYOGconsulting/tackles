export default function Footer() {
    return (
      <footer className="bg-green-900 text-white text-center py-6 mt-10">
        <p className="text-lg font-semibold">Tackles.pro</p>
        <p className="text-sm mt-2">Your trusted handyman service — Dubai | Sydney | San Francisco</p>
        <p className="text-xs mt-3 text-gray-300">
          © {new Date().getFullYear()} Tackles.pro. All rights reserved.
        </p>
      </footer>
    );
  }
  