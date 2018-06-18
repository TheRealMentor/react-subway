import React from 'react';
import PropTypes from 'prop-types';
import selectQuestions from '../api/selectQuestions';


function Question(props) {
    if(selectQuestions[props.counter].type === "radio"){
        return (
            <div className="questionBox">
                <h2 className="question">{props.content}</h2>
            </div>
        );
    } else {
        return (
            <div className="questionBox">
                <h2 className="question">{props.content}</h2>
                <span>(Select as many as you want!)</span>
            </div>
        );
    }
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;