import styled from 'styled-components';

export const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }
    
    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }
    
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: start;
    top: 4%;
    right: 0;
    bottom: 50%;
    left: 50%;
    overflow: hidden;
    width: 50%;
    height: 100%;
    padding: 0 0 250px;

    @media screen and (max-width: 960px){
        padding: 0 0px;
        justify-content: center;
    }
`;

export const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
        @media screen and (max-width: 960px) {
            order: 2;
            margin-bottom: 32px;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        @media screen and (max-width: 640px) {
            order: 2;
            margin-bottom: 32px;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    
`;

export const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
        @media screen and (max-width: 960px) {
            order: 1;
            margin-bottom: 80px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        @media screen and (max-width: 640px) {
            order: 1;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
`;

export const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const TextLoop = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
`;

export const Span = styled.span`
    color: white;
    cursor: pointer;
`;

export const SubTitle = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

export const ResumeButtonContainer = styled.div`
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const ResumeButton = styled.div`
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(240, 50%, 20%, 1);
    background: linear-gradient(225deg, hsla(240, 50%, 20%, 1) 0%,  rgba(207, 227, 252, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(240, 50%, 20%, 1) 0%,  rgba(207, 227, 252, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(240, 50%, 20%, 1) 0%,  rgba(207, 227, 252, 1) 100%);
    box-shadow: 15px 15px 40px #8AA7DE,
    -10px -10px 40px #8AA7DE;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
        filter: brightness(1);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 30%;
    max-width: 400px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};

    @media screen and (max-width: 768px) {
        max-height: 400px;
        max-width: 400px;
    }

    @media screen and (max-width: 640px) {
        max-height: 280px;
        max-width: 280px;
    }
`;