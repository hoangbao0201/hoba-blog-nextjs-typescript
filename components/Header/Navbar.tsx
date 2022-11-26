import Link from "next/link";
import { useRef, useState } from "react";

import styled from "styled-components";
import useOnclickOutside from "../../hooks/useClickOutSide";
import { iconBars, iconLogin, iconRegister } from "../../public/icons";
import OverlayLayout from "../layouts/OverlayLayout";

export interface NavbarProps {}

const StyledButtonIcon = styled.div`
    padding: 10px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--bg-color);

    > svg {
        width: 24px;
        height: 24px;
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
const StyledNavbarContainer = styled.div`
`
const StyledNavbarHeader = styled.div`
`
const StyledNavbarContent = styled.div`
    padding: 15px 0px;
`
const StyledNavbarItem = styled.div`
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    transition: all 0.2s;
    color: var(--text-title-color);

    display: flex;
    align-items: center;

    display: flex;
    align-items: center;

    > svg {
        width: 20px;
        margin-right: 15px;
        display: block;
        fill: var(--text-title-color);
    }
    :hover {
        background-color: var(--bg-hover-color);
    }
`

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

                <StyledNavbar className={`${isOpenNavbar && "active"}`} ref={navbarRef}>
                    <StyledNavbarContainer>
                        <StyledNavbarHeader>
                            Header navbar
                        </StyledNavbarHeader>

                        <StyledNavbarContent>

                            <Link href="/auth/login">
                                <StyledNavbarItem>
                                    {iconLogin}Đăng nhập
                                </StyledNavbarItem>

                            </Link> 
                            <Link href="/auth/register">
                                <StyledNavbarItem>
                                    {iconRegister}Đăng kí
                                </StyledNavbarItem>
                            </Link>

                        </StyledNavbarContent>

                    </StyledNavbarContainer>
                </StyledNavbar>

            </OverlayLayout>
        </>
    );
};

export default Navbar;
