import NewsList from "@/components/NewsList";
import Link from "next/link";

interface Params {
    filter: string[];
}

interface YearNewsProps {
    params: Params;
}

export default async function YearNewsPage({ params }: YearNewsProps) {
    const filter = params.filter;
    const filteredYear = filter?.[0];
    const filteredMonth = filter?.[1];

    let newsList;
    const linksResponse = await fetch("http://localhost:5000/api/news/year-list");
    let links: string[] = await linksResponse.json();


    if (filteredYear && filteredMonth) {
        const newsListResponse = await fetch(`http://localhost:5000/api/news/${filteredYear}/${filteredMonth}`);
        newsList = await newsListResponse.json();

        console.log("NewsList", newsList);
        
        links = [];
    } else if (filteredYear && !filteredMonth) {
        const newsListResponse = await fetch(`http://localhost:5000/api/news/${filteredYear}`);
        newsList = await newsListResponse.json();

        const newsMonthListResponse = await fetch(`http://localhost:5000/api/news/year-month-list/${filteredYear}`);
        links = await newsMonthListResponse.json();
    }

    let newsContent = <p>No news found for the selected period!</p>

    if (newsList && newsList.length > 0) {
        newsContent = <NewsList newsList={newsList}/>
    }

    return (
        <>
            {
                filteredYear ? (
                    <h1>Archived News of {filteredYear}{filteredMonth && `-${filteredMonth}`}:</h1>
                ) : (
                    <h1>Archived News</h1>
                )

            }
            <header>
                <nav>
                    <ul>
                        {
                            links.map(link => {
                                const href = filteredYear ? `/archive/${filteredYear}/${link}` : `/archive/${link}`
                                return(
                                    <li key={link}><Link href={href}>{link}</Link></li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
}