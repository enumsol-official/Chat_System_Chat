"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const socket_module_1 = require("./sockets/socket.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'));
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    app.useWebSocketAdapter(new socket_module_1.SocketAdapter(app));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map