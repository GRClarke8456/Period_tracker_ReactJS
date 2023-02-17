import { useState } from "react";

const Search = ({filterArticles}) => {

    const [searchArtitcleName, setSearchArticleName] = useState("");
    const [searchTags, setSearchTags] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        filterArticles(searchArtitcleName, searchTags);
      }


    return (
        
        <>
        {/* <div className='searchTitle'>Search here</div> */}
   
        <form className="search" role="search" onSubmit={handleSubmit}>
            <label className="search__label" htmlFor="search__input">Name:</label>
            <input 
                type="search" 
                placeholder="Type article name..." className="search__input" 
                value={searchArtitcleName}
                onChange={event => setSearchArticleName(event.target.value)} />


            <label className="search__label" htmlFor="search__input">Tags:</label>
            <select 
                name="tag" 
                onChange={event => setSearchTags(event.target.value)}
                defaultValue="">
                <option disabled-value=""></option>
                <option value="Female_Health">Female_Health</option>
                <option value="Menstruation">Menstruation</option>
                <option value="Pregnancy">Pregnancy</option>
                <option value="Young_Girls">Young_Girls</option>
                <option value="Menopause">Menopause</option>
            </select>
        <button>
            <input type="submit" value="Search"  />
            </button>
        </form>
        </>
        
      

     );
}
 
export default Search;