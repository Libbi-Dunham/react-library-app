import BookList from './views/Books/BookList';
import Home from './views/Home/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
