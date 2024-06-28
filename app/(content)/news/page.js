import NewsList from "@/components/news-list";
import {getAllNews} from "@/lib/news";


export default async function NewsPage() {

    const news = await getAllNews();
    let newsContent;

    if(news) {
        newsContent = <NewsList news={news}/>;
    }

    return (
        <>
            <h1>News page</h1>
            {newsContent}
        </>
    )
}