import Head from "next/head";
import styled from "styled-components";
import MainLayout from "../../components/layouts/MainLayout";
import { iconFacebook, iconGithub, iconGoogle } from "../../public/icons";

export interface LoginProps {}

interface ButtonProps {
    bg?: string;
    boxSd?: string;
    width?: string;
    size?: string;
    bgHover?: string;
    textColor?: string;
    textHoverColor?: string;
}

const StyledWrapper = styled.div`
    width: 100%;
`;
const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0px 15px;
`;

// Form

const StydelForm = styled.form`
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
const StydedButton = styled.div`
    width: 100%;
    height: 46px;
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    position: relative;

    max-width: ${({ width }) => (width ? width : "100%")};
    font-size: ${({ size }) => (size ? size : "18px")};
    background-color: ${({ bg } : ButtonProps) => (bg ? bg : "#3b49df")};
    color: ${({ textColor } : ButtonProps) => (textColor ? textColor : "")};
    box-shadow: 0px 0px 0px 1px ${({ boxSd }) => (boxSd ? boxSd : "rgba(0, 0, 0, 0.1)")};

    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
        margin-top: 15px;
    }
    :hover {
        color: ${({ textHoverColor } : ButtonProps) => (textHoverColor ? textHoverColor : "")};
        background-color: ${({ bgHover } : ButtonProps) => (bgHover ? bgHover : "#1c2de2")};
    }
`
const GridIcon = styled.div`
    left: 0px;
    padding: 0px 15px;
    border-right: 1px solid #ccc;
    position: absolute;
    > svg {
        width: 20px;
        display: block;
        fill: #ffff
    }
`

// Form logo

const StyledImgae = styled.img`
    height: 60px;
    display: block;
    margin: 0px auto;
    margin-bottom: 25px;
`

// Form Input
const StyledFormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
`
const StyledInput = styled.input`
    width: 100%;
    height: 46px;
    padding-left: 20px;
    font-size: 17px;

    :focus {
        border-color: var(--focus-input-border-color);
        box-shadow: var(--focus-input-box-shadow-color);
    }
`
const StyledFormTitle = styled.label`
    font-size: 17px;
    font-weight: 600;
    padding: 0px 10px 10px 5px;
    cursor: pointer;
    background-color: var(--bg-form-color);

    transition: all 0.2s ease;
`

// Devider

const StyledDevider = styled.div`
    width: 100%;
    padding: 20px 0px;
    border-color: var(--border-color);
`


const Login = () => {
    return (
        <MainLayout>
            <Head>
                <title>Login - HoBa</title>
            </Head>
            <StyledWrapper>
                <StyledContainer>

                    <StydelForm>

                        <StyledImgae src="/logo-hb.png" alt="logo hb"/>

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
                            <StyledFormTitle htmlFor="inputUsername">Username</StyledFormTitle>
                            <StyledInput id="inputUsername"/>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <StyledFormTitle htmlFor="inputPassword">Password</StyledFormTitle>
                            <StyledInput id="inputPassword"/>
                        </StyledFormGroup>

                        <StydedButton size="15px" textColor="#ffff">Login</StydedButton>
                        
                    </StydelForm>

                </StyledContainer>
            </StyledWrapper>
        </MainLayout>
    );
};

export default Login;
