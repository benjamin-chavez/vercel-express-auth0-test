"use strict";
// server/src/routes/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const router = (0, express_1.Router)();
router.get('/', (0, express_async_handler_1.default)(async (req, res, next) => {
    res.status(200).send('Server Running...');
}));
router.get('/private-route', (0, express_async_handler_1.default)(async (req, res, next) => {
    res.status(200).send({ message: 'This is a private route' });
}));
exports.default = router;
