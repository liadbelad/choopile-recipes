import React from "react"
import Comment from "./Comment/Comment"

const CommentList = ({ comments = [] }) => {
  console.log(comments)
  return (
    <>
      {comments.map(({ content, firstName, lastName, createdAt }) => {
        const fullName = `${firstName} ${lastName}`
        return (
          <Comment author={fullName} createdAt={createdAt} content={content} />
        )
      })}
    </>
  )
}

export default CommentList
