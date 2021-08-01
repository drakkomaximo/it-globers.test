import { FC } from 'react'
import AppRouter from './router/app-router'
import { BrowserRouter } from 'react-router-dom';

export const Main: FC = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}
