import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQrcode, FaHeart, FaChartLine, FaMoneyBillWave, FaHandshake } from 'react-icons/fa'

const features = [
  {
    id: 1,
    icon: <FaQrcode />,
    title: 'Instant Digital Support',
    description: 'QR codes, donation links, recurring subscriptions - make it effortless for fans to support you financially in the moment.',
    color: '#DC143C', // passionateCrimson
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: 'Fan Relationship Alchemy',
    description: 'Convert casual listeners into devoted supporters with personalized thank-you messages, exclusive content, and meaningful connections.',
    color: '#FF6B35', // energyOrange
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: 'Performance Intelligence',
    description: 'Track engagement, understand your audience, and make data-driven decisions about where to focus your energy and talent.',
    color: '#1B365D', // trustworthyNavy
  },
  {
    id: 4,
    icon: <FaMoneyBillWave />,
    title: 'Multiple Revenue Streams',
    description: 'Tips, subscriptions, exclusive content, experiences - diversify your income sources for sustainable career growth.',
    color: '#FFD700', // revolutionaryGold
  },
  {
    id: 5,
    icon: <FaHandshake />,
    title: 'Zero Risk Investment',
    description: 'Free to start, we succeed when you succeed. Our partnership model ensures our interests are perfectly aligned with yours.',
    color: '#2ECC71', // successGreen
  },
]

const FeaturesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>Platform Features - Tools for Independence</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FeaturesContainer>
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                variants={itemVariants}
                color={feature.color}
              >
                <FeatureIconWrapper color={feature.color}>
                  {feature.icon}
                </FeatureIconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesContainer>
        </motion.div>
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
  margin-bottom: ${({ theme }) => theme.space['3xl']};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  border-top: 4px solid ${({ color }) => color};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeatureIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ color }) => `${color}15`};
  color: ${({ color }) => color};
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
  color: ${({ theme }) => theme.colors.modernCharcoal};
  margin-bottom: 0;
`

export default FeaturesGrid
