import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();

    return (
        <div id="home">
            <h2>Latest News Page</h2>
            <NewsList news={latestNews}/>
        </div>
    );
}