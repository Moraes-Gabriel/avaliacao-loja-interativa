import { useAxios } from "./use-axios.hook";

export function useHttp(baseURL, headers) {
  const instance = useAxios(baseURL, headers);
  
  async function get(url, headers) {
    try {
      const response = await instance.get(url,headers);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function post(url, data, headers) {
    try {
      const response = await instance.post(url, data, headers);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

 
  async function put(url, data,headers) {
    try {
      const response = await instance.put(url, data,headers);
      return response.data;
    } catch (error) {
     console.log(error);
    }
  }

  async function deletar(url, data) {
    try {
      const response = await instance.delete(url,data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    get,
    post,
    put,
    deletar
  };
}
