import { create } from "zustand";
import { TabContent } from "../components/common/Tab";

interface DateTabStore {
  selectedDateId: number;
  dates: TabContent[];
  selectDate: (id: number) => void;
}

const useDateTab = create<DateTabStore>((set) => ({
  selectedDateId: 0,
  dates: [
    { id: 0, title: "22일 티켓" },
    { id: 1, title: "23일 티켓" },
  ],
  selectDate: (id: number) => {
    set({ selectedDateId: id });
  },
}));

export default useDateTab;
