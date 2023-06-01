# CLAON-Front

클라이밍 커뮤니티 서비스 "클라온"의 모바일, 웹 클라이언트입니다. 서비스의 클라이
언트 관련 기능 및 이슈를 모두 이 레포지토리를 통하여 관리하는 것을 목표합니다.

## screenShot

![클라온gif](https://github.com/qowlsdn8007/CL-Raon-Front/assets/33804074/f0e1bdf2-74ea-49af-a29f-dfe121b6a6a2)

## Contribution Guide

- [참고](./CONTRIBUTING.md)

## tech stack

- 프로젝트 구조: monorepo 구조를 통한 nextjs (web), react-native (app) 두 프로젝
  트를 함께 관리
  - 공통 라이브러리 통합 관리
  - storybook 통합 관리
  - 이슈 관리 용이
  - eslint, prettier 스타일 컨벤션 통일, 관리 용이
- 상태 관리: redux-toolkit, react-query를 사용한 client, server-side 상태 관리
  - redux-toolkit을 통해 ui 상태 관리 사용
  - react-query를 통해 server data fetching 및 관리
  - query-key-factory를 사용한 react-query 키 관리
- 스타일: tailwindcss을 사용해 스타일 적용
  - jsx 태그에 바로 스타일 적용
  - 네이밍 제약에서 벗어날 수 있음
- etc:
  - storybook : 앱과 웹의 컴포넌트들을 하나의 스토리북에서 통합관리
    - @addon/react-native-web을 통해 react-native 컴포넌트를 웹 컴포넌트로 빌드
      => 스토리 북에서 사용
    - 여러 도구창을 확인하지 않아도 되는 장점

## docs

- [참고](https://reminiscent-beam-582.notion.site/7fe356d37b1b4182a510861b76cbd5d6)

## usage

- 서브 패키지 폴더

  - 모바일: ./packages/climbingapp
  - 웹: ./packages/climbingweb

- 명령어
  - 모바일 실행
  ```bash
    - aos: yarn workspace climbingapp run android
    - ios: yarn workspace climbingapp run ios
  ```
  - 웹 프로젝트 개발모드 실행
  ```bash
    - yarn workspace cimbingweb run dev
  ```
