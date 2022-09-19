import "./style/index.scss";
import "./style/custom.scss";
import HeaderComp from "./components/Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
const App = () => {
  return (
    <div className="app">
      <HeaderComp />
      <main className="app-main ">
        <div className="app-main-inner container">
          <h1>Registration</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            commodi esse architecto ipsa delectus, aut adipisci odio cupiditate
            mollitia vero quasi qui ducimus! Nam totam nulla corporis! Quis,
            repudiandae neque!
          </p>

          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
