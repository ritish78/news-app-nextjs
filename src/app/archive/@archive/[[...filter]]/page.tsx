import NewsList from "@/components/NewsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news-year";
import Link from "next/link";

interface Params {
    filter: string[];
}

interface YearNewsProps {
    params: Params;
}

export default function YearNewsPage({ params }: YearNewsProps) {
    const filter = params.filter;
    const filteredYear = filter?.[0];
    const filteredMonth = filter?.[1];

    let newsList;
    let links = getAvailableNewsYears();

    if (filteredYear && filteredMonth) {
        newsList = getNewsForYearAndMonth(filteredYear, filteredMonth);
        links = [];
    } else if (filteredYear && !filteredMonth) {
        newsList = getNewsForYear(filteredYear);
        links = getAvailableNewsMonths(filteredYear);
    }

    let newsContent = <p>No news found for the selected period!</p>

    if (newsList && newsList.length > 0) {
        newsContent = <NewsList newsList={newsList}/>
    }

    if ((filteredYear && !getAvailableNewsYears().includes(filteredYear)) || 
        (filteredMonth && !getAvailableNewsMonths(filteredYear).includes(filteredMonth))) {
            throw new Error("Invalid filter!");
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