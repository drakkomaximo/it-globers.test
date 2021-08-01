import {FC} from 'react'
import { WelcomeContainer, WelcomeContainerInfo, WelcomeDescription, WelcomeTitle } from './styles'

export const Welcome: FC = () => {
    return (
        <WelcomeContainer>
            <WelcomeContainerInfo>
            <WelcomeTitle>
                Bienvenidos a ITGlobers, esta app te permite escoger un viaje, pero antes de eso necesitamos tus datos personales.
            </WelcomeTitle>
            <WelcomeDescription>Es hora de elegir el operador que desees</WelcomeDescription>
            </WelcomeContainerInfo>
        </WelcomeContainer>
    )
}

