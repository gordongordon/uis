import styled from 'styled-components';
import defaultTheme from './theme';

const Title = styled.h2`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.titleFontSize};
`;

Title.defaultProps = {
  theme: defaultTheme,
};

export default Title;
