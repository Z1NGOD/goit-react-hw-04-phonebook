import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
import { Text } from 'ui/Text.styled';
function Filter({ filter, onChange }) {
  return (
    <>
      <Text>Find Contact by Name</Text>
      <FilterInput value={filter} onChange={onChange}/>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
