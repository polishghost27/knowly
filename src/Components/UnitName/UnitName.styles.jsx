import styled from 'styled-components'

export const UnitNameContainer = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.7rem;
`

export const UnitNameIcon = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100%;
    color: ${({ theme }) => theme.color.secondaryText};
    padding: 0.5rem 0;
`

export const UnitNameTiitle = styled.p`
    font-size: ${({ theme }) => theme.font.size.small};
    margin-left: 1rem;
    color: ${({ theme }) => theme.color.secondaryText};
`
export const SectionNameTiitle = styled(UnitNameTiitle)`
    font-size: ${({ theme }) => theme.font.size.ultraSmall};
`
