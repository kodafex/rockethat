import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Rocket Hat Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="prose">
        <h1>
          Welcome to Rocket Hat Labs
        </h1>
      </main>

      <footer>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
