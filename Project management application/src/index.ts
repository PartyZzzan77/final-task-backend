import mongoose from 'mongoose';
import { MONGO_CONNECTION_STRING, PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
