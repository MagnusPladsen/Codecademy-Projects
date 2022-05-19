import React from 'react';

let userAccessToken = '';
const clientID = 'f30a31fbbe0b471a9ddd4faaab7311d6';
const queryURL = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';
const finalQ = `${queryURL}?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

class Spotify extends React.Component {
    getAccessToken() {
        if (userAccessToken) {
            return userAccessToken;
        } if (!userAccessToken) {
            const getToken = window.location.href.match(/access_token=([^&]*)/);
            const getExpire = window.location.href.match(/expires_in=([^&]*)/);
            if (getToken && getExpire) {
                userAccessToken = getToken[1];
                const expiresIn = Number(getExpire[1]);
                window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                window.location = finalQ;
            }
        }
    };
    search(term){
        let acctok = this.getAccessToken();
        return fetch('https://api.spotify.com/v1/search?type=track&q='+term, {headers: {Authorization: `Bearer ${acctok}`}}).then(
                Response => Response.json()).then(
                jsonResponse => {return jsonResponse.tracks.items.map(track =>(
             {
             id: track.id,
             name: track.name,
             artist: track.artists[0].name,
             album: track.album.name,
             uri: track.uri
             }
             )
             );
         });
    };
    savePlaylist(playlistName, trackURIs) {
        if (playlistName && trackURIs) {
            const accessToken = this.getAccessToken();
            let header = {Authorization: `Bearer ${accessToken}`};
            let userID = '';
            return fetch('https://api.spotify.com/v1/me',{headers: header}).then(
                Response => Response.json()).then(
                    jsonResponse => {
                        userID = jsonResponse.id;
                        console.log(userID);
                        return fetch('https://api.spotify.com/v1/users/'+userID+'/playlists'),{
                            headers: header,
                            method: 'POST',
                            body: JSON.stringify({name: playlistName})
                        }.then(postPl => postPl.json()).then(playlistres => {
                            let playlistID = playlistres.id;
                            console.log(playlistID);
                            fetch('https://api.spotify.com/v1/users/'+userID+'playlists/'+playlistID+'/tracks',{
                                headers: header,
                                method: 'POST',
                                body: JSON.stringify({uris: trackURIs})
                            });
                        })
                    }
                )
        } else {
            return;
        }
    };
}

export default Spotify;