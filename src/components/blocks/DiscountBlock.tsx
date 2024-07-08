import { ChangeEvent, useState } from 'react';
import { discountPattern } from '../../constants';

const DiscountBlock = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleOnBlur = () => {
    if (!discountPattern.test(inputValue)) {
      setIsValid(false);
    }
    if (discountPattern.test(inputValue)) {
      setIsValid(true);
    }
  }

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Discount text box</label>
      <div className="mt-2">
        <div className={`relative flex rounded-md shadow-sm ring-1 ring-inset ${isValid === false ? 'ring-red-500' : 'ring-gray-300'} focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}>
          <input
            type="text"
            name="discount"
            id="discount"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Discount"
            value={inputValue}
            onChange={handleUserInput}
            onBlur={handleOnBlur}
          />
          {isValid === false && (<p className="absolute top-9 text-sm leading-6 text-red-500">Invalid discount, please, try another one</p>)}
        </div>
      </div>
    </div>
  );
};

export default DiscountBlock;
