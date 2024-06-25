import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();

    return (
        <div id="home">
            <h2>Latest News Page</h2>
            <NewsList news={latestNews}/>
        </div>
    );
}