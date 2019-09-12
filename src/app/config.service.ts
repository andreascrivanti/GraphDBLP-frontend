import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private BACKEND_ENDPOINT = 'http://localhost:8081';
  private NEO4J_ENDPOINT = 'http://localhost:7474';
  constructor() { }
  getBackendEndpoint() {
    return this.BACKEND_ENDPOINT;
  }
  getNeo4jEndpoint() {
    return this.NEO4J_ENDPOINT;
  }
}
