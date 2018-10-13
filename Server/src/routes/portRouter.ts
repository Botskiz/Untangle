import {Router, Request, Response} from 'express';

const router = Router();
const routerPath = '/port';

router.get('/', function (req: Request, res: Response) {
    res.send(routerPath + ': Home');
});

router.get('/all', function (req: Request, res: Response) {
    res.send(routerPath + ': All');
});

router.get('/:portId', function (req: Request, res: Response) {
    res.send(routerPath + ': ' + req.params);
});

export { router, routerPath };
