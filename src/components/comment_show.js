



{post.comments.length > 0 ?
  <li className="list-group-item">
    COMMENTS
  </li> : null
}

{post.comments.map((comment =>
  <li className="list-group-item">
    {comment.content}
    <ul>
      {comment.replies.map((reply =>
        <li> {reply.content} </li>
      ))}
    </ul>
  </li>
))}
