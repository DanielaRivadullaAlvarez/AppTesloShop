import type { User } from "@/interfaces/user.interface";

//Funciona para login, register, checkStatus
export interface AuthResponse {
  user: User;
  token: string;
}
