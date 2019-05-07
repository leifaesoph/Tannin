import React, { Component } from 'react';
// importing components
import QuestionCard from "../components/QuestionCard";
import Wrapper from "../components/Wrapper";
// importing the characters array from the json file
import questions from "../questions.json";
//importing css stylings
// import './App.css';

class Quiz extends Component {
    // Setting this.state.characters to the character json array
    // Setting score, losses, and highScore to 0 for the start of each game
    state = {
      questions,
      clicked: false,
      score: 0,
      losses: 0,
      highScore: 0,
      guesses: []
    };
  
    // componentWillMount shuffles the CharacterCards before the DOM is loaded
    componentWillMount() {
      this.shuffle(questions);
    };
  
    // Here we use the Fisher-Yates alogrithm to randomize the characters array
    shuffle(arr) {
      var j, x, i;
      for (i = arr.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x
      }
      return arr;
    };
  
    handleBtnClick = questionId => {
      // renaming this.state so we don't have to write it out each time
      const powerPuff = {...this.state};
  
      // in this if statement we check to see if the player lost, log their loss, and clear the guesses array & score
      if(powerPuff.guesses.includes(questionId)) {
        console.log("You lose");
        powerPuff.losses = powerPuff.losses +1;
        powerPuff.guesses = [];
        powerPuff.score = 0
      }
      // if they didn't lose, we increment their score and add the character to the guesses array
      else
      { powerPuff.score = powerPuff.score +1;
        powerPuff.guesses.push(questionId)
      }
      // here we shuffle the character cards again
      this.shuffle(questions);
  
      // we check the current score against the high score, increasing high score if it is lower than current score.
      if (powerPuff.score > powerPuff.highScore) {
        powerPuff.highScore = powerPuff.score
      }
  
      // finally we use setState to update the state to the virtual DOM
      this.setState(powerPuff);
    }
  
  
    // renders react elements into the DOM
    render() {
      return (
        // the parent div into which our components will be rendered
        <div className="background">
  
        <Wrapper>
          {/* Map over this.state.characters and render a CharacterCard component for each character object */}
          {this.state.questions.map(question => (
            <QuestionCard 
              // each card will inherit an id, a key, a name, and an image from its respective array object
              handleBtnClick={this.handleBtnClick}
              id={question.id}
              key={question.id}
              question={question.question}
              answers={question.falseAnswers}
              shuffle={this.shuffle}
            />
          ))}
            <button>Submit Answers</button>
  
        </Wrapper>
        </div>
      );
    }
  }
  
  export default Quiz;
  