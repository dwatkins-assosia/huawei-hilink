import fetch, {AxiosPromise} from 'axios';

import {HTTPMethod, RestCalls} from './restCalls';

const proxy = proxy: {
  host: '192.168.180.159',
  port: 3223
}

class DefaultRestCalls implements RestCalls {
  async fetchData(url: string, method: HTTPMethod, headers?: any): Promise<string> {
    const ret = await fetch({
      proxy,
      url,
      method,
      headers,
      transformResponse: (req) => req,
      withCredentials: true,
      timeout: 29000,
    });
    return ret.data;
  }

  async fetchDataRaw(url: string, method: HTTPMethod, headers?: any): Promise<AxiosPromise> {
    const ret = await fetch({
      proxy,
      url,
      method,
      headers,
      transformResponse: (req) => req,
      withCredentials: true,
      timeout: 29000,
    });
    return ret;
  }

  async sendData(url: string, method: HTTPMethod, data: string, headers?: any): Promise<string> {
    const ret = await fetch({
      proxy,
      url,
      method,
      data,
      transformResponse: (req) => req,
      headers,
      withCredentials: true,
      timeout: 29000,
    });
    return ret.data;
  }

  async sendDataRaw(url: string, method: HTTPMethod, data: string, headers?: any): Promise<AxiosPromise> {
    const ret = await fetch({
      proxy,
      url,
      method,
      data,
      transformResponse: (req) => req,
      headers,
      withCredentials: true,
      timeout: 29000,
    });
    return ret;
  }

}

export const restCalls = new DefaultRestCalls();
