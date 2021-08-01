import styled from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
`

export const InputStyled = styled.input`
  width: 100%;
  max-width: 480px;
  font-size: 21px;
  padding: 0.5rem;
  color: #1D1A05;
  text-align: center;
  border-radius: 20px;

  &:focus {
    outline:2px solid #749c75;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }

  @media (max-width: 625px) {
    font-size: 18px;
  }
`

export const FormTitle = styled.h1`
  color: #749c75;
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  & > span {
    color: white !important;
  }

  @media (max-width: 425px) {
    font-size: 23px;
  }

  @media (max-width: 625px) {
    font-size: 26px;
  }
`

export const FormLabel = styled.label`
  color: #749c75;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`

export const SendButton = styled.button`
  color: #749c75;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
`

export const SmallErrorMessage = styled.small`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`

export const FinishMessage = styled.h1`
  color: #1D1A05;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`