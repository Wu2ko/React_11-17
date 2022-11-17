import Article from "../article/Article";
import articles from "../../data/Articles";
import Search from "../search/Search";
import {useState} from "react";
import Content from "../Content/Content";

const Main = ()=>{
    const [searchTerm, setSearchTerm] = useState("")

    const handleInputChange = (event)=>{
        setSearchTerm(event.target.value)
    }
    console.log(searchTerm)
    const filteredArticles = articles.filter((article)=>{
        return article.title.includes(searchTerm)
    })
    console.log(filteredArticles)
    return(
            <div className="container px-lg-5">
                <form className="d-flex">
                    <Search name = "Search" onSearch={handleInputChange}/>
                </form>
                <Content articles={filteredArticles}/>
            </div>
    )
}

export default Main