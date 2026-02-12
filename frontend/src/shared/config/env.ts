const defaultApiUrl = 'http://localhost:3000';

export const env = {
  apiUrl: import.meta.env.VITE_API_URL ?? defaultApiUrl,
};

