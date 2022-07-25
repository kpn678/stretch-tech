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
        path='/' render={()=> 
        <section className='home' data-cy='home'>
          <div className='description'>
            <h2>Do you wanna have friends and be <i>PoPuLaR!!!!!</i></h2>
            <p>Make a card for your mom or your dad or your pets or your friends or your mailman</p>
          </div>
          <p>Please select an option</p>
          <div className='choices'>
            <button data-cy='quotes-button'>Quotes</button>
            <button data-cy='jokes-button'>Jokes</button>
          </div>
        </section>}
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