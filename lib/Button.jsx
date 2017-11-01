import styled from 'styled-components';
import theme from './theme';
import defaultTheme from './theme';


const Button = styled.button`
  font-family: Helvetica Neue,Segoe UI,Helvetica,Arial,sans-serif;
  color: #0184ff;
  background-color: ${({ theme }) => theme.buttonColor};
  top : ${props => props.last ? '0px' : ''};
  box-shadow: none;
  cursor:  pointer;
  outline: none;
  text-align: center;
  display: block;
  padding: 10px 16px 10px 16px;
  position: relative;
  font-weight: 500;
  width:100%;
  font-size : 1rem;
  ${props => props.first ? `border-top-width: 1px;`: ''};
  border-color: #f2f2f2;
  border-left-width: 0px;
  border-right-width: 0px;
  &:last-child {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-left-radius: 1.3em;
    border-bottom-right-radius: 1.3em;
    border-bottom-width: 0px;
  }
`;


Button.defaultProps = {
    theme: defaultTheme,
  };

export default Button;