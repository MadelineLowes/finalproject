import { createContext, useState } from 'react';

const myCauseContext = createContext();


export const myCauseProvider = ({children}) => {
    const [myCause, setMyCause] = useState(null);

    return (
        <myCauseContext.Provider value={{ myCause, setMyCause }}>
            { children }
        </myCauseContext.Provider>
    );
}

export default myCauseContext;

