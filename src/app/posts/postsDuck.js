// duck pattern

// types
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

// reducer
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case GET_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: "Não foi possível carregar os posts",
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

// actions
export function getPosts() {
  return {
    type: GET_POSTS,
  };
}
