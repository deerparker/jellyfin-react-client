import ApiClient from 'jellyfin-apiclient/dist/apiclient';

let apiClient = new ApiClient(null, '-', "Jellyfin Music", "0.0.1", "WebNG", "WebNG", "")

export function getApiClient(): ApiClient {
  return apiClient
}

export function setApiClient(client: ApiClient) {
  apiClient = client;
}
