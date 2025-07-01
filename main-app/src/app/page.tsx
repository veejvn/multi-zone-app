import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>🏠 Main App (Zone chính)</h1>
      <Link href="/blog" prefetch={false}>
        ➡️ Đi đến Blog Zone
      </Link>
      <Link href="/admin" prefetch={false}>
        ➡️ Đi đến Admin Zone
      </Link>
    </main>
  );
}
