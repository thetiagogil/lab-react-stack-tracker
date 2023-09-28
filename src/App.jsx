import { useState } from "react";
import "./App.css";
import compsJSON from "./companies.json";
import techsJSON from "./technologies.json";
import { Route, Routes, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [comps, setComps] = useState(compsJSON);
  const [techs, setTechs] = useState(techsJSON);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={comps} />} />
        <Route
          path={"/company/:companySlug"}
          element={<CompanyPage companies={comps} techs={techs} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage techs={techs} />} />
      </Routes>
    </div>
  );
}

export default App;
