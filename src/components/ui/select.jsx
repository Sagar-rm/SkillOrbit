// src/components/ui/select.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

// Main Select component
export function Select({ children }) {
  return <div className="relative w-full">{children}</div>;
}

// SelectTrigger component for the button that opens the dropdown
export function SelectTrigger({ onClick, placeholder, selectedValue }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 text-left"
    >
      {selectedValue || placeholder}
    </button>
  );
}

SelectTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.string,
};

// SelectContent component for the dropdown options container
export function SelectContent({ children }) {
  return (
    <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-auto shadow-lg">
      {children}
    </ul>
  );
}

// SelectItem component for each option
export function SelectItem({ value, onClick }) {
  return (
    <li
      onClick={() => onClick(value)}
      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
    >
      {value}
    </li>
  );
}

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// SelectValue component to display the selected value
export function SelectValue({ value }) {
  return <span className="text-gray-700">{value}</span>;
}

SelectValue.propTypes = {
  value: PropTypes.string,
};

export default Select;
