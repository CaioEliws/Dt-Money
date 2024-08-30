import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.4rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;

    margin-top: -12rem;
`;

interface SummaryCardProps {
    variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 3.2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1.6rem;
        font-size: 3.2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme['green-700']};
    `}
`;