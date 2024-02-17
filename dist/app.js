"use strict";
// server/src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_flash_1 = __importDefault(require("express-flash"));
const morgan_1 = __importDefault(require("morgan"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const index_1 = __importDefault(require("./routes/index"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
const baseUrl = process.env.AUTH0_BASE_URL;
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({ origin: baseUrl }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, express_flash_1.default)());
app.use('/api', authMiddleware_1.checkJwt, index_1.default);
app.use(errorMiddleware_1.notFoundHandler);
app.use(errorMiddleware_1.generalErrorHandler);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
// export default app;
module.exports = app;
