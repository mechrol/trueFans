import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Users, Heart, MessageCircle, TrendingUp } from 'lucide-react'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <BrandSection>
            <BrandName>TrueFans Connect™</BrandName>
            <BrandTagline>
              Building communities through philosophical frameworks of 
              Assertiveness, Rationality, Behaviorism, and Adaptation
            </BrandTagline>
            <PhilosophyQuote>
              "The whole is greater than the sum of its parts - each community member 
              creates ripple effects throughout the ecosystem."
            </PhilosophyQuote>
          </BrandSection>

          <LinksSection>
            <LinkColumn>
              <ColumnTitle>Platform</ColumnTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/community">Community</FooterLink>
              <FooterLink to="/artist-dashboard">Artist Dashboard</FooterLink>
              <FooterLink to="/venue-portal">Venue Portal</FooterLink>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Community Features</ColumnTitle>
              <FooterLink to="/community">Browse Communities</FooterLink>
              <FooterLink to="/community">Create Community</FooterLink>
              <FooterLink to="/community">Member Management</FooterLink>
              <FooterLink to="/community">Knowledge Exchange</FooterLink>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Philosophy</ColumnTitle>
              <PhilosophyItem>
                <TrendingUp size={16} />
                Assertiveness
              </PhilosophyItem>
              <PhilosophyItem>
                <MessageCircle size={16} />
                Rationality
              </PhilosophyItem>
              <PhilosophyItem>
                <Users size={16} />
                Behaviorism
              </PhilosophyItem>
              <PhilosophyItem>
                <Heart size={16} />
                Adaptation
              </PhilosophyItem>
            </LinkColumn>
          </LinksSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 TrueFans Connect™. All rights reserved. 
            Built with philosophical principles for community excellence.
          </Copyright>
          <SocialLinks>
            <SocialLink href="#" aria-label="Community Forum">
              <Users size={20} />
            </SocialLink>
            <SocialLink href="#" aria-label="Knowledge Base">
              <MessageCircle size={20} />
            </SocialLink>
            <SocialLink href="#" aria-label="Growth Analytics">
              <TrendingUp size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: ${({ theme }) => theme.space['4xl']} 0 ${({ theme }) => theme.space.xl} 0;
  margin-top: ${({ theme }) => theme.space['5xl']};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${({ theme }) => theme.space['4xl']};
  margin-bottom: ${({ theme }) => theme.space['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space['2xl']};
  }
`

const BrandSection = styled.div``

const BrandName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const BrandTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  opacity: 0.9;
`

const PhilosophyQuote = styled.blockquote`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  padding-left: ${({ theme }) => theme.space.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.revolutionaryGold};
  opacity: 0.8;
  margin: 0;
`

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const LinkColumn = styled.div``

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FooterLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.space.sm};
  transition: ${({ theme }) => theme.transitions.default};
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.revolutionaryGold};
    transform: translateX(4px);
  }
`

const PhilosophyItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.sm};
  opacity: 0.8;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.lg};
    text-align: center;
  }
`

const Copyright = styled.p`
  margin: 0;
  opacity: 0.7;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.revolutionaryGold};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
    transform: translateY(-2px);
  }
`

export default Footer
