const spotifyAccountsBaseUri = "https://accounts.spotify.com";
const clientId = "yourClientId";
const clientSecret = "yourClientSecret";

async function getSpotifyToken() {
    const tokenEndpoint = `${spotifyAccountsBaseUri}/api/token`;
    const headers = new Headers({
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    const body = new URLSearchParams({
        'grant_type': 'client_credentials'
    });

    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: headers,
        body: body.toString()
    });

    if (!response.ok) {
        throw new Error(`Failed to get token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

// Usage example
getSpotifyToken()
    .then(token => console.log(`Access Token: ${token}`))
    .catch(error => console.error(`Error: ${error.message}`));
