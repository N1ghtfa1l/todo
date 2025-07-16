'use client'
import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { mainStore } from "../store"


interface IProps {
    children: ReactNode
}

export const MainProviders: FC<IProps> = ({ children }) => {

    return (
        <Provider store={mainStore}>
            {children}
        </Provider>
    )

}