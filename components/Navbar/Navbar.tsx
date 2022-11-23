import { useRef, useState } from "react";
import classNames from "classnames/bind";

import styled from "styled-components";
import useOnclickOutside from "../../hooks/useClickOutSide";
import { iconBars } from "../../public/icons";
import OverlayLayout from "../layouts/OverlayLayout";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

export interface NavbarProps {}

interface Props {
    handleCloseNavbar?: () => void
}

const StyledButtonIcon = styled.div`
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--bg-color);

    > svg {
        width: 20px;
        height: 20px;
        fill: var(--text-title-color);
        display: block;
    }
    :hover {
        background-color: var(--bg-hover-color);
    }
`;
const StyledNavbar = styled.div`
    width: 100%;
    max-width: 300px;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-color: var(--bg-navbar-color);
    padding: 15px 15px 45px 15px;
    position: absolute;
    z-index: 1000;

    opacity: 0.9;
    transform: translateX(-100%);
    transition: all 0.3s ease;

    &.active {
        opacity: 1;
        transform: translateX(0%);
    }
`;

const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);

    const handleCloseNavbar = () => {
        setIsOpenNavbar(false);
    }
    useOnclickOutside(navbarRef, handleCloseNavbar);

    return (
        <>
            <StyledButtonIcon onClick={() => setIsOpenNavbar(true)}>
                {iconBars}
            </StyledButtonIcon>
            <OverlayLayout active={isOpenNavbar}>
                <StyledNavbar className={`${isOpenNavbar && "active"}`} ref={navbarRef}>Navbar</StyledNavbar>
            </OverlayLayout>
        </>
    );
};

export default Navbar;
