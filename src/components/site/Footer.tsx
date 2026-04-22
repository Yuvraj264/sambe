import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-electric">
              <Zap className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-lg">Sambe Electricals</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Engineering reliable power solutions for industries across India since 2003.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-electric text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-electric">About</Link></li>
            <li><Link to="/team" className="hover:text-electric">Team</Link></li>
            <li><Link to="/industries" className="hover:text-electric">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-electric">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-electric text-sm uppercase tracking-wider">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/products" className="hover:text-electric">Voltage Regulators</Link></li>
            <li><Link to="/products" className="hover:text-electric">MCBs</Link></li>
            <li><Link to="/products" className="hover:text-electric">Control Panels</Link></li>
            <li><Link to="/products" className="hover:text-electric">Switchgear</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-electric text-sm uppercase tracking-wider">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-electric" /> Industrial Area Phase II, Pune, MH</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-electric" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-electric" /> info@sambeelectricals.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-primary-foreground/60 flex justify-between">
          <span>© {new Date().getFullYear()} Sambe Electricals. All rights reserved.</span>
          <span>ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  );
}
