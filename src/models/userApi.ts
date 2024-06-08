// src/api/userApi.ts
import axios from 'axios';

const API_URL = 'http://localhost:8080/user';

export interface UserProfile {
  id: number;
  username: string;
  password: string;
  email: string;
  avatar: string | null;
  createTime?: string;
}

export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const response = await axios.get<{ code: number, msg: string, data: UserProfile }>(`${API_URL}/profile`, {
    headers: {
      'User-Token': token
    }
  });
  return response.data.data;
};

export const updateUserProfile = async (userProfile: UserProfile, token: string): Promise<UserProfile> => {
  const response = await axios.put<{ code: number, msg: string, data: UserProfile }>(`${API_URL}/profile`, userProfile, {
    headers: {
      'User-Token': token,
      'Content-Type': 'application/json'
    }
  });
  return response.data.data;
};
