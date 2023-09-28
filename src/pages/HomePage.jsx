import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>LAB | React Stack Tracker</h1>

      <h2>HomePage</h2>

      <section
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {props.companies.map((oneComp) => {
          return (
            <div
              key={oneComp.id}
              style={{
                width: 300,
                height: 200,
                border: "1px solid lightgray",
                margin: 10,
                boxShadow: "1px 1px 10px lightgray",
              }}
            >
              <Link to={`/company/${oneComp.slug}`}>
                <p style={{ color: "black" }}>{oneComp.name}</p>
                <img
                  src={oneComp.logo}
                  style={{
                    width: 75,
                    padding: 20,
                  }}
                />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default HomePage;
