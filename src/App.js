import React, { Component } from 'react';
import './App.css';
import Question from './components/Questions';
import QuestionCount from './components/QuestionCounter';
import selectQuestions from './api/selectQuestions';
import SelectOption from './components/SelectOptions';
import './burger.svg';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      question: '',
      answer: selectQuestions[0].answers,
      selectItemPrices: [],
      total: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.showBill = this.showBill.bind(this);
    this.nextSubmit = this.nextSubmit.bind(this);
  } 

  nextQuestion() {

    if(this.state.counter < selectQuestions.length - 1){
      var counter = this.state.counter + 1;

      if(document.querySelector('input:checked')){
        var selectItemPrices = this.state.selectItemPrices.concat(document.querySelector('input:checked').value);
        
        this.setState({
          counter: counter,
          question: selectQuestions[counter].question,
          answer: selectQuestions[counter].answers,
          selectItemPrices: selectItemPrices
        });
      } else {
        alert('Please choose one of them!');
      }
    } 
  }

  showBill() {

    var selectItemPrices = this.state.selectItemPrices.concat(document.querySelector('input:checked').value);
        
    this.setState({
      selectItemPrices: selectItemPrices
    });

    var temp = parseInt(0);
    
    for(var i=0; i < selectItemPrices.length; i++){
      temp += parseInt(selectItemPrices[i]);
    }

    this.setState({
      total: temp
    }); 

  }

  nextSubmit() {

    var counter = this.state.counter;

    if(counter < selectQuestions.length - 1){
      return(
        <a href="#" className="btn" onClick={this.nextQuestion}> Next </a>
      );
    } else {
      return(
        <a href="#" className="btn submit"
           onClick={this.showBill}> Submit </a>
      );
    }
  }

  render() {
    
    if(this.state.selectItemPrices.length === selectQuestions.length){
      return(
        
        <div className="resultDisplay">
          <Bill total={this.state.total}/>
        </div>
      );
    } else {
      return(
        <div className="appDisplay">
          <QuestionCount 
            counter={this.state.counter} 
            total={selectQuestions.length} 
          />
  
          <Question content={selectQuestions[this.state.counter].question} />
  
          <ul className="selectOptions">
            {this.state.answer.map((options) => <SelectOption key={options.content} 
                                                              answerContent={options.content}
                                                              answerPrice={options.price}/>)}
          </ul>
  
          <div className="btn-grp">
            <this.nextSubmit  /> 
          </div>
          
        </div>
      );
    }
  }
}

function Bill(props) {
  return(
    <div className="bill">
      <p className="billTotal">Your total bill <br/> <span>${props.total}</span></p>
      <p className="note">Thank you for choosing us!</p>
      <img src={require("./burger.svg")} className="img_burger" />
    </div>
  );
}

export default App;
