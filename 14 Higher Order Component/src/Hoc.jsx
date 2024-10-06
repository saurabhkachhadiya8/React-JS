import React, { useState } from 'react'

const Hoc = (WrappedComponent) => {

    return () => {
        const [no, setNo] = useState(0);

        const Increment = () => {
            setNo(no + 1);
        }
        const Decrement = () => {
            no > 0 ? setNo(no - 1) : setNo(0);
        }

        return (
            <WrappedComponent
                no={no}
                increment={Increment}
                decrement={Decrement}
            >

            </WrappedComponent>
        )
    }
}

export default Hoc