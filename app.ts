if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT: number = parseInt(process.env.PORT?.toString() || '3000');
app.listen(PORT, () =>{
    console.log(`Hospital Dashboard = listen to port:`, PORT)
})

export default app;
