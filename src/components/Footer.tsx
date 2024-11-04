import React from 'react';
import { Github, Linkedin, Twitter, CircuitBoard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <CircuitBoard className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold gradient-text">テックコープ</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              革新的なテクノロジーソリューションで、ビジネスとコミュニティの発展を支援。
              デジタル変革を通じて、持続可能な未来を創造します。
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">サービス</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">教育プラットフォーム</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">アプリケーション開発</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">ゲーム開発</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">デジタル変革支援</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">お問い合わせ</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">contact@techcorp.jp</li>
              <li className="text-gray-400">03-1234-5678</li>
              <li className="text-gray-400">〒100-0004</li>
              <li className="text-gray-400">東京都千代田区大手町1-1-1</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} テックコープ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;