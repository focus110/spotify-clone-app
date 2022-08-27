import { useEffect, useState } from "react";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [{ user }, dispatch] = useDataLayerValue();

  // run code based on th given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //import spotify web api service
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("tk", _token);
    // eslint-disable-next-line
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
