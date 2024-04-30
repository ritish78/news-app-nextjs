import NewsList from "@/components/NewsList"
import { newsList } from "../../utils/seed-news"

export default function NewsListPage() {
    return (
        <main>
            <h2>Latest News:</h2>
            <div>
                <NewsList newsList={newsList} />                
            </div>
        </main>
    )
}