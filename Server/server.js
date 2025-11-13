import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/ToDoRoutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
  

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));   

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});      