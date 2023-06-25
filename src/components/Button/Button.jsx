import React from 'react';
import PropTypes from "prop-types";
import './button.css';

/**
 * Primary UI component for user interaction
 */
export function Button({ label, disabled, group, size }) {
  const groupClassMap = {
    "primary": "react-easy-button--primary",
    "secondary": "react-easy-button--secondary",
    "text": "react-easy-button--text",
  }

  const sizeClassMap = {
    small: "react-easy-button--small",
    medium: "react-easy-button--medium",
    large: "react-easy-button--large",
  }

  const className = 'react-easy-button ' + groupClassMap[group] + ' ' + sizeClassMap[size];
  return (
    <button disabled={disabled} className={className}>{ label }</button>
  )
}

Button.propTypes = {
  /**
   * Label to render for button
   */
  label: PropTypes.string.isRequired,

  /**
   * Whether to disable the button
   */
  disabled: PropTypes.bool,

  /**
   * Button group
   */
  group: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,

   /**
   * Size of button
   */
   size: PropTypes.oneOf(["small", "medium", "large"])
}

Button.defaultProps = {
  label: "click me !",
  disabled: false,
  group: "primary",
  size: "medium"
}