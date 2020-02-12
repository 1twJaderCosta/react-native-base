import React from 'react';
import {View} from 'react-native';
import I18n from '#/i18n';

import {useNavigation} from '@react-navigation/native';

import ButtonComponent from '#/components/button';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <ButtonComponent
        title={I18n.t('home')}
        click={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}
