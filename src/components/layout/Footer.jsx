import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterLogo>TrueFans Connect™</FooterLogo>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/artist-dashboard">Artist Dashboard</FooterLink>
            <FooterLink to="/venue-portal">Venue Portal</FooterLink>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
          </FooterLinks>
        </FooterContent>
        <FooterBottom>
          <Copyright>© {new Date().getFullYear()} TrueFans Connect™. All rights reserved.</Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FooterLogo = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.space.lg};
`

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: white;
  }
`

const FooterBottom = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.space.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`

export default Footer
