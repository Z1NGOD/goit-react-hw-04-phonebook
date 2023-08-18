import { useContext } from 'react';
import { FilterInput } from './Filter.styled';
import { Text } from 'ui/Text.styled';
import { Context } from 'components/Context/StateContext';
function Filter() {
  const {filter, onChange} = useContext(Context);
  return (
    <>
      <Text>Find Contact by Name</Text>
      <FilterInput value={filter} onChange={onChange} />
    </>
  );
}


export default Filter;
