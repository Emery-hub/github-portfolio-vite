import { useState, useEffect } from "react";

function SingleRepoPage() {
    // eslint-disable-next-line no-undef
    const { id } = useParams()
  const [details, setDetails] = useState({})
  const [branch, setBranch] = useState({})
  const [deployment, setDeployment] = useState({})

useEffect(() => {
    fetch(`https://api.github.com/repos/emery-hub/${id}`)
    .then((response) => (response.json()))
    .then((data) => {
      setDetails(data)
    })
  }, [ id]) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/emery-hub/${id}/branches`)
    .then((response) => (response.json()))
    .then((data) => {
      setBranch(data)
    })
  }, [id]) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/emery-hub/${id}/deployments`)
    .then((response) => (response.json()))
    .then((data) => {
      setDeployment(data)
    })
  }, [id]) 

  return (
    <div id="repodetail">
        <div className="repodetail-card">
            <h2 className="repo-name">{details.name}</h2>
            <div className="repo-mini-details">
              <p> Stars: {details.stargazers_count}</p>
              <p> Watch: {details.watchers}</p>
              <p> Forks: {details.forks}</p>
              <p> Branches: {branch.length}</p>
            </div>
            <p>Main Language: {details.language === null ? "none": details.language}</p>
            <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://emery-hub.github.io/${details.name}`}>mbonamensa.github.io/{details.name}</a>}</p>
            <p><a href={`https://github.com/${details.full_name}`}>View on Github</a></p>
        </div>
    </div>
  )
}


export default SingleRepoPage;

