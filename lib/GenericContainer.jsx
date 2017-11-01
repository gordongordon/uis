import styled from 'styled-components';
import defaultTheme from './theme';

const GenericContainer = styled.div`
  background: ${({ theme }) => theme.background};
  border : 1px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.fontFamily};
  overflow: hidden;
  position: 'relative';
  bottom:    'initial';
  right: 'initial';
  width: ${props => props.width};
  transform: ${props => props.opened ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  transition: transform .3s ease;
  border-bottom-left-radius: 1.3em;
  border-bottom-right-radius: 1.3em;

  @media screen and (max-width: 568px) {
    border-radius: '';
    bottom: 0;
    height: 100%;
    right: 0;
    width: 100%;
  }
`;

GenericContainer.defaultProps = {
  theme: defaultTheme,
};

export default GenericContainer;
