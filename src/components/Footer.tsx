import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/akhilamaresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/akhilkrishnaamaresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:akhilamaresh143@gmail.com"
              className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Akhil Krishna Amaresh</span>
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear} Akhil Krishna Amaresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
