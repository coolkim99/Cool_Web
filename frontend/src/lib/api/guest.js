import client from './client';

export const write = ({ guestname, text, password, }) =>
    client.post('/api/guest', {guestname, text, password});

/*
export const update = ({id, guestname, text, password}) =>
    client.patch(`/api/guest/${id}`, {
        guestname,
        text,
        password,
});
*/
