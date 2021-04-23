import Router from 'koa-router';
/*import blog from './blog';*/
import guest from './guest';

const api = new Router();

/*api.use('/blog', blog.routes());*/
api.use('/guest', guest.routes());

export default api;