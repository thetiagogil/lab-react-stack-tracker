import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();

  const foundCompany = props.companies.find((oneComp) => {
    return oneComp.slug === companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <img
          src={foundCompany.logo}
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
          <h2>{foundCompany.name}</h2>
          <p style={{ width: 400, textAlign: "justify" }}>
            {foundCompany.description}
          </p>
        </section>
      </section>

      <section>
        <ul
          style={{ display: "flex", overflow: "scroll", overflowY: "hidden" }}
        >
          {props.techs.map((oneTech) => {
            return (
              <li key={oneTech.id} style={{ listStyle: "none" }}>
                <Link to={`/tech/${oneTech.slug}?company=${foundCompany.slug}`}>
                  <img
                    src={oneTech.image}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      border: "1px solid lightgray",
                      padding: 20,
                      margin: 5,
                      boxShadow: "1px 1px 7px lightgray",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <Link to={`/`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default CompanyPage;
