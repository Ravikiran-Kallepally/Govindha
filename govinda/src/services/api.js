// Backend API service — connects to our Node.js server which calls Groq
const API_BASE = __DEV__
  ? 'http://localhost:3001'
  : 'https://your-govinda-api.railway.app'; // replace after deploy

export const askGovinda = async (messages) => {
  const response = await fetch(`${API_BASE}/api/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error('Failed to get response from Govinda');
  }

  const data = await response.json();
  return data.reply;
};

export const getHealthCheck = async () => {
  const response = await fetch(`${API_BASE}/health`);
  return response.ok;
};
