import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaQrcode, FaMoneyBillWave, FaChartLine, FaUsers, FaCalendarAlt, FaStore } from 'react-icons/fa'

const features = [
  {
    id: 1,
    icon: <FaQrcode />,
    title: 'Instant QR Payments',
    description: 'Generate custom QR codes for shows that fans can scan to support you directly. No more "check out my website later" - get paid on the spot.',
    color: 'passionateCrimson',
  },
  {
    id: 2,
    icon: <FaMoneyBillWave />,
    title: 'Same-Day Deposits',
    description: 'Money hits your account the same day - not weeks or months later. Pay your band, buy gas for the tour van, or celebrate with a nice meal.',
    color: 'revolutionaryGold',
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: 'Fan Analytics',
    description: "Know exactly who your true fans are, where they're located, and what they love about your music. Build your career on real data.",
    color: 'energyOrange',
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: 'Fan Relationship Tools',
    description: "Send exclusive updates, behind-the-scenes content, and special offers to the fans who've directly supported you.",
    color: 'successGreen',
  },
  {
    id: 5,
    icon: <FaCalendarAlt />,
    title: 'Show Management',
    description: 'Create events, track attendance, and see which venues and cities are most profitable for your specific fanbase.',
    color: 'trustworthyNavy',
  },
  {
    id: 6,
    icon: <FaStore />,
    title: 'Digital Merch Store',
    description: 'Sell digital products, exclusive tracks, and experiences directly to fans without platform fees eating into your earnings.',
    color: 'authenticBrown',
  },
]

const FeatureShowcase = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <SectionHeader>
          <SectionTitle>Everything You Need to Succeed</SectionTitle>
          <SectionDescription>
            TrueFans CONNECT™ gives independent artists the tools to build sustainable careers through direct fan support.
          </SectionDescription>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <FeatureIconWrapper color={feature.color}>
                {feature.icon}
              </FeatureIconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
`

const FeatureIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.passionateCrimson};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

export default FeatureShowcase
