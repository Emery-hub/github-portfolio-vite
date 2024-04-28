import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import ErrorBoundary from "./pages/ErrorBoundary";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/name" element={<Home />}></Route>
          <Route path="/name/:repoName" element={<ErrorBoundary>
            <RepoDetails />
          </ErrorBoundary>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
