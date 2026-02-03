import { BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SubredditPage from "./pages/SubredditPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SubmitPage from "./pages/SubmitPage";
import PageNotFound from "./pages/PageNotFound";
import "./styles/App.css";
import './styles/App.scss';
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="r/:subredditName" element={<SubredditPage />} />
        <Route path="r/:subredditName/submit" element={<SubmitPage />} />
        <Route path="post/:postId" element={<PostPage />} />
        <Route path="u/:username" element={<ProfilePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
