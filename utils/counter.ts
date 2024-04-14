import { useEffect, useState } from 'react';

type Initializer<T> = T extends any ? T | ((prev: T) => T) : never;

type Store<State> = {
    get: () => State;
    set: (action: Initializer<State>) => State;
    subscribe: (callback: () => void) => () => void;
};

export const createStore = <State extends unknown>(
    initialState: Initializer<State>
): Store<State> => {
    let state =
        typeof initialState === 'function' ? initialState() : initialState;

    let callbacks = new Set<() => void>();

    const get = () => state;

    const set = (nextState: State | ((prev: State) => State)) => {
        state =
            typeof nextState === 'function'
                ? (nextState as (prev: State) => State)(state)
                : nextState;

        callbacks.forEach((cb) => cb());
        return state;
    };

    const subscribe = (cb: () => void) => {
        callbacks.add(cb);
        return () => {
            callbacks.delete(cb);
        };
    };

    return { get, set, subscribe };
};

export const useStore = <State extends unknown>(store: Store<State>) => {
    const [state, setState] = useState<State>(() => store.get());

    useEffect(() => {
        const unSubscribe = store.subscribe(() => {
            setState(store.get());
        });
        return unSubscribe;
    }, [store]);

    useEffect(() => {
        store.set(state as Initializer<State>);
    }, [state, store]);

    return [state, setState] as const;
};
