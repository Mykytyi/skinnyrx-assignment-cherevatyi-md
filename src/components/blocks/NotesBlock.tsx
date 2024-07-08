import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setNotes } from '../../redux/slices/user';


const NotesBlock = () => {
  const value = useAppSelector(state => state.userForm.notes);
  const dispatch = useAppDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    dispatch(setNotes(value));
  }

  return (
    <div className="pb-12">
      <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Note</label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows={3}
          value={value}
          onChange={handleOnChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default NotesBlock;
