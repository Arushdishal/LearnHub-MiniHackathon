import {
  Mail,
  Globe,
  Phone,
  MapPin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">LearnHub</h2>
          <p className="mt-2 text-gray-300">
            Learn skills from industry experts.
          </p>
        </div>

        <div className="text-center">
          <p>Email</p>
          <p className="text-gray-300">support@learnhub.com</p>
        </div>

        <div className="flex items-center gap-5">
            <Mail className="h-5 w-5 cursor-pointer transition hover:text-blue-400" />
            <Phone className="h-5 w-5 cursor-pointer transition hover:text-blue-400" />
            <Globe className="h-5 w-5 cursor-pointer transition hover:text-blue-400" />
            <MapPin className="h-5 w-5 cursor-pointer transition hover:text-blue-400" />
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm text-gray-400">
        © 2026 LearnHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;