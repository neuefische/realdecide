import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";

function App() {
  const [values, setValues] = useState([]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form setValues={setValues} />
        <div className="realDecide">
          <h2>wheelTitel</h2>
          {values.length > 0 && <RealDecide values={values} />}
        </div>
      </main>
    </div>
  );
}

export default App;
