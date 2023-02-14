import { useState } from "react";

const Search = ({filterArticles}) => {

    const[searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (article) => {
        article.preventDefault();
        filterArticles(searchTerm);
    }


    return ( 
        <form onSubmit={handleSubmit}>
        <label htmlFor="search-field">Search for an article:</label>
        <input type="text" id="search-field" 
        onChange={(article)=> setSearchTerm(article.target.value)}
        value={searchTerm}/>

        <input type="submit" />
    </form>
     );
}
 
export default Search;