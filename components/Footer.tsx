import styled from "styled-components";

export interface FooterProps {}

const StyledWrapper = styled.div`
    width: 100%;
    border-top: 1px solid var(--border-color);
    padding: 40px 15px;
    background-color: var(--footer-color);
`;

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0px 15px;
    margin: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
const StyledGrid = styled.div`
    width: 100%;
    /* max-width: 200px; */
    padding: 15px 0px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;
const StyledTitle = styled.div`
    width: 100%;
    font-size: 20px;
`;

const StyledImage = styled.img`
    width: 40px;
    border-radius: 4px;
    display: block;

    & + & {
        margin-left: 15px;
    }
`

const Footer = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledGrid>
                    <StyledImage
                        src="/logo-react-icon.png"
                        alt="logo react icon"
                    />
                    <StyledImage
                        src="/logo-nextjs-icon.png"
                        alt="logo nextjs icon"
                    />
                    <StyledImage
                        src="/logo-typescript-icon.png"
                        alt="logo typescript icon"
                    />
                    <StyledImage
                        src="/logo-mongodb-icon.png"
                        alt="logo mongodb icon"
                    />
                    <StyledImage
                        src="/logo-nodejs-icon.png"
                        alt="logo nodejs icon"
                    />
                </StyledGrid>
                <StyledTitle>Copyright © 2022 NGUYEN HOANG BAO</StyledTitle>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Footer;
