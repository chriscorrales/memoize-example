import { useCallback, useMemo, useState } from 'react';
import countService from '../../services/countService';
import Counter from './Count';
import { Container } from './styles';

function CountList() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1000);
  const handleInclement = useCallback(() => setCount1((count1) => count1 + 1), []);
  const handleDecrement = () => setCount2((count2) => count2 - 1);

  const color = useMemo(() => countService.chooseColor(count1), []);

  return (
    <Container>
      <Counter color={color} setValue={handleInclement} value={count1} buttonText="Inclement" />
      <Counter setValue={handleDecrement} value={count2} buttonText="Declement" />
    </Container>
  );
}

export default CountList;
