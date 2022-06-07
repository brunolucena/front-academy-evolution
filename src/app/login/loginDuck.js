// types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// reducer
const initialState = {
  username: "",
  name: "",
  lastName: "",
  isLoggedIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default: {
      return state;
    }
  }
}

// actions
export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

// selectors
