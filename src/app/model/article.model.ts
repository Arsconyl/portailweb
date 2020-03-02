import User from './user.model';

export default interface Article {
  author: User;
  title: string;
  content: string;
}
