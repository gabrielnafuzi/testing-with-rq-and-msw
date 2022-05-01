import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})
