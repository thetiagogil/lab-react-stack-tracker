import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const foundTech = props.techs.find((oneTech) => {
    return oneTech.slug === slug;
  });

  return (
    <div>
      <h1>Company Profile</h1>
      <img src={foundTech.image} style={{ height: 100 }} />
      <h2>{foundTech.name}</h2>
      <h3>About</h3>
      <p>{foundTech.description}</p>
    </div>
  );
}

export default TechnologyPage;
