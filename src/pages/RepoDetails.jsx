import  { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";



export default function RepoDetails() {
  const [repo, setRepo] = useState([]);
  const [users] = useState("emery-hub");
  const { name } = useParams();

 
  //   const params = useParams

  useEffect(() => {
    const fetchRepoDetailData = async () => {
      const res = await fetch(
        `https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=updated`
      );
      const data = await res.json();

      setRepo(data);
      console.log(data);
    };

    fetchRepoDetailData();
  }, [name, users, repo]);

  
  
    return (
    <>
      <section className="max-w-5xl mx-auto">
        <h1>{name}</h1>
        

        <div>
          
        </div>
      </section>

      
    </>
  );

}





// {repo.map((repo) => (
//             <article className="p-5 bg-white rounded-lg shadow shadow-emerald-300">
//               <article className="flex items-center justify-start">
//                 <h2>{repo.name}</h2>
//               </article>
//             </article>
//           ))}