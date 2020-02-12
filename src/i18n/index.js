import I18n from 'react-native-i18n';
import ptBr from './locale/ptBr';
// import en from './locale/en';

// import I18n, { getLanguages } from 'react-native-i18n';

I18n.fallbacks = true;

I18n.defaultLocale = 'ptBr';

I18n.translations = {
  ptBr,
};

// getLanguages().then(languages => {
//   console.log(languages); // ['en-US', 'en']
// });

export default I18n;
