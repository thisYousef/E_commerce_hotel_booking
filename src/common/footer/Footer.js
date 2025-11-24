import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define navigation sections
  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Status", href: "#status" },
        { name: "Support Center", href: "#support" },
        { name: "Blog", href: "#blog" },
      ],
    },
  ];
  // Define social links
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thisyousef",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/thisYousef", label: "GitHub" },
  ];

  // Define contact info
  const contactInfo = [
    { icon: Mail, text: "yousef7shaban@gmail.com" },
    { icon: Phone, text: "+(20) 1207851832" },
    { icon: MapPin, text: "Giza, Egypt" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* Logo/Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hotel
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Building the future of web applications, one component at a time.
            </p>
          </div>

          {/* Navigation Links */}
          {sections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-400 text-sm"
                  >
                    <Icon className="w-4 h-4 text-indigo-400" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Footer Bottom (Copyright and Social) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 sm:order-1 mt-6 sm:mt-0">
            &copy; {currentYear} Yousef shaban. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 order-1 sm:order-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition duration-150 p-2 rounded-full hover:bg-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
