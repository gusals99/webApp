import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>카드뉴스 앱</title>
        <meta name="description" content="최신 카드뉴스를 확인하세요" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">카드뉴스 앱</h1>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/news/1">
            <div className="card cursor-pointer hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">오늘의 주요 뉴스</h2>
              <p className="text-gray-600">최신 이슈와 트렌드를 한눈에 확인하세요.</p>
            </div>
          </Link>
          <Link href="/news/2">
            <div className="card cursor-pointer hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">경제 뉴스</h2>
              <p className="text-gray-600">주요 경제 이슈와 시장 동향을 알아보세요.</p>
            </div>
          </Link>
          <Link href="/news/3">
            <div className="card cursor-pointer hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">연예 뉴스</h2>
              <p className="text-gray-600">최신 연예계 소식과 가십을 확인하세요.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2023 카드뉴스 앱. All rights reserved.</p>
      </footer>
    </div>
  )
}
