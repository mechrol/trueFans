import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Plus, Settings, Users, BookOpen, Calendar, MessageCircle, TrendingUp } from 'lucide-react'

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const communities = [
    {
      id: 1,
      name: 'Homohumanicus',
      category: 'Health and Wellness',
      description: 'A community focused on holistic human development and wellness practices.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 2847,
      posts: 156,
      courses: 12,
      isActive: true,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Ziołolecznictwo',
      category: 'Health and Wellness',
      description: 'Traditional herbal medicine and natural healing community.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 1923,
      posts: 89,
      courses: 8,
      isActive: true,
      lastActivity: '1 hour ago'
    },
    {
      id: 3,
      name: 'Przedsiębiorcy RP',
      category: 'Entrepreneurship',
      description: 'A dynamic group of individuals focused on starting and growing businesses.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 3421,
      posts: 234,
      courses: 15,
      isActive: true,
      lastActivity: '30 minutes ago'
    },
    {
      id: 4,
      name: 'Narodowa Agencja Innowacji',
      category: 'Innovation',
      description: 'National innovation agency fostering technological advancement.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 1567,
      posts: 67,
      courses: 6,
      isActive: true,
      lastActivity: '4 hours ago'
    },
    {
      id: 5,
      name: 'Wolność i Przedsiębiorczość',
      category: 'Business',
      description: 'Freedom and entrepreneurship community promoting business liberty.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 2156,
      posts: 123,
      courses: 9,
      isActive: true,
      lastActivity: '1 day ago'
    },
    {
      id: 6,
      name: 'PATRON',
      category: 'Subscription Services',
      description: 'Premium subscription services for professional development.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 892,
      posts: 45,
      courses: 4,
      isActive: true,
      lastActivity: '6 hours ago'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Communities', count: communities.length },
    { id: 'health', name: 'Health & Wellness', count: 2 },
    { id: 'business', name: 'Business', count: 3 },
    { id: 'innovation', name: 'Innovation', count: 1 }
  ]

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           community.category.toLowerCase().includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Header>
          <HeaderContent>
            <Title>
              <Settings size={32} />
              Community
              <Badge>{communities.length}</Badge>
            </Title>
            <HeaderActions>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Search by Community Name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton>
                  <Search size={20} />
                  Search
                </SearchButton>
              </SearchContainer>
              <NewCommunityButton>
                <Plus size={20} />
                New Community
              </NewCommunityButton>
            </HeaderActions>
          </HeaderContent>
        </Header>

        <CategoryFilter>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </CategoryButton>
          ))}
        </CategoryFilter>

        <CommunitiesGrid>
          {filteredCommunities.map(community => (
            <CommunityCard
              key={community.id}
              as={motion.div}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <CommunityImage src={community.image} alt={community.name} />
              <CommunityContent>
                <CommunityHeader>
                  <CommunityName>{community.name}</CommunityName>
                  <StatusIndicator isActive={community.isActive} />
                </CommunityHeader>
                <CommunityCategory>{community.category}</CommunityCategory>
                <CommunityDescription>{community.description}</CommunityDescription>
                
                <CommunityStats>
                  <StatItem>
                    <Users size={16} />
                    <span>{community.members.toLocaleString()}</span>
                  </StatItem>
                  <StatItem>
                    <MessageCircle size={16} />
                    <span>{community.posts}</span>
                  </StatItem>
                  <StatItem>
                    <BookOpen size={16} />
                    <span>{community.courses}</span>
                  </StatItem>
                </CommunityStats>

                <CommunityActions>
                  <ActionButton variant="primary">
                    <TrendingUp size={16} />
                    Actions
                  </ActionButton>
                  <ActionDropdown>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Visit</DropdownItem>
                    <DropdownItem as={Link} to={`/customize-community/${community.id}`}>
                      Customize Community
                    </DropdownItem>
                    <DropdownItem>Clone</DropdownItem>
                    <DropdownItem>AI Member Feed</DropdownItem>
                    <DropdownItem>AI Custom Prompt Feed</DropdownItem>
                  </ActionDropdown>
                </CommunityActions>

                <LastActivity>Last activity: {community.lastActivity}</LastActivity>
              </CommunityContent>
            </CommunityCard>
          ))}
        </CommunitiesGrid>

        <PhilosophicalInsight>
          <InsightTitle>Community Philosophy: Cause & Effect Relationships</InsightTitle>
          <InsightText>
            Within our "Act as a Philosopher" framework, each community represents a dynamic ecosystem where 
            the whole (community) and its parts (members/fans) exist in constant cause-and-effect relationships. 
            Through Assertiveness, members express their professional identity; through Rationality, they share 
            knowledge; through Behaviorism, they adapt and learn; through Adaptation, they evolve together.
          </InsightText>
        </PhilosophicalInsight>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: ${({ theme }) => theme.space.xl} 0;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const Header = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
  }
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin: 0;
`

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
  }
`

const SearchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 300px;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`

const NewCommunityButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.revolutionaryGold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.revolutionaryGold}dd;
    transform: translateY(-2px);
  }
`

const CategoryFilter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.space.sm};
`

const CategoryButton = styled.button`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'white'};
  color: ${({ isActive, theme }) => isActive ? 'white' : theme.colors.darkText};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ isActive, theme }) => isActive ? theme.colors.primaryDark : theme.colors.primary}10;
  }
`

const CommunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space['5xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const CommunityCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
`

const CommunityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const CommunityContent = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

const CommunityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const CommunityName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin: 0;
`

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? '#4CAF50' : '#F44336'};
  flex-shrink: 0;
`

const CommunityCategory = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CommunityDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CommunityStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const CommunityActions = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ variant, theme }) => variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ variant }) => variant === 'primary' ? 'white' : 'inherit'};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  width: 100%;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: white;
  }
`

const ActionDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: ${({ theme }) => theme.transitions.default};

  ${CommunityActions}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:first-child {
    border-radius: ${({ theme }) => theme.radii.lg} ${({ theme }) => theme.radii.lg} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.radii.lg} ${({ theme }) => theme.radii.lg};
  }
`

const LastActivity = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`

const PhilosophicalInsight = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: ${({ theme }) => theme.space['3xl']};
  border-radius: ${({ theme }) => theme.radii.xl};
  text-align: center;
`

const InsightTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
`

const InsightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`

export default CommunityPage
