import axios from 'axios';

const Api = axios.create({});

export const Get = async (url) => (
    await Api.get(url)
)