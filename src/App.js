import BookList from './views/Books/BookList';
import Home from './views/Home/Home';
import Book from './views/Books/BookDetail';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/books/id:" component={Book} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
