import { useCallback, useMemo, useState } from 'react';
import countService from '../../services/countService';
import Count from './Count';
import { Container } from './styles';


function CountList() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1000);
  const color = useMemo(() => countService.chooseColor(count1), [count1]);

  const handleInclement = useCallback(async () => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleDecrement = useCallback(() => {
    setCount2(count2 - 1);
  }, [count2]);

  return (
    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Count color={color} value={count1} setValue={handleInclement} buttonText="Inclement" />
      <Count value={count2} setValue={handleDecrement} buttonText="Declement" />
    </Container>
  );
}

export default CountList;
