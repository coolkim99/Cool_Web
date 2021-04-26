import client from './client';
import qs from 'qs';

export const write = ({ guestname, text, password }) =>
    client.post('/api/guest', {guestname, text, password});

/*
export const update = ({id, guestname, text, password}) =>
    client.patch(`/api/guest/${id}`, {
        guestname,
        text,
        password,
});
*/

export const list = ({ guestname, page }) => {
    const queryString = qs.stringify({
        guestname,
        page
    });
    return client.get(`/api/guest/${queryString}`);
};