import { memo } from 'react';
import { Button, Container, Text } from './styles';

// import { Container } from './styles';

interface IProps {
  value: number;
  setValue: () => void;
  buttonText: string;
  color?: string;
}

function Count({ value, setValue, buttonText, color }: IProps) {
  return (
    <Container style={{ backgroundColor: color }}>
      <Text>{value}</Text>
      <Button onClick={setValue}>{buttonText}</Button>
    </Container>
  );
}

export default memo(Count);
