import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>🏠 Main App (Zone chính)</h1>
      <Link href="https://multi-zone-blog-app.vercel.app" prefetch={false}>
        ➡️ Đi đến Blog Zone
      </Link>
    </main>
  );
}
