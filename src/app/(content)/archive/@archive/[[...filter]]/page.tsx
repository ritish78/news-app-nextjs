import LoadingNews from "@/app/(content)/news/loading";
import NewsList from "@/components/NewsList";
import Link from "next/link";
import { Suspense } from "react";

interface Params {
    filter: string[];
}

interface YearNewsProps {
    params: Params;
}

interface FilteredNewsProps {
    year: string | undefined;
    month: string | undefined;
}

async function FilteredHeader({ year, month }: FilteredNewsProps) {
    const linksResponse = await fetch("http://localhost:5000/api/news/year-list");
    let links: string[] = await linksResponse.json();

    if (year && month) {     
        links = [];
    } else if (year && !month) {
        const newsMonthListResponse = await fetch(`http://localhost:5000/api/news/year-month-list/${year}`);
        links = await newsMonthListResponse.json();
    }

    return (
        <>
            <p>
                News { (year && !month) ? (<span>for {year}</span>) : (year && month) ? (<span>for {year}-{month}</span>) : null}
            </p>
            <header>
                    <nav>
                        <ul>
                            {
                                links.map(link => {
                                    const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                                    return(
                                        <li key={link}><Link href={href}>{link}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
            </header>
        </>
    )
}

async function FilteredNews({ year, month }: FilteredNewsProps) {
    let newsList;
    if (year && month) {
        const newsListResponse = await fetch(`http://localhost:5000/api/news/${year}/${month}`);
        newsList = await newsListResponse.json();
    } else if (year && !month) {
        const newsListResponse = await fetch(`http://localhost:5000/api/news/${year}`);
        newsList = await newsListResponse.json();
    }

    let newsContent = <p>No news found for the selected period!</p>

    if (newsList && newsList.length > 0) {
        newsContent = <NewsList newsList={newsList}/>
    }

    return newsContent;
}

export default async function YearNewsPage({ params }: YearNewsProps) {
    const filter = params.filter;
    const filteredYear = filter?.[0];
    const filteredMonth = filter?.[1];

    return (
        <>
            <Suspense fallback={<p>Loading filters...</p>}>
                <FilteredHeader year={filteredYear} month={filteredMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading News...</p>}>
                <FilteredNews year={filteredYear} month={filteredMonth} />
            </Suspense>
        </>
    )
}