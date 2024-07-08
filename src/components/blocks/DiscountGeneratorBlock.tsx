import { useState } from 'react';
import generateDiscount from '../../utils/generateDiscount';

const DiscountGeneratorBlock = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  const handleOnClick = () => {
    setGeneratedCode(generateDiscount());
  }

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Discount code generator</h2>
      <button
        type="button"
        className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleOnClick}
      >
        Generate code
      </button>
      <p className="mt-4 text-sm leading-6 text-gray-600">Generated code: {generatedCode}</p>
    </div>
  );
}

export default DiscountGeneratorBlock;
