import NewsList from "@/components/NewsList"

export default async function NewsListPage() {
    const response = await fetch("http://localhost:5000/news");

    if (!response.ok) {
        throw new Error("Failed to fetch news!");
    }

    const news = await response.json();

    return (
        <main>
            <h2>Latest News:</h2>
            <div>
                <NewsList newsList={news} />
            </div>
        </main>
    )
}