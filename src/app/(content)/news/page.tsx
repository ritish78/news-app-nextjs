import NewsList from "@/components/NewsList"
import { NewsItem } from "@/utils/seed-news";

export default async function NewsListPage() {
    const response = await fetch("http://localhost:5000/api/news");

    if (!response.ok) {
        throw new Error("Failed to fetch news!");
    }

    const news: NewsItem[] = await response.json();

    return (
        <main>
            <h2>Latest News:</h2>
            <div>
                <NewsList newsList={news} />
            </div>
        </main>
    )
}