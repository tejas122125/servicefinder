// userStore.js

import {create} from 'zustand';

// Create a store
const useUserStore = create(set => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
}));

export default useUserStore;
