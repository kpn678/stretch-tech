import React, { FC, useState, MouseEvent} from 'react'
import './App.css'
import { Route, Link } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import CardForm from '../CardForm/CardForm'
import CardPreview from '../CardPreview/CardPreview'
import SavedCards from '../SavedCards/SavedCards'
import Card from "../../types/Card.type"

const App: FC = () => {
  const [choice, setChoice] = useState<string>("none")
  const [savedCards, setSavedCards] = useState<Card[]>([])
  const [currentCard, setCurrentCard] = useState<Card>({  
    from: "",
    to: "",
    message: "",
    quote: ""
  })

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement
    setChoice(target.name)
  }

  const saveCard = (card: Card): void => {
    setSavedCards([...savedCards, card])
  }

  const selectCard = (card: Card): void => {
    setCurrentCard(card)
  }

  return (
    <main>
      <NavBar />
      <Route 
        exact path='/' render={()=> 
          <section className='home' data-cy='home'>
            <div className='description'>
              <h2>Do you want to show your friends and family that you’re thinking about them, but you aren’t quite sure what to say? Liven up someone’s day with Card Party, the greeting card generator that provides a random joke or compliment to brighten someone’s day.</h2>
              <p>Make a card for your mom, or your pets, or your friends, or your mailman! The choice is yours.</p>
            </div>
            <p className='select-text'><b>Please select an option to randomly generate a compliment or a joke for your card:</b></p>
            <div className='choices'>
              <Link to="/create-card">
                <button className='compliments-button' name='compliment' onClick={(event) => handleClick(event)} data-cy='compliments-button'>Compliments</button>
              </Link>
              <Link to='/create-card'>
                <button className='jokes-button'name='joke' onClick={(event) => handleClick(event)} data-cy='jokes-button'>Jokes</button>
              </Link>
            </div>
          </section>
        }
      />
      <Route
        path='/create-card' render={() => <CardForm selectCard={selectCard} choice={choice} />}
      />
      <Route
        path='/preview-card' render={() => <CardPreview saveCard={saveCard} currentCard={currentCard} />}
      />
      <Route
        path='/saved-cards' render={() => <SavedCards savedCards={savedCards} />}
      />
    </main>
  )
}

export default App