import { User } from '../models/User';
export function userAdapter(data: any) {
  const adaptedUser: User = {
    id: data.id,
    name: data.name,
    email: data.email,
    image: data.image,
    role: data.role,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
  return adaptedUser;
}
