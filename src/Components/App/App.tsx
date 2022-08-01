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
    quote: "",
    id: 0,
    deleteCard(){}
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

  const deleteCard = (id: number): void => {
    const filteredCards = savedCards.filter(card => card.id !== id)
    setSavedCards(filteredCards)
  }

  return (
    <main>
      <NavBar />
      <Route 
        exact path='/' render={()=> 
          <section className='home' data-cy='home'>
            <p className='description'>Do you want to show your friends and family that you’re thinking about them, but you aren’t quite sure what to say? Liven up someone’s day with Card Party, the greeting card generator that provides a random joke or compliment to brighten someone’s day.</p>    
            <h2 className='select-text'>Please select an option to randomly generate a compliment or a joke for your card:</h2>
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
        path='/saved-cards' render={() => <SavedCards savedCards={savedCards} deleteCard={deleteCard}/>}
      />
    </main>
  )
}

export default App