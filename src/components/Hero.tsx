import React from 'react';
import { ChevronRight, Code2, Sparkles } from 'lucide-react';

const partners = [
  { name: 'Unity', url: 'https://images.unsplash.com/photo/unity-logo.png', alt: 'Unity Logo' },
  { name: 'Unreal Engine', url: 'https://images.unsplash.com/photo/unreal-logo.png', alt: 'Unreal Engine Logo' },
  { name: 'Blender', url: 'https://images.unsplash.com/photo/blender-logo.png', alt: 'Blender Logo' },
  { name: 'Adobe', url: 'https://images.unsplash.com/photo/adobe-logo.png', alt: 'Adobe Logo' },
  { name: 'Stable Diffusion', url: 'https://images.unsplash.com/photo/sd-logo.png', alt: 'Stable Diffusion Logo' },
  { name: 'ComfyUI', url: 'https://images.unsplash.com/photo/comfyui-logo.png', alt: 'ComfyUI Logo' },
  { name: 'Midjourney', url: 'https://images.unsplash.com/photo/midjourney-logo.png', alt: 'Midjourney Logo' },
  { name: 'GitHub', url: 'https://images.unsplash.com/photo/github-logo.png', alt: 'GitHub Logo' },
  { name: 'OpenAI', url: 'https://images.unsplash.com/photo/openai-logo.png', alt: 'OpenAI Logo' },
  { name: 'Anthropic', url: 'https://images.unsplash.com/photo/anthropic-logo.png', alt: 'Anthropic Logo' },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),_transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-medium">革新的なテクノロジーソリューション</span>
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-white">アイデアを</span>
            <span className="block mt-2 gradient-text">
              デジタルの現実へ
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            最先端のテクノロジーと革新的なソリューションで、
            ビジネスとコミュニティのデジタル変革をサポートします。
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center group">
              無料相談する
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400/10 transition-colors">
              詳しく見る
            </button>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center">
            <span className="text-sm text-gray-400">
              使用技術・ツール
            </span>
          </div>
          <div className="mt-10 relative">
            <div className="overflow-hidden">
              <div className="flex space-x-8 animate-scroll">
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 h-12 w-32 tech-card group flex items-center justify-center"
                  >
                    <div className="tech-glow" />
                    <div className="relative px-4 py-2">
                      <span className="text-gray-300 text-sm font-medium">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;