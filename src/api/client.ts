export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type headers = {Authorization: string}


export const apiGet = async <T>(
  baseUrl: string,
  path: string,
  headers?: headers,
): Promise<T> => {
    const response = await fetch(`${baseUrl}${path}`, { headers });

    if (!response.ok) {
        throw new ApiError(`Request failed with status ${response.status}`, response.status,);
    }
    return (await response.json()) as T;
};