import { useNavigation } from '@react-navigation/native';
import { NextButton } from 'climbingapp/src/component/button/Button';
import {
  Title,
  TitleContainer,
} from 'climbingapp/src/component/text/AuthTitle';
import { ScreenView } from 'climbingapp/src/component/view/ScreenView';
import { colorStyles } from 'climbingapp/src/styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { LoginScreenProp } from './type';
import { Dimensions, Text } from 'react-native';
import { MyTextInput } from 'climbingapp/src/component/text-input/TextInput';
import { ProfileImage } from 'climbingapp/src/component/profile-image/ProfileImage';
import { useDispatch } from 'react-redux';
import {
  setImagePath,
  setNickName,
} from 'climbingapp/src/store/slices/authInfo';
import { debounce } from 'lodash';
import { api } from 'climbingapp/src/utils/constants';

import axios from 'axios';
import { vs } from 'react-native-size-matters';
import { useAuth } from 'climbingapp/src/hooks/useAuth';
import { useImagePicker } from 'climbingapp/src/hooks/useImagePicker';
import { setProfileImageFile } from 'climbingapp/src/store/slices/s3util';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useKeyboard } from 'climbingapp/src/hooks/useKeyboard';
import { useHeaderHeight } from '@react-navigation/elements';

const ButtonContainer = styled.View`
  width: 100%;
  bottom: 24px;
  height: ${vs(56)}px;
`;

const ProfileContainer = styled.View`
  flex: 1;
`;

const NickNameContainer = styled.View`
  flex: 2;
`;

const SubText = styled.Text`
  color: ${colorStyles.Black};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: ${vs(8)}px;
`;
const ErrorText = styled.Text`
  margin: 5px;
  color: ${colorStyles.Red500};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

function SignUpStepOneScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const { userInfo } = useAuth();
  const { pickerResponse, selectImage } = useImagePicker();
  const uri = pickerResponse?.assets
    ? pickerResponse?.assets[0]?.uri
    : undefined;
  const { nickname } = userInfo;
  const [isErrorNickName, setIsErrorNickName] = useState<string>('');
  const isDisabled = nickname === '' || isErrorNickName !== '';
  const dispatch = useDispatch();

  const handleCheckDuplicated = async (nick: string | undefined) => {
    if (nick === '') return;
    const checkNickName = await axios
      .get(api + `/auth/nickname/${nick}/duplicate-check`)
      .then((res) => res.data.result);
    return checkNickName;
  };

  const handleNickNameErrorMessage = debounce(async (nick: string) => {
    let errorMessage: string = await handleCheckDuplicated(nick).then(
      (duplicated) =>
        (errorMessage = duplicated ? '닉네임이 중복되었습니다!' : '')
    );

    errorMessage = !/^[0-9a-zA-Z가-힣]{2,20}$/gi.test(nick)
      ? '닉네임 규칙을 지켜주세요'
      : errorMessage;
    setIsErrorNickName(errorMessage);
  }, 300);

  const handleGotoNext = () => {
    navigation.navigate('signUpStepTwo');
  };

  useEffect(() => {
    handleNickNameErrorMessage(nickname + '');
  }, [nickname, isErrorNickName]);

  useEffect(() => {
    dispatch(setImagePath(uri));
    dispatch(setProfileImageFile(pickerResponse?.assets[0]));
  }, [uri]);

  const handleChangeNickName = (nick: string) => {
    dispatch(setNickName(nick));
  };
  const { keyboardHeight, keyboardStatus } = useKeyboard();
  const screenHeight = Dimensions.get('window').height;
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ height: keyboardStatus ? screenHeight - headerHeight + keyboardHeight : screenHeight - headerHeight }}
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      scrollEnabled={keyboardStatus}
      pagingEnabled
    >
      <ScreenView color={colorStyles.White}>
        <TitleContainer>
          <Title>다음 항목을</Title>
          <Title>입력해 주세요</Title>
        </TitleContainer>
        <ProfileContainer>
          <SubText>프로필 사진</SubText>
          <ProfileImage icon="camera" src={uri} onPress={selectImage} />
        </ProfileContainer>
        <NickNameContainer>
          <SubText>
            닉네임 <Text style={{ color: '#FF0000' }}>*</Text>{' '}
          </SubText>
          <MyTextInput
            value={nickname + ''}
            onChangeText={handleChangeNickName}
            placeholder="한글, 영문, 숫자 포함 2-20자"
          />
          <ErrorText>{nickname && isDisabled && isErrorNickName}</ErrorText>
        </NickNameContainer>
        <ButtonContainer>
          <NextButton disabled={isDisabled} onPress={handleGotoNext} />
        </ButtonContainer>

      </ScreenView >
    </KeyboardAwareScrollView>

  );
}

export default SignUpStepOneScreen;
