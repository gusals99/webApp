export default function About() {
  const careers = [
    { company: '유엔아이 컴퍼니', period: '2015.05 ~ 현재', isCurrent: true },
    { company: '엠제이 컴퍼니', period: '2014.10 ~ 2015.04' },
    { company: '유엔아이 컴퍼니', period: '2013.10 ~ 2014.09' },
    { company: '유엔아이(U&I)', period: '2013.03 ~ 2013.10' },
    { company: '시엔(SIEN)', period: '2012.07 ~ 2013.03' },
    { company: '에스엔디컨설팅', period: '2012.02 ~ 2012.06' },
    { company: 'J&B 컴퍼니', period: '2011.10 ~ 2011.12' },
  ];

  return (
    <section id="about" className="py-20 md:py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-none dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                기본 정보
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="bg-blue-50 dark:bg-transparent p-2 dark:p-0 rounded-full">👤</span>
                  송현민
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-blue-50 dark:bg-transparent p-2 dark:p-0 rounded-full">📅</span>
                  1984.03.21
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-blue-50 dark:bg-transparent p-2 dark:p-0 rounded-full">📧</span>
                  sutekitane@naver.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-blue-50 dark:bg-transparent p-2 dark:p-0 rounded-full">🏠</span>
                  경기도 안산시 상록구 사동
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-none dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                저는 이런 개발자입니다
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                사용자 경험을 중요시하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
                새로운 기술을 배우는 것을 좋아하며, 팀과의 협업을 통해 더 나은 결과물을
                만들어내는 것을 즐깁니다.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-none dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                경력 사항
              </h3>
              <div className="space-y-4">
                {careers.map((career, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      career.isCurrent
                        ? 'bg-blue-50 border border-blue-100 dark:border-none dark:bg-blue-900'
                        : 'bg-gray-50 border border-gray-100 dark:border-none dark:bg-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-gray-800 dark:text-white">
                      {career.company}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {career.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 