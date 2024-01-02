import axios, { AxiosInstance } from "axios";

export class AxiosService {
  public axios: AxiosInstance;
  public baseUrl: string;
  
  constructor(private resource: string) {
    this.baseUrl = `http://localhost:3001/${this.resource}`;

    this.axios  = axios.create({
      baseURL: this.baseUrl,
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
