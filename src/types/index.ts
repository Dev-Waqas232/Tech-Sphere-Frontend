export interface ApiResponse<T = undefined> {
  message: string;
  ok: boolean;
  data?: T;
}

export interface ApiResponseError {
  status: number;
  data: {
    message: string;
    ok: boolean;
  };
}

export interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface LoginResponse {
  user: User;
  token: string;
}
