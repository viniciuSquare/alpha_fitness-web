import { AxiosService } from "./axios.service";

/**
 * Abstraction on Axios Serice to fetch data from API
 */
export class BaseService extends AxiosService{
  // protected axiosService: AxiosService;
  constructor(
    serviceEndpoint: string
  ) {
    super(serviceEndpoint);
  }
}