import { createContext } from 'react';

const UserInputContext = createContext({
  userInput: '',
  handleInputChange: () => {},
});

export default UserInputContext;
