import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';

const Toggler = styled(({ theme }) => ({
  border: `1px solid ${theme.color}`,
  backgroundColor: '#FFF',
  padding: theme.space2,
  margin: theme.space1,
  borderRadius: theme.borderRadius,
  display: 'none',
}), ({ className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
  >
    <Icon />
  </button>
), p => p);
Toggler.propTypes = {
  /**  */
  onClick: PropTypes.func.isRequired,
};
export default Toggler;

const Icon = styled(({ theme }) => ({
  display: 'block',
  fill: theme.color,
}), ({ className }) => (
  <svg className={className} width={20} height={20} viewBox="0 0 1792 1792">
    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
  </svg>
), p => p);
