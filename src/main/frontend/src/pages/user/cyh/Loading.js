import React from 'react'
import {Background, LoadingText} from './Styles';
import Spinner from './Spin@1x-1.8s-200px-200px.gif'

export default () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src={Spinner} alt='로딩중' width='10%' />
    </Background>
  );
};
