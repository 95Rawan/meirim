import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  font-family: Assistant;
  font-size: 16px;
  font-weight: ${(props) => props.bold } ;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  text-decoration: underline;
  color: #652dd0;
  cursor: pointer;
`;

const Link = ({ id, to, text, bold = '400' }) => (
	<StyledLink id={id} to={to} bold={bold}>{text}</StyledLink>
);

Link.defaultProps = {
	bold: '400'
}

Link.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	bold: PropTypes.string,
};

export default Link;
