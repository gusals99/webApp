
export default function Hero() {
  return (
    <section className="min-h-screen pt-20 md:pt-16 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="text-gray-900 dark:text-white">안녕하세요</span>
          <span className="inline-block animate-wave ml-4">👋</span>
        </h1>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-500">웹</span>{' '}
            <span className="text-gray-900 dark:text-white">개발자</span>{' '}
            <span className="text-blue-500">입니다</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            15년간의 SI 경험을 가진 프론트엔드 개발자입니다.
          </p>
        </div>
      </div>
    </section>
  );
} 