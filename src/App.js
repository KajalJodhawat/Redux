import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import ContactForm from './components/ContactForm';
import store from './Store';
import { Provider } from 'react-redux';
import ShowContact from './components/ContactList';



function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/ContactForm" exact component={ContactForm} />
            <Route path="/ShowContact" exact component={ShowContact}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
