import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { 
  ArrowLeft, 
  ExternalLink, 
  Settings, 
  Users, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  ShoppingBag, 
  Award,
  Plus,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react'

const CustomizeCommunityPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('courses')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock community data
  const community = {
    id: 1,
    name: 'Homohumanicus',
    category: 'Health and Wellness',
    description: 'A community focused on holistic human development and wellness practices.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    members: 2847,
    courses: 12,
    groups: 8,
    memberAvatars: [
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    ]
  }

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen, count: 2 },
    { id: 'products', label: 'Products', icon: ShoppingBag, count: 0 },
    { id: 'members', label: 'Members', icon: Users, count: community.members },
    { id: 'groups', label: 'Groups', icon: Users, count: community.groups },
    { id: 'events', label: 'Events', icon: Calendar, count: 0 },
    { id: 'blog', label: 'Blog', icon: MessageCircle, count: 0 },
    { id: 'sales', label: 'Sales', icon: Award, count: 0 }
  ]

  const courses = [
    {
      id: 1,
      name: 'Wellness',
      lessons: 5,
      status: 'Free',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Comprehensive wellness program for holistic health'
    }
  ]

  const lessons = [
    {
      id: 1,
      name: 'Understanding the Wellness Life Wheel',
      code: 'UW',
      type: 'Content',
      status: 'Active',
      createdOn: '13 Feb, 2025',
      description: 'The Wellness Life Wheel is a visual representation of the key areas of life that contribute to overall well-being.'
    }
  ]

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
          <BackButton as={Link} to="/community">
            <ArrowLeft size={20} />
            Back to Community
          </BackButton>
          
          <CommunityInfo>
            <CommunityImage src={community.image} alt={community.name} />
            <CommunityDetails>
              <CommunityName>{community.name}</CommunityName>
              <CommunityCategory>{community.category}</CommunityCategory>
              <CommunityStats>
                <StatItem>
                  <BookOpen size={16} />
                  <StatNumber>{community.courses}</StatNumber>
                  <StatLabel>Courses</StatLabel>
                </StatItem>
                <StatItem>
                  <Users size={16} />
                  <StatNumber>{community.members}</StatNumber>
                  <StatLabel>Members</StatLabel>
                </StatItem>
                <StatItem>
                  <Users size={16} />
                  <StatNumber>{community.groups}</StatNumber>
                  <StatLabel>Groups</StatLabel>
                </StatItem>
              </CommunityStats>
            </CommunityDetails>
            <MemberAvatars>
              {community.memberAvatars.map((avatar, index) => (
                <Avatar key={index} src={avatar} alt={`Member ${index + 1}`} />
              ))}
            </MemberAvatars>
          </CommunityInfo>

          <HeaderActions>
            <VisitButton as={Link} to="/">
              <ExternalLink size={16} />
              Visit
            </VisitButton>
            <SettingsButton>
              <Settings size={16} />
              Settings
            </SettingsButton>
          </HeaderActions>
        </Header>

        <TabNavigation>
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <TabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={20} />
                {tab.label}
                {tab.count > 0 && <TabCount>{tab.count}</TabCount>}
              </TabButton>
            )
          })}
        </TabNavigation>

        <ContentArea>
          {activeTab === 'courses' && (
            <CoursesSection>
              <SectionHeader>
                <SectionTitle>
                  Courses
                  <SectionBadge>{courses.length}</SectionBadge>
                  <FilterButton>
                    <Filter size={16} />
                  </FilterButton>
                </SectionTitle>
                <CreateButton>
                  <Plus size={16} />
                  Create Course
                </CreateButton>
              </SectionHeader>

              <SearchBar>
                <Search size={20} />
                <SearchInput
                  type="text"
                  placeholder="Search by Course Name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchBar>

              <CoursesGrid>
                {courses.map(course => (
                  <CourseCard key={course.id}>
                    <CourseImage src={course.image} alt={course.name} />
                    <CourseContent>
                      <CourseHeader>
                        <CourseName>{course.name}</CourseName>
                        <CourseStatus status={course.status}>{course.status}</CourseStatus>
                      </CourseHeader>
                      <CourseLessons>{course.lessons} Lessons</CourseLessons>
                      <CourseDescription>{course.description}</CourseDescription>
                      <CourseActions>
                        <ActionButton variant="edit">Edit</ActionButton>
                        <ActionButton variant="copy">Copy</ActionButton>
                        <ActionButton variant="view">View</ActionButton>
                        <ActionButton variant="delete">Delete</ActionButton>
                        <ActionButton variant="more">
                          <MoreVertical size={16} />
                        </ActionButton>
                      </CourseActions>
                    </CourseContent>
                  </CourseCard>
                ))}
              </CoursesGrid>

              <LessonsSection>
                <SectionHeader>
                  <SectionTitle>
                    Lessons
                    <SectionBadge>{lessons.length}</SectionBadge>
                    <FilterButton>
                      <Filter size={16} />
                    </FilterButton>
                  </SectionTitle>
                  <CreateButton>
                    <Plus size={16} />
                    Create Lesson
                  </CreateButton>
                </SectionHeader>

                <SearchBar>
                  <Search size={20} />
                  <SearchInput
                    type="text"
                    placeholder="Search by Lesson Name..."
                  />
                </SearchBar>

                <LessonsTable>
                  <TableHeader>
                    <HeaderCell>Lesson Name</HeaderCell>
                    <HeaderCell>Type</HeaderCell>
                    <HeaderCell>Status</HeaderCell>
                    <HeaderCell>Created On</HeaderCell>
                    <HeaderCell>Action</HeaderCell>
                  </TableHeader>
                  {lessons.map(lesson => (
                    <TableRow key={lesson.id}>
                      <LessonCell>
                        <LessonCode>{lesson.code}</LessonCode>
                        <LessonInfo>
                          <LessonName>{lesson.name}</LessonName>
                          <LessonDescription>{lesson.description}</LessonDescription>
                        </LessonInfo>
                      </LessonCell>
                      <TypeCell>
                        <TypeBadge type={lesson.type}>{lesson.type}</TypeBadge>
                      </TypeCell>
                      <StatusCell>
                        <StatusToggle isActive={lesson.status === 'Active'} />
                      </StatusCell>
                      <DateCell>{lesson.createdOn}</DateCell>
                      <ActionCell>
                        <ActionDropdown>
                          <MoreVertical size={16} />
                        </ActionDropdown>
                      </ActionCell>
                    </TableRow>
                  ))}
                </LessonsTable>
              </LessonsSection>
            </CoursesSection>
          )}

          {activeTab !== 'courses' && (
            <EmptyState>
              <EmptyIcon>
                {React.createElement(tabs.find(tab => tab.id === activeTab)?.icon || BookOpen, { size: 64 })}
              </EmptyIcon>
              <EmptyTitle>No {activeTab} yet</EmptyTitle>
              <EmptyDescription>
                Start building your community by adding {activeTab} to engage your members.
              </EmptyDescription>
              <CreateButton>
                <Plus size={16} />
                Create {activeTab.slice(0, -1)}
              </CreateButton>
            </EmptyState>
          )}
        </ContentArea>

        <PhilosophicalFramework>
          <FrameworkTitle>Customization Philosophy</FrameworkTitle>
          <FrameworkText>
            This customization interface embodies our philosophical framework: through <strong>Assertiveness</strong>, 
            you define your community's identity; through <strong>Rationality</strong>, you structure learning paths; 
            through <strong>Behaviorism</strong>, you shape member interactions; through <strong>Adaptation</strong>, 
            you evolve with your community's needs. Each customization choice creates ripple effects throughout 
            the community ecosystem.
          </FrameworkText>
        </PhilosophicalFramework>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
  }
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

const CommunityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};
  flex: 1;
`

const CommunityImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radii.lg};
  object-fit: cover;
`

const CommunityDetails = styled.div`
  flex: 1;
`

const CommunityName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin: 0 0 ${({ theme }) => theme.space.xs} 0;
`

const CommunityCategory = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const CommunityStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
`

const StatNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const MemberAvatars = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xs};
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const VisitButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

const SettingsButton = styled.button`
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
  }
`

const TabNavigation = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  overflow-x: auto;
`

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) => isActive ? 'white' : theme.colors.darkText};
  border: 2px solid ${({ isActive, theme }) => isActive ? theme.colors.primary : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ isActive, theme }) => isActive ? theme.colors.primaryDark : theme.colors.primary}10;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const TabCount = styled.span`
  background: ${({ theme }) => theme.colors.revolutionaryGold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: ${({ theme }) => theme.space.xs};
`

const ContentArea = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-height: 600px;
`

const CoursesSection = styled.div``

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin: 0;
`

const SectionBadge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const FilterButton = styled.button`
  padding: ${({ theme }) => theme.space.xs};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }
`

const CreateButton = styled.button`
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
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  background: ${({ theme }) => theme.colors.warmCream}20;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.md};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space['4xl']};
`

const CourseCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const CourseImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`

const CourseContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const CourseName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin: 0;
`

const CourseStatus = styled.span`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  background: ${({ status }) => status === 'Free' ? '#4CAF50' : '#FF9800'};
  color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const CourseLessons = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CourseDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CourseActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xs};
  flex-wrap: wrap;
`

const ActionButton = styled.button`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ variant, theme }) => {
    switch (variant) {
      case 'edit': return theme.colors.primary + '10'
      case 'copy': return theme.colors.secondary + '10'
      case 'view': return theme.colors.success + '10'
      case 'delete': return theme.colors.error + '10'
      default: return 'transparent'
    }
  }};
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'edit': return theme.colors.primary
      case 'copy': return theme.colors.secondary
      case 'view': return theme.colors.success
      case 'delete': return theme.colors.error
      default: return theme.colors.darkText
    }
  }};

  &:hover {
    background: ${({ variant, theme }) => {
      switch (variant) {
        case 'edit': return theme.colors.primary
        case 'copy': return theme.colors.secondary
        case 'view': return theme.colors.success
        case 'delete': return theme.colors.error
        default: return theme.colors.primary
      }
    }};
    color: white;
  }
`

const LessonsSection = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary}20;
  padding-top: ${({ theme }) => theme.space.xl};
`

const LessonsTable = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  background: ${({ theme }) => theme.colors.primary}10;
  padding: ${({ theme }) => theme.space.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const HeaderCell = styled.div`
  padding: ${({ theme }) => theme.space.xs};
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.warmCream}20;
  }
`

const LessonCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const LessonCode = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const LessonInfo = styled.div``

const LessonName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.space.xs} 0;
`

const LessonDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
  line-height: 1.4;
`

const TypeCell = styled.div``

const TypeBadge = styled.span`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  background: ${({ theme }) => theme.colors.success}20;
  color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const StatusCell = styled.div``

const StatusToggle = styled.div`
  width: 50px;
  height: 24px;
  background: ${({ isActive, theme }) => isActive ? theme.colors.success : theme.colors.lightText};
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ isActive }) => isActive ? '28px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
`

const DateCell = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const ActionCell = styled.div``

const ActionDropdown = styled.button`
  padding: ${({ theme }) => theme.space.xs};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space['5xl']};
  text-align: center;
`

const EmptyIcon = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  opacity: 0.5;
`

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const EmptyDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 400px;
`

const PhilosophicalFramework = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: ${({ theme }) => theme.space['3xl']};
  border-radius: ${({ theme }) => theme.radii.xl};
  text-align: center;
`

const FrameworkTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
`

const FrameworkText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;

  strong {
    color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

export default CustomizeCommunityPage
