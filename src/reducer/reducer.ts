interface IinitialState {
    user: string;
    playlist: [];
    playing: boolean;
    item: string;
    token: string;
}

interface IAction {
    type: string;
    user: string[];
    token: string;
}

const reducer = (state: IinitialState, action: IAction) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }
}

export default reducer;