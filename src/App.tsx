import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SubredditPage from "./pages/SubredditPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SubmitPage from "./pages/SubmitPage";
import InstructionPage from "./pages/InstructionPage";
import RegistrationPage from "./pages/RegistrationPage";
import SuccessPage from "./pages/SuccessPage";
import "./styles/App.css";

function App() {
  return <BrowserRouter basename="/ChemisTree">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="r/:subredditName" element={<SubredditPage />} />
        <Route path="r/:subredditName/submit" element={<SubmitPage />} />
        <Route path="post/:postId" element={<PostPage />} />
        <Route path="u/:username" element={<ProfilePage />} />
        <Route path="instruction" element={<InstructionPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
