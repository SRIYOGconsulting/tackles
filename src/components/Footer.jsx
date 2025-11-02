export default function Footer() {
    return (
      <footer className="border-t mt-12">
        <div className="container py-8 text-sm text-gray-600">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-emerald-800">Tackles.pro</h3>
              <p>Your trusted handyman service in Dubai, Sydney & San Francisco.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Browse More</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="/projects">Our Work</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Services</h4>
              <ul className="mt-2 space-y-1">
                <li>Repairs & Maintenance</li>
                <li>Home Improvements</li>
                <li>Outdoor Work</li>
              </ul>
            </div>
          </div>
          <p className="mt-6">© {new Date().getFullYear()} Tackles.pro</p>
        </div>
      </footer>
    );
  }
  