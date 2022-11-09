import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './api/server.service';


(async () => {
  try {
    await mongoose.connect('mongodb+srv://pma:pma@cluster0.drvaldg.mongodb.net/?retryWrites=true&w=majority');
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
