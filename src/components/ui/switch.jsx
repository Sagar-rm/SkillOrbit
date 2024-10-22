import React from 'react'

function Switch({ id, checked, onChange, label }) {
  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${
            checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
          }`}></div>
          <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
            checked ? 'transform translate-x-6' : ''
          }`}></div>
        </div>
        {label && (
          <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
        )}
      </label>
    </div>
  )
}
export default Switch;