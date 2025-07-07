import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    id: 1,
    name: 'Fox & Bones',
    location: 'Indie-Folk Duo, Portland',
    before: '$200-300/month from music',
    after: '$2,400/month sustainable income',
    quote: "We're building real, lasting relationships with our fans that go beyond the music itself. TrueFans CONNECT™ has transformed how we think about our career path.",
    image: 'https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg',
  },
  {
    id: 2,
    name: 'Sugar Lime Blue',
    location: 'Blues-Rock, Nashville',
    before: 'Lost in the algorithm noise',
    after: 'Clear picture of our dedicated audience',
    quote: "It's like having a direct line to our most important fans. We know exactly who supports us and can focus our energy on creating for them.",
    image: 'https://images.pexels.com/photos/7097446/pexels-photo-7097446.jpeg',
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    location: 'Singer-Songwriter, Tucson',
    before: '$50-100 per coffee shop gig',
    after: 'Over $600 per house concert',
    quote: "The difference is night and day. Every person came specifically to hear music, not just happen upon it while ordering coffee. I'm playing fewer gigs but making more money.",
    image: 'https://images.pexels.com/photos/7097438/pexels-photo-7097438.jpeg',
  },
]

const TestimonialShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }
  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>Real Artists, Real Transformation</SectionTitle>
        
        <TestimonialSlider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialSlide key={testimonial.id}>
              <TestimonialContent>
                <TestimonialImageWrapper>
                  <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                </TestimonialImageWrapper>
                
                <TestimonialInfo>
                  <TestimonialHeader>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialLocation>{testimonial.location}</TestimonialLocation>
                  </TestimonialHeader>
                  
                  <TransformationMetrics>
                    <MetricBefore>
                      <MetricLabel>Before</MetricLabel>
                      <MetricValue>{testimonial.before}</MetricValue>
                    </MetricBefore>
                    
                    <MetricArrow>→</MetricArrow>
                    
                    <MetricAfter>
                      <MetricLabel>After</MetricLabel>
                      <MetricValue>{testimonial.after}</MetricValue>
                    </MetricAfter>
                  </TransformationMetrics>
                  
                  <TestimonialQuote>
                    "{testimonial.quote}"
                  </TestimonialQuote>
                </TestimonialInfo>
              </TestimonialContent>
            </TestimonialSlide>
          ))}
        </TestimonialSlider>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space['4xl']} 0;
  color: white;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space['3xl']};
  color: white;
`

const TestimonialSlider = styled(Slider)`
  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
  
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
  
  .slick-prev, .slick-next {
    z-index: 1;
    
    &:before {
      color: ${({ theme }) => theme.colors.revolutionaryGold};
      font-size: 24px;
    }
  }
  
  .slick-prev {
    left: -30px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 10px;
    }
  }
  
  .slick-next {
    right: -30px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      right: 10px;
    }
  }
`

const TestimonialSlide = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const TestimonialContent = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const TestimonialImageWrapper = styled.div`
  flex: 1;
  max-width: 40%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`

const TestimonialInfo = styled.div`
  flex: 1.5;
  padding: ${({ theme }) => theme.space.xl};
  display: flex;
  flex-direction: column;
`

const TestimonialHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const TestimonialName = styled.h3`
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialLocation = styled.div`
  color: ${({ theme }) => theme.colors.warmCream};
  font-style: italic;
`

const TransformationMetrics = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const MetricBefore = styled.div`
  flex: 1;
`

const MetricAfter = styled.div`
  flex: 1;
`

const MetricLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.warmCream};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const MetricValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: white;
`

const MetricArrow = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin: 0 ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: rotate(90deg);
    margin: ${({ theme }) => theme.space.xs} 0;
  }
`

const TestimonialQuote = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  font-style: italic;
  color: ${({ theme }) => theme.colors.warmCream};
`

export default TestimonialShowcase
