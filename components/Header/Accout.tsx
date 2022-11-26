import Link from "next/link"
import styled from "styled-components"
import { iconLogin, iconRegister } from "../../public/icons"


export interface AccoutProps {

}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledAccoutItem = styled.div`
    padding: 10px 12px;
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

const Accout = () => {

    return (
       <StyledWrapper>
            <Link href="/auth/login">
                <StyledAccoutItem>
                    {iconLogin}Đăng nhập
                </StyledAccoutItem>
            </Link>
            <Link href="/auth/register">
                <StyledAccoutItem>
                    {iconRegister}Đăng kí
                </StyledAccoutItem>
            </Link>
       </StyledWrapper>
   )
}

export default Accout