const Comment = ({comment}) => {
    return ( 
        <div>
            <p>{comment.text} - {comment.user.name}</p>
        </div>
                    // <li>{comment.text} - {ifLoggedIn
                    //(<p>{comment.user.name}</p>)
                    // }</li>
     );
}
 
export default Comment;