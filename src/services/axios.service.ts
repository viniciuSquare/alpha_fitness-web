import axios, { AxiosInstance } from "axios";

export class AxiosService {
  public axios: AxiosInstance;
  
  constructor(private resource: string) {
    this.axios  = axios.create({
      baseURL: `http://localhost:3001/${this.resource}`,
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
  
  async post(endpoint = '', data: any) {
    return this.axios.post(this.buildUrl(endpoint), data)
  }
}
