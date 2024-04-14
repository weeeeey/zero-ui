'use client';
import React, { useEffect } from 'react';

import * as Counter from '@/utils/counter';
// import { State } from '@/utils/counter';

const MainP = () => {
    return (
        <>
            <Com1 />
            <Com2 />
        </>
    );
};

const store = Counter.createStore({ count: 0 });

const Com1 = () => {
    const [state, setState] = Counter.useStore(store);

    const handleClick = () => {
        setState((prev) => ({ count: prev.count + 1 }));
    };
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={handleClick}>+</button>
        </div>
    );
};
const Com2 = () => {
    const [state, setState] = Counter.useStore(store);

    const handleClick = () => {
        setState((prev) => ({ count: prev.count + 1 }));
    };
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={handleClick}>+</button>
        </div>
    );
};

export default MainP;
