export const initialState = {
  user: null,
  playlists: [
    { name: "Hip Hop" },
    { name: "Afro" },
    { name: "Pop" },
    { name: "Intro" },
  ],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action._token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
