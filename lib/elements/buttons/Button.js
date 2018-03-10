import React from 'react';
import PropTypes from 'prop-types';
import 'material-kit/assets/css/material-kit.css';
import 'material-kit/assets/js/core/jquery.min.js';
import 'material-kit/assets/js/bootstrap-material-design.js';
import 'material-kit/assets/js/material-kit.js';
import '../../styles/Main.css';

const Button = (props) => {
  return (
    <button
      className={"btn " + (props.type ? "btn-" + props.type : "")}
      type="button"
    >
      {props.children}
    </button>
  );

};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.string
};


export default Button;
