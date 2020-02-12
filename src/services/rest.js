import {Alert} from 'react-native';
import Axios from 'axios';
import {baseURL} from '#/config/url';

export const getInstance = header => {
  const instance = Axios.create({
    baseURL,
    timeout: 150000,
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
  });
  instance.interceptors.response.use(
    response => {
      console.log('interceptor', response);
    },
    async err => {
      if (err.message === 'Network Error') {
        Alert.alert(
          'Ops!',
          'Verifique se você está conectado na internet e tente novamente.',
          [{text: 'OK', onPress: () => {}}],
        );
        return Promise.reject(err);
      }
      if (err.message === 'timeout of 150000ms exceeded') {
        Alert.alert(
          'Tempo expirado',
          `Tempo maxímo de conexão foi excedido, tente novamente, ${[
            {text: 'OK'},
          ]}`,
        );
        return Promise.reject(err);
      }
      return Promise.reject(err);
    },
  );
  return instance;
};

export const uploadImage = (pathUrl, formdata, token, method) => {
  try {
    return fetch(`${baseURL}${pathUrl}`, {
      method,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...token,
      },
      body: formdata,
    });
  } catch (err) {
    Alert.alert('Ops', 'Ocorreu um erro, tente mais tarde.', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK'},
    ]);
  }
};

export const RestService = getInstance();
