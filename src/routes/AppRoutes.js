import { BrowserRouter as Route, Switch } from 'react-router-dom';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Hero} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default AppRoutes;
