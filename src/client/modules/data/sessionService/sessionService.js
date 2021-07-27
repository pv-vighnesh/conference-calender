const URL = 'https://salesforce-conference-api.herokuapp.com/api/sessions';

let sessions = [];

export const getSessions = () => fetch(URL)
.then(response => {
    if (!response.ok) {
        throw new Error('No Response from Server');
    }
    return response.json();
})
.then(result => {
    sessions = result.data;
    return sessions;
});
console.log('sessions::',sessions);

export const getSession = sessionId => {
    return sessions.find(session => {
        return session.id === sessionId;
    });
}


