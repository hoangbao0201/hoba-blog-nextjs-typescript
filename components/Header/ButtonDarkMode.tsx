import { useEffect, useState } from "react";
import styled from "styled-components";
import { iconMoon, iconSun } from "../../public/icons";

export interface ButtonDarkModeProps {}

const StyledButtonMode = styled.div`
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    -webkit-user-select: none;

    transition: 0.2s ease;

    &:hover {
        background-color: var(--bg-hover-color);
    }
`
const StyledIcons = styled.div`
    > svg {
        width: 20px;
        height: 20px;
        display: block;
        fill: var(--text-title-color);
    }
`

const ButtonDarkMode = () => {
    const [isEnabled, setIsEnable] = useState<boolean>(false);
    const toogleState = () => {
        setIsEnable((value) => !value);
    };

    useEffect(() => {
        if (isEnabled) {
            localStorage.setItem("darkmode", "true");
        } else {
            localStorage.setItem("darkmode", "false");
        }
    }, [isEnabled]);

    return (
        <StyledButtonMode onClick={toogleState}>
            <StyledIcons>
                {isEnabled ? iconMoon : iconSun }
            </StyledIcons>
        </StyledButtonMode>
    );
};

export default ButtonDarkMode;
