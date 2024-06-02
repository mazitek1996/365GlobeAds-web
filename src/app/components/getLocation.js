import axios from 'axios';

export const getLocation = async () => {
  try {
    const response = await axios.get(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_TOKEN}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the location', error);
    return null;
  }
};
