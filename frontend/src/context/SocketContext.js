import React, {createContext, useContext} from 'react'
import io from 'socket.io-client';

const SocketContext = createContext();

const ENDPOINT = "http://localhost:8080";

const socket = io(ENDPOINT)

export const SocketContextProvider = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export function useSocketContext() {
    const context = useContext(SocketContext);
  
    if(!context){
      console.error('Error deploying App Context!!!');
    }
  
    return context;
}

export default useSocketContext;
