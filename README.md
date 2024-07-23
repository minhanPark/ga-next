# 정리

## 1. 프로젝트에 세팅하기

```bash
npm install @next/third-parties@latest
```

위의 형태로 설치한다.

전체에 적용하려면 루트 레이아웃에 적용시켜준다.

```js
// app/layout

import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body>{children}</body>
    </html>
  );
}
```

gtmId는 태그 매니저 가입 시 나오는 GTM-xxxxxx 형태의 id를 넣어주면 된다.

## 2. 구글 애널리틱스와 연결하기

애널리틱스는 새 계정을 만들어준다.
만약 이미 있다면 **관리 > 데이터 스트림 > 전체 > 웹 스트림 세부정보 > 측정 ID**를 통해서 ga의 id를 확인 가능하다.

태그 관리자로 돌아와서 **태그 > 새로 만들기 > 태그 구성 > GA 애널리틱스 > Google 태그 > 트리거 클릭 > All Pages 체크 > 이름 지정 >저장**을 누른다.  
미리 보기 또는 제출을 통해서 해당 부분에 대해 적용을 시킨다.

## 3. 중간 정리

- 태그 관리자는 태그와 트리거를 설정하는 곳이지 여기서 데이터를 보는 곳은 아님
- 사이드바에서 **변수 > 기본제공 변수 > 구성**에서 여러 변수가 있는데 여기서 클릭을 체크해줘야 사용가능하다.
