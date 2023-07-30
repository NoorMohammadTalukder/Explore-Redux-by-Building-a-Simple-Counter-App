import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/state/counterSlice';

const Counter = () => {
    const dispatch=useDispatch();
    const countValue=useSelector((state)=>state.counter.countValue);

    return (
        <div className='card'>
           <div className='card-header bg-secondary'>
                <h1 className='text-white'>Redux Counter App</h1>
           </div>
           <div className='card-body'>
                    <h2>{countValue}</h2>
                    <div className='my-4'>
                        <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>Increase</button>
                        <button className='mx-2 btn btn-danger' onClick={()=>{dispatch(decrement())}}>Decrease</button>
                    </div>
                </div>
        </div>
    );
};

export default Counter;