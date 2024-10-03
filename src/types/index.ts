export interface ApiResponse<T = undefined> {
  message: string;
  ok: boolean;
  data?: T;
}

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
