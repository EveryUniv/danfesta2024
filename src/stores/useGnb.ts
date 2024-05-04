import { create } from "zustand";

interface GnbStore {
  isOpened: boolean;
  open: () => void;
  close: () => void;
}

const useGnb = create<GnbStore>((set) => ({
  isOpened: false,
  open: () => {
    set({ isOpened: true });
  },
  close: () => {
    set({ isOpened: false });
  },
}));

export default useGnb;
