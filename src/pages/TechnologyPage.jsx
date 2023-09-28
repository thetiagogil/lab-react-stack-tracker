import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [searchParam] = useSearchParams();
  const visitedCompany = searchParam.get("company");
  
  const foundTech = props.techs.find((oneTech) => {
    return oneTech.slug === slug;
  });

  return (
    <div>
      <div>
        <h1>Company Profile</h1>
        <img src={foundTech.image} style={{ height: 150 }} />
        <h2>{foundTech.name}</h2>
        <h3>About</h3>
        <p>{foundTech.description}</p>
      </div>

      <Link to={`/company/${visitedCompany}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
