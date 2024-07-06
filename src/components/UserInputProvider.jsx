import React, { useState } from 'react';
import UserInputContext from './UserInputContext';

const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (newValue) => {
    setUserInput(newValue);
  };

  return (
    <UserInputContext.Provider value={{ userInput, handleInputChange }}>
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputProvider;
