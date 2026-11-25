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
        throw new ApiError(`Request failed with status ${response.status}`, response.status,)
    };
    return (await response.json()) as T;
};

export const apiPost = async <T>(
  baseUrl: string,
  path: string,
  body: unknown,
): Promise<T> => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    }
  );
    if (!response.ok) {
      throw new ApiError(`Request failed with status ${response.status}`, response.status,)
    };
  return (await response.json()) as T;
};

export const authApiPost = async <T>(
  baseUrl: string,
  path: string,
  body: unknown,
  token: string
): Promise<T> => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}`},
    body: JSON.stringify(body),
    }
  );
    if (!response.ok) {
      throw new ApiError(`Request failed with status ${response.status}`, response.status,)
    };
  return (await response.json()) as T;
};

export const  authApiDel = async <T>(
  baseUrl: string,
  path: string,
  token: string
): Promise<T> => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    }
  );
   if (!response.ok) {
      throw new ApiError(`Request failed with status ${response.status}`, response.status,)
    };
  return (await response.json()) as T;
}