export interface IUser {
  _id: string;
  name: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
  password: string;
}

export interface IUserMessage {
  message: string;
}

export interface IUserNavData {
  name: string;
  photo: string;
}

export interface ICreateUserDto extends Omit<IUser, '_id'> {}
export interface IUpdateUserDto extends Partial<IUser> {}
