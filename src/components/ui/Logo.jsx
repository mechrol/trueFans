import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Logo = ({ size = 'default' }) => {
  return (
    <LogoWrapper size={size}>
      <LogoText>
        <MainText>
          <TrueText>True</TrueText>
          <FansText>Fans</FansText>
        </MainText>
        <ConnectText
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          CONNECT<TrademarkSymbol>™</TrademarkSymbol>
        </ConnectText>
      </LogoText>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          transform: scale(0.8);
        `
      case 'large':
        return `
          transform: scale(1.5);
        `
      default:
        return ``
    }
  }}
`

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`

const MainText = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: 1.8rem;
`

const TrueText = styled.span`
  color: ${({ theme }) => theme.colors.passionateCrimson};
`

const FansText = styled.span`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-left: 4px;
`

const ConnectText = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.energyOrange};
  margin-top: -2px;
  align-self: flex-end;
`

const TrademarkSymbol = styled.sup`
  font-size: 0.6rem;
  vertical-align: super;
`

export default Logo
