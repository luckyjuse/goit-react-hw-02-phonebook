import PropTypes from 'prop-types';
import { FilterInput, Label } from './Filter.styled';

export const Filter = ({ filter, onSearch }) => {
  return (
    <Label>
      Find contact by name:
      <FilterInput type="text" value={filter} onChange={onSearch} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
