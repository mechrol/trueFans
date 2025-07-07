import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const VenueSection = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <SectionContent>
          <SectionInfo>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle>Venues: Become the Hub Your Artists Need</SectionTitle>
              <SectionDescription>
                Partner with TrueFans CONNECT™ to create a thriving ecosystem of artists and fans centered around your venue. Earn commissions while helping artists build sustainable careers.
              </SectionDescription>
              
              <BenefitsList>
                <BenefitItem>
                  <BenefitTitle>Embeddable artist submission forms for your website</BenefitTitle>
                  <BenefitDescription>
                    Make it easy for artists to apply to perform at your venue while building your TrueFans CONNECT™ network.
                  </BenefitDescription>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitTitle>All artist leads flow directly to you</BenefitTitle>
                  <BenefitDescription>
                    Maintain control of your booking process while expanding your artist network.
                  </BenefitDescription>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitTitle>2.5% commission on all donations from artists you refer</BenefitTitle>
                  <BenefitDescription>
                    Earn passive income from every artist you bring into the TrueFans CONNECT™ ecosystem.
                  </BenefitDescription>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitTitle>Second-tier: 2.5% from artists they refer</BenefitTitle>
                  <BenefitDescription>
                    Build a network effect that continues to grow your revenue over time.
                  </BenefitDescription>
                </BenefitItem>
              </BenefitsList>
              
              <ButtonWrapper>
                <Button 
                  as={Link} 
                  to="/venue-portal" 
                  variant="gold" 
                  size="lg"
                >
                  Partner With Us
                </Button>
              </ButtonWrapper>
            </motion.div>
          </SectionInfo>
          
          <SectionVisual>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <NetworkDiagram>
                <VenueNode>
                  <NodeIcon src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" alt="Venue" />
                  <NodeLabel>Your Venue</NodeLabel>
                </VenueNode>
                
                <ArtistConnections>
                  <ArtistNode>
                    <NodeIcon src="https://images.pexels.com/photos/7097438/pexels-photo-7097438.jpeg" alt="Artist 1" />
                    <NodeLabel>Artist 1</NodeLabel>
                    <FanConnections>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                    </FanConnections>
                  </ArtistNode>
                  
                  <ArtistNode>
                    <NodeIcon src="https://images.pexels.com/photos/7097446/pexels-photo-7097446.jpeg" alt="Artist 2" />
                    <NodeLabel>Artist 2</NodeLabel>
                    <FanConnections>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                    </FanConnections>
                  </ArtistNode>
                  
                  <ArtistNode>
                    <NodeIcon src="https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg" alt="Artist 3" />
                    <NodeLabel>Artist 3</NodeLabel>
                    <FanConnections>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                      <FanNode>
                        <SmallNodeIcon />
                        <SmallNodeLabel>Fan</SmallNodeLabel>
                      </FanNode>
                    </FanConnections>
                  </ArtistNode>
                </ArtistConnections>
              </NetworkDiagram>
            </motion.div>
          </SectionVisual>
        </SectionContent>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
`

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const SectionInfo = styled.div`
  flex: 1;
`

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.warmCream};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const BenefitsList = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const BenefitItem = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const BenefitTitle = styled.h4`
  color: white;
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const BenefitDescription = styled.p`
  color: ${({ theme }) => theme.colors.warmCream};
  margin: 0;
`

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
`

const SectionVisual = styled.div`
  flex: 1;
`

const NetworkDiagram = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const VenueNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const NodeIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const NodeLabel = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
`

const ArtistConnections = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space.xl};
  }
`

const ArtistNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -40px;
    width: 2px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`

const FanConnections = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FanNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.space.xs};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    width: 1px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`

const SmallNodeIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.passionateCrimson};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const SmallNodeLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.warmCream};
`

export default VenueSection
