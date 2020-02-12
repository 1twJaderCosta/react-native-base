import React from 'react';
import {Button} from 'react-native';

// import { Container } from './styles';

export default function button({title, click}) {
  return <Button title={title} onPress={click} />;
}
