// src/components/ui/checkbox.jsx
import PropTypes from 'prop-types';

export function Checkbox({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
};

export default Checkbox;
