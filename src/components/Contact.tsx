import React, { useState } from 'react';
import { Send, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '選択してください',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text">無料相談</h2>
          <p className="mt-4 text-xl text-gray-300">
            お気軽にご相談ください
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="tech-card group">
              <div className="tech-glow" />
              <div className="relative p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        お名前 <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring focus:ring-blue-400/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        メールアドレス <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                      ご興味のあるサービス <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring focus:ring-blue-400/20"
                    >
                      <option disabled>選択してください</option>
                      <option>オンライン教育プラットフォーム</option>
                      <option>アプリケーション開発</option>
                      <option>ゲーム開発</option>
                      <option>デジタルトランスフォーメーション</option>
                      <option>その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      ご相談内容 <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors group"
                    >
                      送信する
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="tech-card group">
              <div className="tech-glow" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">お電話</h3>
                    <p className="mt-1 text-gray-300">03-1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card group">
              <div className="tech-glow" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">メール</h3>
                    <p className="mt-1 text-gray-300">contact@techcorp.jp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card group">
              <div className="tech-glow" />
              <div className="relative p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">営業時間</h3>
                    <p className="mt-1 text-gray-300">平日 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;