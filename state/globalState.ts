
import { create } from 'zustand';

type GlobalState = {
    pageIndex: number;
    setPageIndex: (val: number) => void
    scrollPosition: number;
    setScrollPosition: (val: number) => void
}

export const useGlobalState = create<GlobalState>((set) => ({
    pageIndex: 0,
    setPageIndex(pageIndex) {
        set({ pageIndex });
    },
    scrollPosition: 0,
    setScrollPosition(scrollPosition) {
        set({ scrollPosition });
    },
}))