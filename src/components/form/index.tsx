import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { SimpleContainerModal } from '../modal/simple-container.modal'
import {FinishMessage, FormLabel, FormStyled, FormTitle, InputStyled, SendButton, SmallErrorMessage} from './styles'

type FormValues = {
    fullName: string,
    email: string,
    cell: string,
    age: number
}

export const Form: FC = () => {
    const location = useLocation()
    const {register, handleSubmit, reset, formState: {
            errors
        }} = useForm < FormValues > ()
    const [open, setOpen] = useState(false)

    return(
    <>
    <FormStyled id = 'mainForm' onSubmit = {
        handleSubmit((data) => {
            console.log('response', data)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 5000);
            reset()
        })
    } > 

<FormTitle 
            > Hola, bienvenido, sabemos que quieres viajar en un <span>{location.pathname.substr(1)}</span>, por favor
            diligencia el siguiente formulario: 
        </FormTitle> 
        <hr style={{width: '100%'}}/>

    <FormLabel 
            htmlFor={'fullName'}> Nombre Completo: 
        </FormLabel> 
        < InputStyled 
            id = 'fullName' 
            placeholder = {
        'Ingrese su nombre completo'
    } {
        ...register('fullName', {
            required: 'Este campo es requerido',
            pattern: {
                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
                message: 'Solo puede ingresar letras'
            }
        })
    } /> {
        errors.fullName && <SmallErrorMessage> {
            errors.fullName.message
    } </SmallErrorMessage> } 
    
    <FormLabel htmlFor={'email'}> Email: </FormLabel >  < InputStyled {
        ...register('email', {
            required: 'Este campo es requerido',
            pattern: {
                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: 'Ingrese un email válido'
            }
        })
    }
    id = 'email' placeholder = {
        'Ingrese un email válido'
    } /> 
    {
        errors.email && <SmallErrorMessage> {
            errors.email.message
    } </SmallErrorMessage> }
    <FormLabel htmlFor={'cell'}> Celular: </FormLabel> <InputStyled {
        ...register('cell', {
            required: 'Este campo es requerido',
            pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
                message: 'Ingrese un número de celular válido'
            }
        })
    }
    id = 'cell' type = 'number' placeholder = {
        'Ingrese número de celular'
    } /> {
        errors.cell && <SmallErrorMessage> {
            errors.cell.message
    } </SmallErrorMessage> } <FormLabel htmlFor={'age'}> Edad: </FormLabel > <InputStyled {
        ...register('age', {
            valueAsNumber: true, required: 'Este campo es requerido', minLength: {
                value: 2, message: 'Ingrese una edad entre 18 y 100 años'
            }, maxLength: {
                value: 3, message: 'Ingrese una edad entre 18 y 100 años'
            }, min: {
                value: 18, message: 'Mínimo 18 años'
            }, max: {
                value: 100, message: 'Máximo 100 años'
            }
        })
    }
    id = 'age' type = 'number' placeholder = {
        'Ingrese edad entre 18 a 100 años'
    } /> 
    {
        errors.age && <SmallErrorMessage> {
                errors.age.message
        } </SmallErrorMessage> }
    <SendButton type = 'submit' form = 'mainForm'> 
        Enviar Datos
    </SendButton>
     </FormStyled >
     <SimpleContainerModal openModal={open}>
         <FinishMessage>Tu información fue enviada con éxito, estaremos en contacto contigo</FinishMessage>
     </SimpleContainerModal>
    </>
    )
}

