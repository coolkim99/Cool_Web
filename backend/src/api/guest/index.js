import Router from 'koa-router';
import * as guestsCtrl from './guest.ctrl';

const guests = new Router();

guests.post('/', guestsCtrl.write);

export default guests;