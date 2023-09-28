import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>LAB | React Stack Tracker</h1>
      <h2>HomePage</h2>

      {props.companies.map((oneComp) => {
        return (
          <div key={oneComp.id}>
            <Link to={`/company/${oneComp.slug}`}>
              <p>{oneComp.name}</p>
              <img src={oneComp.logo} style={{ height: 100 }} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
