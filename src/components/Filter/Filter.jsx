import { useDispatch, useSelector } from 'react-redux';
import { StyledBox, StyledLabel, StyledInput } from './Filter.styled';
import { getFilter } from '../../redux/selector';
import { addFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <StyledBox>
      <StyledLabel>Find contacts by Name </StyledLabel>
      <StyledInput
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </StyledBox>
  );
};

export default Filter;
