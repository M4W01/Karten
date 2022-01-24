import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Home from "./pages/Home";
import register from "./pages/register";
import anmelden from "./pages/anmelden";

function App() {
  return (
    <div className="App">
      
        <Formik>
          
          <Form className="Link">
              
               <Router>
               <Link to="/"> Home Page </Link>
               <Link to="/register"> register</Link>
               <Link to="/anmelden"> anmelden</Link> 
               <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/register" exact component={register} />
               <Route path="/anmelden" exact component={anmelden}/>
               </Switch>
               </Router>
        
            </Form>

        </Formik>
       
       
      
    </div>
  );
}

export default App;