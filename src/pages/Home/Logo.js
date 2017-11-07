import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/foosball_logo.png';
import media from '../../styles/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[8]};
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: ${props => props.theme.font_size.regular_m};
  ${media.tablet`font-size: ${props => props.theme.font_size.x_large};`};
`;

const Image = styled.img`
  height: 50px;
  margin-right: ${props => props.theme.spacing[2]};
`;

const Logo = () => (
  <Wrapper>
    <Image src={logo} alt="foosball_logo" />
    <Name>Foo Up!</Name>
  </Wrapper>
);

export default Logo;
