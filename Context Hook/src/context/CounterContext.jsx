import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const Counter = ({ children }) => {

    const [no, setNo] = useState(0);

    return (
        <CounterContext.Provider value={no}>
            {children}
        </CounterContext.Provider>
    )
}

// custom hook
const useCounter = () => {
    return useContext(CounterContext);
}

export { Counter, useCounter }