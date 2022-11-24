import { AppDispatch, RootState, } from "@src/store/store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";


export function useAppDispatch() {
    return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector