"use client";

import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    Icon: FaPhoneAlt,
    label: "Phone",
    value: "+855 93 457 773",
  },
  {
    Icon: FaTelegramPlane,
    label: "Telegram",
    value: "093 457 773",
  },
  {
    Icon: MdEmail,
    label: "Email",
    value: "info@TicketGateway.cambo",
  },
];

const products = ["RESTful API", "Customized API", "New Project", "Maintenance"];

const developers = [
  "API Integration",
  "Integration Guideline",
  "Bug Fixing"
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebook,
    color:
      "text-blue-600 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: FaYoutube,
    color:
      "text-red-600 hover:text-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedin,
    color:
      "text-blue-700 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700",
  },
];

const supports = ["Help Center", "Plan Your Event", "Our Solutions"];

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <nav
      aria-labelledby={`footer-${title.toLowerCase()}`}
      className="space-y-4"
    >
      <h3
        id={`footer-${title.toLowerCase()}`}
        className="mb-4 font-semibold text-lg text-gray-900 dark:text-white"
      >
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:underline cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <section aria-labelledby="footer-contact" className="space-y-6">
            <h2
              id="footer-contact"
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              Contact Us
            </h2>
            <address className="not-italic space-y-4">
              {contactDetails.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon
                    className="text-blue-600 w-6 h-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{value}</span>
                </div>
              ))}
            </address>
          </section>

          {/* Products */}
          <FooterList title="Products" items={products} />

          {/* Developers */}
          <FooterList title="Developers" items={developers} />

          {/* Social + Network */}
          <section aria-labelledby="footer-social" className="space-y-6">
            <h2
              id="footer-social"
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              Social Media
            </h2>
            <nav aria-label="Social media links">
              <div className="flex space-x-6 text-3xl">
                {socialLinks.map(({ href, label, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </nav>
          </section>
        </div>

        <hr className="my-12 border-gray-300 dark:border-gray-700" />

        {/* Supports + Legal */}
        <div className="md:flex md:justify-between md:items-center space-y-8 md:space-y-0 text-sm">
          <FooterList title="Supports" items={supports} />

          <div className="space-y-2 text-center md:text-left">
            <p>© Live By Ticket Gateway Platform. All rights reserved.</p>

            <nav className="flex justify-center md:justify-start gap-6 mt-4">
              <a
                href="#"
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Privacy and Policy
              </a>
              <a
                href="#"
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Terms
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Follow us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
