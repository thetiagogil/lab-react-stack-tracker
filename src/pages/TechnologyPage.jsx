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
      <h1>Tech Profile</h1>

      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <img
          src={foundTech.image}
          style={{
            width: 150,
            height: 150,
            objectFit: "contain",
            border: "1px solid lightgray",
            padding: 20,
            margin: 5,
            boxShadow: "1px 1px 10px lightgray",
          }}
        />

        <section style={{ marginLeft: 200 }}>
          <h2>{foundTech.name}</h2>
          <p style={{ width: 400, textAlign: "justify" }}>
            {foundTech.description}
          </p>
        </section>
      </section>

      <Link to={`/company/${visitedCompany}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
