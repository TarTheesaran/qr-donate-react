import { useState, useEffect } from 'react';
import firebase from "../../../firebase";
import Login from './Login';
import Home from './Home';
function MainLogin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <article className="pt-40">
      {user ? <Home user={user} /> : <Login />}
    </article>
  );
}

export default MainLogin;
