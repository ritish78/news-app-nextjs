import { NewsItem, newsList } from "../utils/seed-news";

export function getAllNews(): NewsItem[] {
    return newsList;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return newsList.find(news => news.slug === slug);
}

export function getLatestNews(): NewsItem[] {
    return newsList.slice(0, 3);
}

export function getAvailableNewsYears(): string[] {
    return newsList.reduce((yearList: string[], news) => {
        const year = news.date.split("-")[0];   //Date is in format "YYYY-MM-DD"
        if (!yearList.includes(year)) {
            yearList.push(year);
        }
        return yearList;
    }, [] as string[]).sort((a, b) => Number(b) - Number(a));
}

export function getAvailableNewsMonths(year: string): string[] {
    return newsList.reduce((monthList: string[], news) => {
        const newsYear = news.date.split("-")[0];
        if (newsYear == year) {
            const month = news.date.split("-")[1];
            if (!monthList.includes(month)) {
                monthList.push(month);
            }
        }
        return monthList;
    }, [] as string[]).sort((a, b) => Number(b) - Number(a));
}

export function getNewsForYear(year: string): NewsItem[] {
    return newsList.filter(news => news.date.split("-")[0] === year);
}

export function getNewsForYearAndMonth(year: string, month: string): NewsItem[] {
    return newsList.filter(news => {
        const newsYear = news.date.split("-")[0];
        const newsMonth = news.date.split("-")[1];
        return newsYear === year && newsMonth === month
    })
}
