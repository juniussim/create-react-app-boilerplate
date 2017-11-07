import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = props => {
  const { className, to, children } = props;

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

const StyledButton = styled(Button)`
  font-size: ${props => props.theme.font_size.medium};
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.secondary_base};
  padding: 16px 32px;
  text-align: center;
  border-radius: 50px;
  text-transform: uppercase;
  text-decoration: none;
`;

export default StyledButton;
