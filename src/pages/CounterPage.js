import React from 'react';
import Counter from '../components/counter/Counter';

const CounterPage = () => {
    return (
        <div className='mt-5 container'>
           <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                    <Counter></Counter>
                </div>
           </div>
        </div>
    );
};

export default CounterPage;