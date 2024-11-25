import styled, { css } from "styled-components";

export const MediaContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const shareCss = css`
    display: block;
    text-decoration: none;
    background: #cc2b2b;
    color: #fff;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
    transition: all 500ms ease;
`;

export const SocialMedia = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;

    a {
        ${shareCss}
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
        transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(20px)")};

        &:hover {
            background: #fff;
            color: #cc2b2b;
        }
    }
`;

export const ContainerButton = styled.div<{ isOpen: boolean }>`
    ${shareCss}
    cursor: pointer;
    background: #f44141;
    font-size: 23px;
    margin-top: 10px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(135deg)" : "rotate(0)")};
`;