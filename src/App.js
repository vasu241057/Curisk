import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import UserLogin from "./pages/UserLogin";
import Splash from "./pages/Splash";
import { useEffect } from "react";
import Upload from "./pages/upload";
import Report from "./pages/report";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/user-login":
        title = "";
        metaDescription = "";
        break;
      case "/splash":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/Report" element={<Report />} />
    </Routes>
  );
}
export default App;
