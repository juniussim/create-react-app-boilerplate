import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

const oneThird = 100 / 3;

const Item = styled.li`
  display: flex;
  justify-content: center;
  width: ${oneThird}%;
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};
  color: ${props => (props.active ? 'red' : 'blue')};
  background: ${props => props.theme.color.secondary_dark};
  font-size: ${props => props.theme.font_size.regular};

  &:hover {
    color: ${props => props.theme.color.dark_grey};
    cursor: pointer;
  }
`;

class NavigationPanel extends Component {
  isActive(activePath) {
    const currentPath = this.props.match.path;
    return currentPath === activePath;
  }

  render() {
    return (
      <Wrapper>
        <List>
          <Item active={this.isActive('/')}>Home</Item>
          <Item active={this.isActive('/record')}>Record Match</Item>
          <Item active={this.isActive('/leaderboard')}>Leaderboard</Item>
        </List>
      </Wrapper>
    );
  }
}

export default NavigationPanel;
