import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const experts = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Music Industry Analyst, Billboard",
    quote: "TrueFans CONNECT™ is addressing the exact pain point that's kept independent artists from building sustainable careers. The instant payment model is revolutionary.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Founder, Indie Artist Collective",
    quote: "I've seen dozens of music tech startups come and go, but TrueFans CONNECT™ is the first one that truly understands what artists need: money now, not promises later.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: 3,
    name: "Dr. Amelia Rivera",
    title: "Professor of Music Business, Berklee",
    quote: "The data shows that artists who build direct relationships with fans have longer, more sustainable careers. TrueFans CONNECT™ makes this accessible to everyone.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
  },
]

const ExpertEndorsements = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <SectionHeader>
          <SectionTitle>Endorsed by Industry Experts</SectionTitle>
          <SectionDescription>
            See why music industry professionals are calling TrueFans CONNECT™ the future of artist sustainability.
          </SectionDescription>
        </SectionHeader>
        
        <EndorsementsGrid>
          {experts.map((expert, index) => (
            <EndorsementCard
              key={expert.id}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuoteSymbol>"</QuoteSymbol>
              <EndorsementQuote>{expert.quote}</EndorsementQuote>
              <ExpertInfo>
                <ExpertImageWrapper>
                  <ExpertImage src={expert.image} alt={expert.name} />
                </ExpertImageWrapper>
                <ExpertDetails>
                  <ExpertName>{expert.name}</ExpertName>
                  <ExpertTitle>{expert.title}</ExpertTitle>
                </ExpertDetails>
              </ExpertInfo>
            </EndorsementCard>
          ))}
        </EndorsementsGrid>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background-color: white;
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

const EndorsementsGrid = styled.div`
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

const EndorsementCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const QuoteSymbol = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space.md};
  left: ${({ theme }) => theme.space.md};
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 60px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.passionateCrimson}20;
`

const EndorsementQuote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.xl};
  position: relative;
  z-index: 1;
`

const ExpertInfo = styled.div`
  display: flex;
  align-items: center;
`

const ExpertImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const ExpertImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ExpertDetails = styled.div`
  flex: 1;
`

const ExpertName = styled.h4`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const ExpertTitle = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export default ExpertEndorsements
