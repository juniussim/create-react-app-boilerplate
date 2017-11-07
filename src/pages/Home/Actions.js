import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import media from '../../styles/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing[8]};
  margin-top: ${props => props.theme.spacing[14]};

  &:nth-of-type(2) {
    margin-bottom: ${props => props.theme.spacing[20]};
  }

  ${media.tablet`
    flex-direction: row;
    align-items: center;
  `};
`;

const ActionButton = Button.extend`
  margin-top: ${props => props.theme.spacing[4]};

  ${media.tablet`
    margin-right: ${props => props.theme.spacing[4]};
  `};
`;

const Actions = () => (
  <Wrapper>
    <ActionButton to="/record">New Match</ActionButton>
    <ActionButton to="leaderboard">Leaderboard</ActionButton>
  </Wrapper>
);

export default Actions;
