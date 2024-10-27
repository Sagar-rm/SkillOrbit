// src/components/ui/slider.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Slider({ min = 0, max = 100, step = 1, value, onChange }) {
  const [sliderValue, setSliderValue] = useState(value || min);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
      <span className="mt-2 text-sm text-gray-700">{sliderValue}</span>
    </div>
  );
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
