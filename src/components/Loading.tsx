import { Center, Spinner } from 'native-base';

//center para manter tudo no centro da tela
//spinner para efeito de loading

export function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="secondary.700" />
    </Center>
  );
}