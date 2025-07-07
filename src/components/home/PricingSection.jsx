import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { FaCheck, FaInfoCircle } from 'react-icons/fa'

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('artist')
  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>Transparent Partnership Model</SectionTitle>
        <SectionDescription>
          We believe in complete transparency and alignment of interests. We only succeed when you succeed.
        </SectionDescription>
        
        <TabsContainer>
          <TabButton 
            isActive={activeTab === 'artist'} 
            onClick={() => setActiveTab('artist')}
          >
            For Artists
          </TabButton>
          <TabButton 
            isActive={activeTab === 'venue'} 
            onClick={() => setActiveTab('venue')}
          >
            For Venues
          </TabButton>
        </TabsContainer>
        
        <PricingCardsContainer>
          {activeTab === 'artist' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key="artist-pricing"
            >
              <PricingCard>
                <PricingHeader>
                  <PlanName>Artist Plan</PlanName>
                  <PlanPrice>FREE to Start, Always</PlanPrice>
                  <PlanDescription>
                    We only make money when you make money
                  </PlanDescription>
                </PricingHeader>
                
                <FeaturesContainer>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Custom QR codes and donation links</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Fan relationship management tools</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Performance analytics dashboard</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Multiple revenue stream options</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Marketing and promotion tools</FeatureText>
                  </FeatureItem>
                </FeaturesContainer>
                
                <PricingDetails>
                  <DetailItem>
                    <DetailIcon><FaInfoCircle /></DetailIcon>
                    <DetailText>
                      <strong>Revenue sharing:</strong> 10% of donations and subscriptions
                    </DetailText>
                  </DetailItem>
                  <DetailItem>
                    <DetailIcon><FaInfoCircle /></DetailIcon>
                    <DetailText>
                      <strong>Affiliate program:</strong> Earn 2.5% on referrals (2 tiers)
                    </DetailText>
                  </DetailItem>
                </PricingDetails>
                
                <PricingCTA>
                  <Button 
                    as={Link} 
                    to="/signup" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                  >
                    Start Your Revolution
                  </Button>
                </PricingCTA>
              </PricingCard>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key="venue-pricing"
            >
              <PricingCard>
                <PricingHeader>
                  <PlanName>Venue Partner Plan</PlanName>
                  <PlanPrice>FREE Partnership</PlanPrice>
                  <PlanDescription>
                    Become a hub for artist success
                  </PlanDescription>
                </PricingHeader>
                
                <FeaturesContainer>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Embeddable artist submission forms</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Artist lead generation tools</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Venue partner dashboard</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Marketing materials and support</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureIcon><FaCheck /></FeatureIcon>
                    <FeatureText>Venue promotion within platform</FeatureText>
                  </FeatureItem>
                </FeaturesContainer>
                
                <PricingDetails>
                  <DetailItem>
                    <DetailIcon><FaInfoCircle /></DetailIcon>
                    <DetailText>
                      <strong>Commission:</strong> 2.5% on all donations from artists you refer
                    </DetailText>
                  </DetailItem>
                  <DetailItem>
                    <DetailIcon><FaInfoCircle /></DetailIcon>
                    <DetailText>
                      <strong>Second-tier:</strong> 2.5% from artists they refer
                    </DetailText>
                  </DetailItem>
                </PricingDetails>
                
                <PricingCTA>
                  <Button 
                    as={Link} 
                    to="/venue-portal" 
                    variant="gold" 
                    size="lg" 
                    fullWidth
                  >
                    Become a Partner
                  </Button>
                </PricingCTA>
              </PricingCard>
            </motion.div>
          )}
        </PricingCardsContainer>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.modernCharcoal};
`

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const TabButton = styled.button`
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.passionateCrimson : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'white' : theme.colors.trustworthyNavy};
  border: 2px solid ${({ theme }) => theme.colors.passionateCrimson};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:first-child {
    border-radius: ${({ theme }) => theme.radii.md} 0 0 ${({ theme }) => theme.radii.md};
  }
  
  &:last-child {
    border-radius: 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0;
  }
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.passionateCrimson : `${theme.colors.passionateCrimson}20`};
  }
`

const PricingCardsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const PricingCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const PricingHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const PlanName = styled.h3`
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PlanPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PlanDescription = styled.div`
  color: ${({ theme }) => theme.colors.warmCream};
`

const FeaturesContainer = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.successGreen};
  margin-right: ${({ theme }) => theme.space.md};
  display: flex;
  align-items: center;
`

const FeatureText = styled.div`
  color: ${({ theme }) => theme.colors.modernCharcoal};
`

const PricingDetails = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.lightBackground};
`

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const DetailIcon = styled.div`
  color: ${({ theme }) => theme.colors.passionateCrimson};
  margin-right: ${({ theme }) => theme.space.md};
  margin-top: 3px;
`

const DetailText = styled.div`
  color: ${({ theme }) => theme.colors.modernCharcoal};
`

const PricingCTA = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

export default PricingSection
