import React from 'react';
import I18n from '#/i18n';

import {connect} from 'react-redux';
import {addLoading} from '#/store/actions/loading';

import {useNavigation} from '@react-navigation/native';

import Logo from '#/assets/images/login/svgExemple.svg';

import ButtonComponent from '#/components/button';
import LoadingComponent from '#/components/loading';

function Login(props) {
  const navigation = useNavigation();

  const activeLoadingExemple = () => {
    // apenas para mostrar o estado
    console.log('loading props', props.loading);
    props.startLoading();
  };

  return (
    <>
      <LoadingComponent />
      <Logo width={120} height={40} />
      <ButtonComponent
        title={I18n.t('send')}
        click={() => {
          navigation.navigate('Home');
        }}
      />
      <p>{I18n.t('send')}</p>

      <ButtonComponent
        title={I18n.t('sold')}
        click={() => {
          activeLoadingExemple();
        }}
      />
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(addLoading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
