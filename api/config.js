
// api/config.js
export default function handler(request, response) {
  // Vercel 환경 변수에서 Firebase 설정 값을 읽어옵니다.
  const firebaseConfig = {
    apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID,
  };

  // 설정 값을 JSON 형태로 클라이언트(브라우저)에 전송합니다.
  response.status(200).json(firebaseConfig);
}
