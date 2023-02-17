import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Favourites = ({ articles, isLoggedIn, user, comments, account }) => {
    
    const [likeArticle, setLikeArticle] = useState(false);
  
    console.log(articles);
    const {id} = useParams();

    

    
  
    useEffect(() => {
        if (user) {
      const articleLiked = didTheyLikeTheArticle(id);
        setLikeArticle(articleLiked);     
        }
    }, []);

  
    const didTheyLikeTheArticle = (articleID) => {
      let check = false;
      for (const articleLiked of user.articles) {
        if (articleLiked.id === articleID) {
          check = true;
        }
      }
      return check;
    };
  
    return (
      <div className="page">
      <h3>Liked Content</h3>
        {/* <section className="products"> */}
            {user ? user.articles.map((article) => {
                return <>
                <div className="blog-card spring-fever">
                <div className="title-content">
                    {/* <h3><a href="#"> <{article.title}></a></h3> */}

                    <h3>{article.title}</h3>
                    <div className="intro"> <a href="#">Women and Lifestyle</a> </div>
                </div>
                <div className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
                    <a href="#">Read Article<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                <ul className="utility-list">
                {/* <li><span className="licon icon-like"></span><a href="#">2</a></li> */}
                <li><span className="licon icon-like"></span> {article.numOfLikes} </li>
                
                <li><span className="licon icon-com"></span> ... </li>
                <li><span className="licon icon-dat"></span> {article.date} </li>
                <li><span className="licon icon-tag"></span> {article.tag} </li>
                </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
                </>
            } ) : ""
            }
            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br>
      <br></br>
      
        {/* </section> */}
      </div>

      
    );
  }

  
  export default Favourites;