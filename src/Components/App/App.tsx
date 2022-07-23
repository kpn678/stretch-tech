import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import CardForm from '../CardForm/CardForm';
import CardPreview from '../CardPreview/CardPreview';
import SavedCards from '../SavedCards/SavedCards';

class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {

    };
  };

  render() {
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
};

export default App;