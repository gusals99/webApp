import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function NewsDetail() {
  const router = useRouter()
  const { id } = router.query

  // 여기에 실제 뉴스 데이터를 가져오는 로직을 추가해야 합니다.
  const newsData = {
    1: { title: '오늘의 주요 뉴스', content: '오늘의 주요 뉴스 내용입니다...' },
    2: { title: '경제 뉴스', content: '주요 경제 이슈와 시장 동향입니다...' },
    3: { title: '연예 뉴스', content: '최신 연예계 소식과 가십입니다...' },
  }

  const news = newsData[id]

  if (!news) {
    return <div>뉴스를 찾을 수 없습니다.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{news.title} - 카드뉴스 앱</title>
        <meta name="description" content={news.content.substring(0, 100)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        <Link href="/">
          <a className="text-primary hover:underline">&larr; 홈으로 돌아가기</a>
        </Link>
      </header>

      <main>
        <article className="card">
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <p className="text-gray-700">{news.content}</p>
        </article>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2023 카드뉴스 앱. All rights reserved.</p>
      </footer>
    </div>
  )
}