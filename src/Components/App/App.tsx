import React, { FC } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import CardForm from '../CardForm/CardForm';
import CardPreview from '../CardPreview/CardPreview';
import SavedCards from '../SavedCards/SavedCards';


const App: FC = () => {

  return (
    <main>
      <NavBar />
      <Route 
       path='/' render={()=> <section className='home' data-cy='home'></section>}
      />
      <Route
      path='/create-card' render={() => <CardForm />}
      />
      <Route
      path='/preview-card' render={() => <CardPreview />}
      />
      <Route
      path='/saved-cards' render={() => <SavedCards />}
      />
    </main>
  );
   
};

export default App;