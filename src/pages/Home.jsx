import  { useState, useEffect }  from 'react'
import { Link } from "react-router-dom";
// import { format } from "date-fns";

export default function Home() {
  const [items, setItems] = useState([]);
  const [users] = useState("emery-hub");

  // for pagination purposes
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  //   real code
  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     const res = await fetch(
  //       // `https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=updated`
  //       `https://api.github.com/users/${users}/repos?page=${currentPage}&per_page=${perPage}&sort=updated`
  //     );
  //     const data = await res.json();
  //     setItems(data);
  //   };

  //   fetchRepos();
  // }, [currentPage, users, perPage]);

  useEffect(() => {
    fetch(
      // `https://api.github.com/users/repos?page=${currentPage}&per_page=${perPage}&sort=updated`
      `https://api.github.com/users/emery-hub/repos??page=${currentPage}&per_page=${perPage}&sort=updated`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching repositories:", error));
  }, [currentPage, perPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {!items ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section className="pt-10 pb-20">
            <div>
              <h1 className="text-2xl font-bold capitalize">
                Viewing a list of {users} Repositories
              </h1>
              <p className="pt-5 pb-5">
                This application is powered by{" "}
                <a
                  href="https://api.github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline active:text-orange-400"
                >
                  {" "}
                  GitHub API{" "}
                </a>
              </p>

              {/* Here put form for search bar */}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {items.map((item) => (
                <Link
                  to={`/name/${item.name}`}
                  key={item.id}
                  className="bg-emerald-200 p-4 rounded hover:bg-emerald-300 transition-all duration-200"
                >
                  <article className="p-5 bg-white rounded-lg shadow shadow-emerald-300">
                    <article className="flex items-center justify-start">
                      <img
                        src={item.owner.avatar_url}
                        alt={item.owner.login}
                        className="w-20 h-20 rounded-full shadow"
                      />

                      <div className="ml-2">
                        <h2 className="text-lg font-bold capitalize">
                          {item.owner.login}
                        </h2>
                        <p className="text-sm mb-1">{item.name}</p>
                        {item.private ? (
                          <p className="bg-rose-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">
                            Private
                          </p>
                        ) : (
                          <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">
                            Public
                          </p>
                        )}
                      </div>
                    </article>

                    <div className="my-5">
                      <p>
                        This repository was created on{" "}
                        {/* {format(new Date(item.created_at), "dd MMMM yyyy")} by{" "} */}
                        {item.owner.login}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between">
                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        View Repo
                      </a>
                      <ul className="text-right">
                        <li>{item.stargazers_count.toLocaleString()} stars</li>
                        <li>{item.watchers_count.toLocaleString()} watchers</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center justify-between mt-5">
                      {item.language && (
                        <p className="bg-emerald-400 opacity-75 text-white py-1 px-2 rounded-lg shadow text-xs">
                          {item.language}
                        </p>
                      )}

                      <ul>
                        {item.topics.map((topic, index) => (
                          <li
                            key={index}
                            className="bg-emerald-400 opacity-75 text-white py-1 px-2 rounded-lg shadow text-xs inline-block mx-1"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>

                      <p className="text-xs">{item.open_issues} issues</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-5">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Previous Page
              </button>
              <button
                onClick={handleNextPage}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next Page
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}



