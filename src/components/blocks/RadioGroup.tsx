import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setOption } from '../../redux/slices/userForm';

const RadioGroup = () => {
  const value = useAppSelector(state => state.userForm.option);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOption(event.target.id));
  }

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Options</h2>

      <div className="space-y-10">
        <fieldset>
          <div className="my-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="option-1"
                name="user-option"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleChange}
              />
              <label htmlFor="option-1" className="block text-sm font-medium leading-6 text-gray-900">Option 1</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="option-2"
                name="user-option"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleChange}
              />
              <label htmlFor="option-2" className="block text-sm font-medium leading-6 text-gray-900">Option 2</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="option-3"
                name="user-option"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={handleChange}
              />
              <label htmlFor="option-3" className="block text-sm font-medium leading-6 text-gray-900">Option 3</label>
            </div>
          </div>

          <h3 className="text-sm font-semibold leading-6 text-gray-900">Redux option:</h3>
          <p className="mt-1 text-sm leading-6 text-gray-600">{value || 'none'}</p>
        </fieldset>
      </div>
    </div>
  );
}

export default RadioGroup;
