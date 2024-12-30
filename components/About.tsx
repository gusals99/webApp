import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              저는 이런 개발자입니다
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              사용자 경험을 중요시하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
              새로운 기술을 배우는 것을 좋아하며, 팀과의 협업을 통해 더 나은 결과물을
              만들어내는 것을 즐깁니다.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              교육 및 경력
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 학교/전공</li>
              <li>• 관련 교육 이수 내역</li>
              <li>• 경력 사항</li>
              <li>• 주요 프로젝트 경험</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 