import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/:type/:id" component={PetDetailsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/pet-details-not-found" component={PetDetailsNotFound} />
        <Route path="/:type?" component={HomePage} />
      </Switch>  
    </Router>
  );
}

export default App;
