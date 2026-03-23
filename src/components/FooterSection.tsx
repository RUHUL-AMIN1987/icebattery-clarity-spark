import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="bg-ice-900 text-ice-200 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
            Ice<span className="text-primary">Battery</span>
            <span className="text-xs align-super">®</span>
          </h3>
          <p className="text-sm leading-relaxed opacity-80">
            Revolutionizing cold chain logistics with sustainable, reusable temperature-control technology since 2007.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4 tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["About Us", "Products", "Logistics", "Digital (DX)", "Medical", "Inquiry"].map((link) => (
              <li key={link}>
                <a
                  href={`https://icebattery.jp/${link.toLowerCase().replace(/[() ]/g, "-")}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-4 tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Tokyo, Japan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+81-3-6206-3101</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:info@ithrue.com" className="hover:text-primary-foreground transition-colors">
                info@ithrue.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-ice-700/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>© {new Date().getFullYear()} IceBattery Co., Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://x.com/IThruEnergy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">X / Twitter</a>
          <a href="https://www.linkedin.com/company/icebattery/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          <a href="https://www.youtube.com/@Icebattery" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
