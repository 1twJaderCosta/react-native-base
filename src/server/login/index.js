import {Alert} from 'react-native';
import RestService from '#/service/request';

export default class LoginServer {
  static async login() {
    try {
      // criar init loading

      // get exemple
      const {data} = await RestService.Auth().get('/login');

      // post exemple
      const {data2} = await RestService.Auth().post('/login', {
        login: 'jader.costa',
        password: '123456',
      });

      // put exemple
      const {data3} = await RestService.Auth().put('/login', {
        login: 'jader.costa',
        password: '123456',
      });
    } catch (err) {
      Alert.alert('Ops', 'Ocorreu um erro, tente mais tarde.', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'},
      ]);
    } finally {
      // criar top loading
    }
  }
}
