import React from 'react';
import PropTypes from 'prop-types';
import selectQuestions from '../api/selectQuestions';

function SelectOption(props) {

  if(selectQuestions[props.counter].type === "radio") {
    return (
      <li className="selectOption">
        <input
          type="radio"
          name="radioGroup"
          id={props.answerPrice}
          value={props.answerPrice}
        />

        <label htmlFor={props.answerPrice}>
          {props.answerContent} &nbsp; <span className="price">(${props.answerPrice})</span>
        </label>
      </li>
    );
  } else if(selectQuestions[props.counter].type === "checkbox") {
    return (
      <li className="selectOption">
        <input
          type="checkbox"
          name="checkboxGroup"
          id={props.answerPrice}
          value={props.answerPrice}
        />

        <label htmlFor={props.answerPrice}>
          {props.answerContent} &nbsp; <span className="price">(${props.answerPrice})</span>
        </label>
      </li>
    );
  }   
}

SelectOption.propTypes = {
    answerPrice: PropTypes.number.isRequired,
    answerContent: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired
};

export default SelectOption;