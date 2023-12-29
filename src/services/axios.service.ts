import axios, { AxiosInstance } from "axios";

export class AxiosService {
  public axios: AxiosInstance;
  
  constructor(private resource: string) {
    this.axios  = axios.create({
      baseURL: `http://192.168.0.104:3001/${this.resource}`,
      headers: {
        "Content-type": "application/json"
      }
    });
  }

  buildUrl(endpoint = '') {
    return `/${endpoint}`
  }

  async get(endpoint = '') {
    const url = this.buildUrl(endpoint);

    return await this.axios.get(url)
  }
  
  async post(data: any, endpoint = '') {
    return this.axios.post(this.buildUrl(endpoint), data)
  }
}
