import  { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";


export default function RepoDetails() {
  const [repository, setRepository] = useState([]);
  const { repoName } = useParams();


  useEffect(() => {
    fetch(`https://api.github.com/repos/emery-hub/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepository(data))
      .catch((error) =>
        console.error("Error fetching repository details:", error)
      );
  }, [repoName]);

   if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 bg-white rounded-lg shadow shadow-emerald-300">
      <h2>Name: {repository.name}</h2>
      <p>Description: {repository.description}</p>
      <p>Language: {repository.language}</p>
      <p>Stars: {repository.stargazers_count}</p>
    </div>
  );
}