export interface User {
  id: number;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginRequest {
  username: User['username'];
  password: User['password'];
}