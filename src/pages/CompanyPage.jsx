import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  const foundCompany = props.companies.find((oneComp) => {
    return oneComp.slug === companySlug;
  });

  return (
    <div>
      <div>
        <h1>Company Profile</h1>
        <img src={foundCompany.logo} style={{ height: 100 }} />
        <h2>{foundCompany.name}</h2>
        <h3>About</h3>
        <p>{foundCompany.description}</p>
      </div>

      <div style={{ display: "flex" }}>
        {props.techs.map((oneTech) => {
          return (
            <div key={oneTech.id}>
              <Link to={`/tech/${oneTech.slug}`}>
                <img src={oneTech.image} style={{ height: 100 }} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
