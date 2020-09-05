export interface IPlaylist {
    items: { name: string }[];
}

interface IinitialState {
    user: string;
    playlists: IPlaylist;
    playing: boolean;
    item: string;
    token: string;
}

interface IAction {
    type: string;
    user: string[];
    token: string;
    playlists: object;
}

const reducer = (state: IinitialState, action: IAction) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        default:
            return state;
    }
}

export default reducer;