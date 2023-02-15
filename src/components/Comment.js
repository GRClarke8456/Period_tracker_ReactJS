const Comment = ({comment}) => {
    return ( 
        <div>
            <li>{comment.text} - {comment.user.name}</li>
        </div>
                    // <li>{comment.text} - {ifLoggedIn
                    //(<p>{comment.user.name}</p>)
                    // }</li>
     );
}
 
export default Comment;