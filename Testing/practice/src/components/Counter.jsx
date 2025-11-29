import React from 'react'
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
    const { count, increment } = useCounter();
  return (
    <>


   <p data-testid="counter-value">{count}</p>
   <button onClick={() => increment(prev => prev+1)}>Increment</button>
    </>
  )
}

export default Counter