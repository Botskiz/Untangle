"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
const routerPath = '/port';
exports.routerPath = routerPath;
router.get('/', function (req, res) {
    res.send(routerPath + ': Home');
});
router.get('/all', function (req, res) {
    res.send(routerPath + ': All');
});
router.get('/:portId', function (req, res) {
    res.send(routerPath + ': ' + req.params);
});
//# sourceMappingURL=portRouter.js.map