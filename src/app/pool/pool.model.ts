import { User } from '../user/user.model';

export interface Pool {
  id: string;
  name: string;
  lastRoll: string;
  balance: number;
  winner: string;
  users: User[];
  chanceToBust: number;
  hasBusted: boolean;
  isTimed: boolean;
  dailyCost: number;
}
