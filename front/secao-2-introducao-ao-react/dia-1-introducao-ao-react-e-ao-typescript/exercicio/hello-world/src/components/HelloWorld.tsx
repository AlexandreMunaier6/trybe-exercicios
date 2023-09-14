import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  const name = 'Alexandre Munaier';
  const birth = '20/06/2002';
  const age = calculateAge(birth);

  return (
    <>
      <h1 style={ { color: 'blue' } }>{ name }</h1>
      <p>{ age }</p>
      <Title />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
