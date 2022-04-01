import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import ContactForm from './components/ContactForm';
import store from './Store';
import { Provider } from 'react-redux';
import ShowContact from './components/ContactList';
import UpdateContact from './components/UpdateContact';
import Navbar from './components/NavBar';



function App() {
  return (
    <>
    <Navbar/>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            
            <Route path="/ContactForm" exact component={ContactForm} />
            <Route path="/ShowContact" exact component={ShowContact}/>
            <Route path="/UpdateContact" exact component={UpdateContact}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
