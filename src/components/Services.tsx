import React from 'react';
import { Monitor, Gamepad2, Building2, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    title: 'オンライン教育プラットフォーム',
    description: 'AIを活用した個別最適化された学習ソリューションで、教育の未来を創造します。',
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    title: 'アプリケーション開発',
    description: '最新技術を駆使した、スケーラブルで革新的なアプリケーションを開発します。',
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
    title: 'ゲーム開発',
    description: '没入感のある体験を提供する、最先端技術を活用したゲーム開発を行います。',
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-400" />,
    title: 'デジタルトランスフォーメーション',
    description: '地域社会や行政機関のデジタル化を支援し、より良いサービス提供を実現します。',
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text">サービス</h2>
          <p className="mt-4 text-xl text-gray-300">
            包括的なデジタルソリューション
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group tech-card"
            >
              <div className="tech-glow" />
              <div className="relative p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="tech-card">
            <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 lg:px-16">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  デジタル変革の第一歩を踏み出しましょう
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-gray-300">
                  お客様のビジョンを実現するため、私たちの専門家チームが全力でサポートいたします。
                </p>
                <div className="mt-10">
                  <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    お問い合わせ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;