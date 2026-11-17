import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shrink-0 bg-[#14293E] text-white">
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">
            HomePro <span className="text-[#1E6E73]">Smart Living</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-7 text-gray-300">
            Making everyday living easier with appliances designed
            for your modern home.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-semibold">Customer Support</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="transition hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-semibold">Follow Us</h3>
          <p className="text-sm leading-7 text-gray-300">
            Stay connected with HomePro for updates and more.
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
                <FaInstagramSquare size={24} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
              <FaFacebookSquare size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/15">
        <p className="px-5 py-5 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} HomePro Smart Living. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;