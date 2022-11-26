import Head from "next/head"
import styled from "styled-components"
import MainLayout from "../../components/layouts/MainLayout"
import { GridIcon, StydedButton, StyledContainer, StyledDevider, StyledFormGroup, StyledFormTitle, StyledImgae, StyledInput, StyledWrapper } from "../../components/layouts/ShareStyled"
import { iconFacebook, iconGithub, iconGoogle } from "../../public/icons"


export interface RegisterProps {

}

export const StydelForm = styled.form`
    width: 100%;
    max-width: 650px;
    min-height: 500px;
    margin: 15px auto;
    padding: 40px;
    border-radius: 4px;
    background-color: var(--bg-form-color);
    box-shadow: var(--shadow-form-color);

    transition: all 0.2s;
`

const Register = () => {

    return (
        <MainLayout>
            <Head>
                <title>Login - HoBa</title>
            </Head>
            <StyledWrapper>
                <StyledContainer>

                    <StydelForm>

                        <StyledImgae height="60px" src="/logo-hb.png" alt="logo hb"/>

                        <StydedButton size="15px" textColor="#ffff" bg="#df4930" bgHover="#cd452e">
                            <GridIcon>{iconGoogle}</GridIcon>
                            Continute width Google
                        </StydedButton>
                        <StydedButton size="15px" textColor="#ffff" bg="" bgHover="">
                            <GridIcon>{iconFacebook}</GridIcon>
                            Continute width FaiconFacebook
                        </StydedButton>
                        <StydedButton size="15px" textColor="#ffff" bg="#24292e" bgHover="#222">
                            <GridIcon>{iconGithub}</GridIcon>
                            Continute width GiticonGithub
                        </StydedButton>

                        <StyledDevider />

                        <StyledFormGroup>
                            <StyledFormTitle htmlFor="inputFullName">Full Name</StyledFormTitle>
                            <StyledInput id="inputFullName"/>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <StyledFormTitle htmlFor="inputUsername">Username</StyledFormTitle>
                            <StyledInput id="inputUsername"/>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <StyledFormTitle htmlFor="inputPassword">Password</StyledFormTitle>
                            <StyledInput id="inputPassword"/>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <StyledFormTitle htmlFor="inputRePassword">Confirm Password</StyledFormTitle>
                            <StyledInput id="inputRePassword"/>
                        </StyledFormGroup>

                        <StydedButton size="15px" textColor="#ffff">Register</StydedButton>

                    </StydelForm>

                </StyledContainer>
            </StyledWrapper>
        </MainLayout>
   )
}

export default Register