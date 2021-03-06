import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
    return (
        <div className="questionCount">
            Selection - <span>{props.counter + 1}</span> of <span>{props.total}</span>
        </div>
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;