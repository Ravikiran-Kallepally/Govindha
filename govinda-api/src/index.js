require('dotenv').config();
const express = require('express');
const cors = require('cors');
const askRouter = require('./routes/ask');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50kb' }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Govinda API', timestamp: new Date().toISOString() });
});

app.use('/api/ask', askRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🪈 Govinda API running on port ${PORT}`);
});
