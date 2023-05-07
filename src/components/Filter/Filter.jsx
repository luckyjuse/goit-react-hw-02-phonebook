import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onSearch }) => {
  return (
    <label>
      Find contact by name:
      <FilterInput type="text" value={filter} onChange={onSearch} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
