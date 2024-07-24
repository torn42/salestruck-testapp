export interface MainState {
  commentsStatus: Status;
  postsStatus: Status;
  posts: Post[];
  comments: Comment[];
}

export interface EmployeeState {
  status: Status;
  employees: Employee[];
}

export interface ProfileState {
  status: Status;
  profile: Employee;
  isEditing: boolean;
  tempProfile: null | Employee;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
}