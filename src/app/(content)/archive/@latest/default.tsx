import NewsList from "@/components/NewsList";
import { NewsItem } from "@/utils/seed-news";

export default async function LatestNewsPage() {
    const response = await fetch("http://localhost:5000/api/news/latest");

    if (!response.ok) {
        throw new Error("Failed to fetch latest news!");
    }

    const latestNews: NewsItem[] = await response.json();

    return (
        <>
            <h1>Latest News:</h1>
            <NewsList newsList={latestNews} />
        </>
    )
}