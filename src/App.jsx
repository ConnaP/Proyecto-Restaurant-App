import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/header/Header";
import { MainRoutes } from "./routes/Routes";

import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, firebaseProvider } from "./firebase/firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const onLogin = () => {
    signInWithPopup(firebaseAuth, firebaseProvider)
      .then(({ user }) => {
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role: "ADMIN_ROLE",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} onLogin={onLogin} />
      <MainRoutes user={user} />
      <Footer />
    </>
  );
}

export default App;
