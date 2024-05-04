import axios, { AxiosResponse } from 'axios';

async function fetchData<T>(url: string): Promise<T> {
 try {
  const response: AxiosResponse<T> = await axios.get(url);
  return response.data;
 } catch (error) {
  throw new Error(`Error fetching from ${url}: ${error}`);
 }
}

interface IMyData {
 name: string;
 age: number;
}

const myData: IMyData = await fetchData<IMyData>('https://example.com/data');

console.log(myData);