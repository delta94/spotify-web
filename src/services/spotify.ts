export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '36693d1da6f54ad1bdb497cb4778fe48';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

interface IToken {
    access_token: string;
    token_type: string;
    expires_in: string;
}

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
        console.log(initial);
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        
        console.log(initial);
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

