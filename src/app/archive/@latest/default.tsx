import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news-year"
import { NewsItem } from "@/utils/seed-news";

export default function LatestNewsPage() {
    const latestNews: NewsItem[] = getLatestNews();

    return (
        <>
            <h1>Latest New Page</h1>
            <NewsList newsList={latestNews} />
        </>
    )
}