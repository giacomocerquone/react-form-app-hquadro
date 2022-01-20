import styled from "styled-components";

export const Typography = styled.p`
  font-weight: ${(props) => props.color || 400};
`;

export const Heading = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 24px;
`;
