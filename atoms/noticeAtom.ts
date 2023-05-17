import { atom } from "recoil";

export const lastArticleIdState = atom<number>({
    key: "lastArticleIdState",
    default: 9999,
});

export const sizeState = atom<number>({
    key: "size",
    default: 20,
})
