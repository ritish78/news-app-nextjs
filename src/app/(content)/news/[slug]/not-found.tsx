import Link from "next/link";

export default function NewsNotFoundPage() {
    return (
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! The news that you searched for is not found!</h2>
            <p className="text-gray-300">Please check the URL or please navigate back to the <Link href="/news">homepage!</Link></p>
        </main>

    )
}