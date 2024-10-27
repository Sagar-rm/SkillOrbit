// src/components/ui/switch.jsx
import PropTypes from 'prop-types';

export function Switch({ isOn, onToggle, label }) {
  return (
    <label className="flex items-center space-x-2">
      <span className="text-gray-700">{label}</span>
      <div
        className={`relative inline-block w-10 h-6 transition duration-200 ease-linear rounded-full ${
          isOn ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={onToggle}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 transform transition-transform duration-200 ease-linear rounded-full bg-white ${
            isOn ? 'translate-x-4' : ''
          }`}
        />
      </div>
    </label>
  );
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Switch;
