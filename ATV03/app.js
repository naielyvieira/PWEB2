import express from "express";
import productRoutes from './src/routes/productRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

export default app;