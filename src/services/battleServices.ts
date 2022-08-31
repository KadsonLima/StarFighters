import axios from 'axios';

export async function getFighter(username: string) {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    return data;
}
  