import { routes } from "./routes/Index";
import { Switch, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <article>
      <Switch location ={location} key ={location.pathname}>
        {routes.map(({ path, Component }) => (
            <Route key ={path} exact path ={path} component ={Component} />
          ))}
      </Switch>
    </article>
  );
}

export default App;
