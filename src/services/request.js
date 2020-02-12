import {Alert} from 'react-native';
import {RestService, uploadImage} from '~/services/api';

export default class RequestService {
  static Auth() {
    const token = '';
    try {
      return RestService({
        Authorization: `Bearer ${token}`,
      });
    } catch (err) {
      Alert.alert('Ops', 'Ocorreu um erro, tente mais tarde.', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'},
        ,
      ]);
    }
  }

  static UploadAuth(pathUrl, formdata, method) {
    try {
      const token = '';
      return uploadImage(
        pathUrl,
        formdata,
        {
          Authorization: `Bearer ${token}`,
        },
        method,
      );
    } catch (err) {
      Alert.alert('Ops', 'Ocorreu um erro, tente mais tarde.', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'},
        ,
      ]);
    }
  }
}
