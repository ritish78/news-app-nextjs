import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-6xl font-bold mb-4">News App</h1>
            <p className="text-xl">Your one stop destination for the latest news.</p>
            <Image src="/hero.svg" alt="Hero image depicting two people reading newspaper." width={400} height={700} />
            <Link href="/news" className="cta-button">
                Read News
            </Link>
        </div>
    </main>
  );
}
