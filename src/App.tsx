import { BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SubredditPage from "./pages/SubredditPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SubmitPage from "./pages/SubmitPage";
import PageNotFound from "./pages/PageNotFound";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ResourcePage from "./pages/ResourcePage";
import UpdatesPage from "./pages/UpdatesPage";
import './styles/App.scss';
import PostCreatePage from "./pages/PostCreatePage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="r/:subredditName" element={<SubredditPage />} />
        <Route path="r/:subredditName/submit" element={<SubmitPage />} />
        <Route path="post/:postId" element={<PostPage />} />
        <Route path="u/:username" element={<ProfilePage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/test2" element={<PostCreatePage />} />
        {/* 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
