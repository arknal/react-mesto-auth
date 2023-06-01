export interface IMesto {
  name: string;
  link: string;
  owner: string;
  likes: IUser[];
  comments: IFeedback[];
  _id: string;
  createdAt: string;
}
export interface IFeedback {
  user: string;
  message: string;
  _id: string;
  createdAt: string;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  about: string;
  avatar: string;
}
