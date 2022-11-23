import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

export interface MainLayoutProps {
    children?: React.ReactNode;
}

const StyledContent = styled.div`
    width: 100%;
`;

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <StyledContent>{children}</StyledContent>
            <Footer />
        </>
    );
};

export default MainLayout;
