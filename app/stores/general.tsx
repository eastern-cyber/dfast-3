import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import { RandomUsers } from '../types';

interface GeneralStore {
    isLodingOpen: boolean,
    isEditProfileOpen: boolean,
    randomUsers: RandomUsers[]
    setIsLoginOpen: (val: boolean) => void,
    setIsEditProfileOpen: (val: boolean) => void,
    setRandomUsers: () => void,
}