// userStore.js

import {create} from 'zustand';

// Create a store
const useUserStore = create(set => ({
  userId: null,
  workerId:null,
  setUserId: (userId) => set({ userId }),
  setWorkerId : (workerId) => set({workerId})
}));

export default useUserStore;
