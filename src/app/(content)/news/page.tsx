import NewsList from "@/components/NewsList"
import { getAllNews } from "@/lib/news-year"

export default function NewsListPage() {
    const newsList = getAllNews();
    return (
        <main>
            <h2>Latest News:</h2>
            <div>
                <NewsList newsList={newsList} />                
            </div>
        </main>
    )
}