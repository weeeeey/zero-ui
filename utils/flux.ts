interface StoreState {
    count: number;
}
type Action = {
    type: 'INCREMENT' | 'DECREMENT';
    payload: number;
};

export function reducer(prevState: StoreState, action: Action) {
    const { type: ActionType, payload } = action;
    if (ActionType === 'INCREMENT') {
        return { count: prevState.count + payload };
    }
    if (ActionType === 'DECREMENT') {
        return { count: prevState.count - payload };
    }

    throw new Error('Invalid action type');
}
