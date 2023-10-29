import { atom } from 'recoil';
import { User } from '../UserList/user';

export const modalOpenAtom = atom({
    key: 'modalOpenAtom',
    default: false,
});

export const selectedUserAtom = atom<User | null>({
    key: 'selectedUserAtom',
    default: null,
});
