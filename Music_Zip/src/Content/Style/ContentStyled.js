import styled from "styled-components";

export const VideoList = styled.div`
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 0%;
    top: 10%;
    display: grid;
    grid-template-columns: ${props => props.ScreenWidth < props.Width ? "auto" : "auto auto"};
    gap: 35px 25px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const HomePageRight = styled.div`
    background-color: ${(props) => props.theme.RightSide};
    position: absolute;
    left: 20.83%;
    right: -0.07%;
    top: 0%;
    bottom: 11.56%;
    box-shadow: ${(props) => props.theme.RightShadow};
`;