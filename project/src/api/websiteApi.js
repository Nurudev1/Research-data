import axios from 'axios';
import { API_URL } from './config';

export async function analyzeWebsite(url) {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { url });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to analyze website');
  }
}