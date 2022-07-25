import React, { FC } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import CardForm from '../CardForm/CardForm';
import CardPreview from '../CardPreview/CardPreview';
import SavedCards from '../SavedCards/SavedCards';

const App: FC = () => {

  return (
    <main>
      <NavBar />
      <section className='home' data-cy='home'>

      </section>
      <CardForm />
      <CardPreview />
      <SavedCards />
    </main>
  );
   
};

export default App;