import React from 'react';
import styled from 'styled-components';
import NavigationPanel from '../../components/NavigationPanel';
import Logo from './Logo';
import Actions from './Actions';

const Section = styled.section`
  background: ${props => props.theme.color.primary_base};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
`;

const Slogan = styled.h2`
  font-size: ${props => props.theme.font_size.large};
  font-weight: 200;
  color: ${props => props.theme.color.white};
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: center;
`;

const Home = props => (
  <Section>
    <Logo />
    <Slogan>The foosball leaderboard for fun offices.</Slogan>
    <Actions />
    <NavigationPanel {...props} />
  </Section>
);

export default Home;
