import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:8080"

const CommentContainer = () => {
   

const [comment, setComment] = useState();
const [comments, setComments] = useState([]);
const [allComments, setAllComments] = useState([]);



useEffect(() => {
    const fetchData = async() => {
       const response = await fetch(`${SERVER_URL}/comments`)
       const data = await response.json();
       setComments(data);
    }
   fetchData()
     }, [])


const postComment = async (newComment) => {
    const response = await fetch("http://localhost:8080/comments", {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newComment)
    }) 
    const savedComment = await response.json();
    savedComment.comments = [];
    setAllComments([...allComments, savedComment])
    // setIsLoggedIn(true) 
    setComment(savedComment);
};




    return ( 
        <></>
     );
}
 
export default CommentContainer;