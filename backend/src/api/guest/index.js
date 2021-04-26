import Router from 'koa-router';
import * as guestsCtrl from './guest.ctrl';

const guests = new Router();


guests.post('/', guestsCtrl.write);
guests.patch('/', guestsCtrl.update);
guests.get('/check', guestsCtrl.check);
guests.get('/', guestsCtrl.list);

export default guests;