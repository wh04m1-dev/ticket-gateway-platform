export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Networks</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Subscribe
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Generate API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Documents</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>apisupport@info.dev</li>
            <li>+855 23 230 681</li>
            <li>Phnom Penh Thmey Commune, Sen Sok</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                API Integration
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Integration Guideline
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs space-y-4 md:space-y-0">
        <div className="space-y-1">
          <p>Copyright © - 2025</p>
        </div>
        <div className="space-y-1 text-right">
          <p>Terms and Conditions | Privacy & Policy | Legal Notice</p>
        </div>
      </div>
    </footer>
  );
}
