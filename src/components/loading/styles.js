import {StyleSheet} from 'react-native';
import colors from '#/styles/colorPallet';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    zIndex: 100000,
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.5,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default styles;
