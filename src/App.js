import React from "react";
import Form from "./components/Form/index"
// import Footer from "./components/Footer/index"

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="container-left">
          <h1>facebook</h1>
          <h2>Connexions récentes</h2>
          <p>Cliquez sur votre image ou sur Ajouter un compte.</p>
          <a href=" " className="profile">
            <i className="fa-solid fa-circle-plus"></i>
            <h3>Ajouter un compte</h3>
          </a>
        </div>
        <div className="container-right">
        <Form />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
