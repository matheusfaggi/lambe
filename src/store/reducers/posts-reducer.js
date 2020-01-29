import { SET_POSTS, ADD_COMMENT } from "../actions/actionTypes"

const initialState = {
  posts: [],
}

const reducer = (state, action) => {
  if (typeof state === "undefined") state = initialState
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment)
            } else {
              post.comments = [action.payload.comment]
            }
          }
          return post
        }),
      }
    default:
      return state
  }
}

export default reducer
