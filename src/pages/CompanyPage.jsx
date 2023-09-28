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
        <img src={foundCompany.logo} style={{ height: 150 }} />
        <h2>{foundCompany.name}</h2>
        <h3>About</h3>
        <p>{foundCompany.description}</p>
      </div>

      <div>
        <ul style={{ display: "flex", overflow: "scroll" }}>
          {props.techs.map((oneTech) => {
            return (
              <li key={oneTech.id} style={{ listStyle: "none" }}>
                <Link to={`/tech/${oneTech.slug}?company=${foundCompany.slug}`}>
                  <img
                    src={oneTech.image}
                    style={{ height: 50, border: "1px 1px red" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link to={`/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default CompanyPage;
