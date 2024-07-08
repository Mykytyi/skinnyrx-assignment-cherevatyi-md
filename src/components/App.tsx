import React from 'react';
import UserForm from './pages/UserForm';

function App() {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <div className="bg-white max-w-4xl min-h-screen border-x border-solid border-gray-200 p-12 w-full flex flex-col gap-20 items-center text-slate-700">
        <UserForm/>
      </div>
    </div>
  );
}

export default App;
