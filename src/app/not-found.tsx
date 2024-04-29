import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! The resource that you are looking for is not found!</h2>
            <p className="text-gray-300">Please check the URL or please navigate back to the <Link href="/news" className="text-blue-500 hover:underline">homepage!</Link></p>
        </main>

    )
}