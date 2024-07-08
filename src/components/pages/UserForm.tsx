import React from 'react';
import RadioGroup from '../blocks/RadioGroup';
import DiscountBlock from '../blocks/DiscountBlock';
import DiscountGeneratorBlock from '../blocks/DiscountGeneratorBlock';
import NotesBlock from '../blocks/NotesBlock';


const UserForm = () => {
  return (
    <form className="w-full space-y-12">
      <RadioGroup />

      <DiscountBlock />

      <DiscountGeneratorBlock />

      <NotesBlock />
    </form>
  );
}

export default UserForm;
