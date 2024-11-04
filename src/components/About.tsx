import React from 'react';
import { Users, Target, Heart, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    value: '100+',
    label: 'クライアント',
  },
  {
    icon: <Target className="w-6 h-6 text-blue-400" />,
    value: '50+',
    label: 'プロジェクト完遂',
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-400" />,
    value: '10+',
    label: '地域貢献活動',
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-400" />,
    value: '5+',
    label: '受賞実績',
  },
];

const About = () => {
  return (
    <div id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text">会社概要</h2>
          <p className="mt-4 text-xl text-gray-300">
            テクノロジーで社会に貢献する
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="tech-card group">
            <div className="tech-glow" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-4">ミッション</h3>
              <p className="text-gray-300 leading-relaxed">
                テクノロジーの力で、より良い社会づくりに貢献することを目指しています。
                個人事業主として培った経験と専門知識を活かし、NPO法人化を通じて
                より広範な社会貢献活動を展開していきます。
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">コミュニティ重視</h4>
                    <p className="mt-2 text-gray-300">
                      地域社会やテクノロジーコミュニティとの強い連携を大切にしています。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded">
                    <Heart className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">社会貢献</h4>
                    <p className="mt-2 text-gray-300">
                      教育支援や地域のデジタル化支援を通じて、社会課題の解決に取り組みます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-card group">
            <div className="tech-glow" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-4">組織概要</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium">組織形態</span>
                  <span>個人事業主（NPO法人化準備中）</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium">設立</span>
                  <span>2020年</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium">所在地</span>
                  <span>東京都千代田区</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium">主な事業内容</span>
                  <span>IT・AI関連サービス提供</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium">従業員数</span>
                  <span>5名（協力スタッフ含む）</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="tech-card group">
              <div className="tech-glow" />
              <div className="relative p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;