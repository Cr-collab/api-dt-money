import express from 'express';
import cors from 'cors';
import "reflect-metadata"
import { router } from '../routes';

import '../../container'



const app = express();

app.use(cors()); 

app.use(express.json());

app.use(router)


app.listen(3334, () => console.log(` Server is Running in Port 3334 `));

