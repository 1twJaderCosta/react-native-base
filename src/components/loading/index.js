import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

const Loading = ({loading}) => (
  <>
    {loading ? (
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#0B8CC2" style={styles.icon} />
      </View>
    ) : null}
  </>
);

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
