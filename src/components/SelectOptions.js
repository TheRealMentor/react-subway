import React from 'react';
import PropTypes from 'prop-types';

function SelectOption(props) {
    return (
      <li className="selectOption">
        <input
          type="radio"
          name="radioGroup"
          id={props.answerPrice}
          value={props.answerPrice}
        />

        <label htmlFor={props.answerPrice}>
          {props.answerContent}
        </label>
      </li>
    );
}

SelectOption.propTypes = {
    answerPrice: PropTypes.number.isRequired,
    answerContent: PropTypes.string.isRequired
};

export default SelectOption;