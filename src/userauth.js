// userStore.js

import {create} from 'zustand';

// Create a store
const useUserStore = create(set => ({
  userId: null,
  workerId:null,
  workId : null,
  setUserId: (userId) => set({ userId }),
  setWorkId:(workId) => set({workId}),
  setWorkerId : (workerId) => set({workerId})
}));

export default useUserStore;
