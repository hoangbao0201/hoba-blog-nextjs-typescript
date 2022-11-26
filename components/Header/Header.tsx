import styled from "styled-components";
import ButtonDarkMode from "./ButtonDarkMode";

import Navbar from "./Navbar";
import Accout from "./Accout";

export interface HeaderProps {}

const StyledWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--header-color);
`;

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    height: var(--header-height);
    padding: 0px 15px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const StyledGrid = styled.div`
    display: flex;
    align-items: center;
`;
const StyledInput = styled.input`
    padding: 10px 15px;
    border-radius: 6px;
`;

const Header = () => {
    return (
        <StyledWrapper>
            <StyledContainer>

                <StyledGrid>
                    <Navbar />
                    Header
                </StyledGrid>

                <StyledGrid>
                    <StyledInput />
                    <ButtonDarkMode />
                </StyledGrid>

                <StyledGrid>
                    <Accout />
                </StyledGrid>

            </StyledContainer>
        </StyledWrapper>
    );
};

export default Header;
