import { createContext } from 'react'

const UserContext = createContext('The default value '); // if no provider is used in parent default value will work

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer }
export default UserContext;