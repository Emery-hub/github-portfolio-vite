
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import SingleRepoPage from "./pages/SingleRepoPage";

// const singleUser = `https://api.github.com/users/emery-hub`
// const repos = `https://api.github.com/users/emery-hub/repos?per_page=5`
// https://api.github.com/users/emery-hub/repos?page=1&per_page=10&sort=updated
// `https://api.github.com/users/${users}/repos/${repo}`
// `https://api.github.com/users/emery-hub/repos/search?q=${repo}&${name}`

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<RepoDetails />}></Route>
          <Route path="/" element={<SingleRepoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
