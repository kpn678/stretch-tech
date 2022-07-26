import React, { FC, useState} from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import NavBar from '../NavBar/NavBar';
import CardForm from '../CardForm/CardForm';
import CardPreview from '../CardPreview/CardPreview';
import SavedCards from '../SavedCards/SavedCards';

// interface Props {
//   currentCard: {
//       from: string;
//       to: string;
//       message: string;
//       quote: string;
//   };
//   saveCard: (card: object) => void
// }

type MyCard={
  from: string;
  to: string;
  message: string;
  quote: string;
}

const App: FC = () => {

  const [savedCards, setSavedCards] = useState<{}[]>([])
  const [currentCard, setCurrentCard] = useState<{}>()

  const saveCard = (card: object): void => {
    setSavedCards([...savedCards, card])
  }

  const selectCard = (card: MyCard): void => {
    setCurrentCard(card)
  }

  return (
    <main>
      <NavBar />
      <Route 
        exact path='/' render={()=> 
        <section className='home' data-cy='home'>
          <div className='description'>
            <h2>Do you wanna have friends and be <i>PoPuLaR!!!!!</i></h2>
            <p>Make a card for your mom or your dad or your pets or your friends or your mailman</p>
          </div>
          <p>Please select an option</p>
          <div className='choices'>
            <Link to="/create-card">
              <button data-cy='quotes-button'>Quotes</button>
            </Link>
            <button data-cy='jokes-button'>Jokes</button>
          </div>
        </section>}
      />
      <Route
        path='/create-card' render={() => <CardForm selectCard={selectCard} />}
      />
      <Route
        path='/preview-card' render={() => <CardPreview saveCard={saveCard} currentCard={currentCard}/>}
      />
      {/* <Route
        path='/saved-cards' render={() => <SavedCards savedCards={savedCards} />}
      /> */}
    </main>
  );
   
};

export default App;