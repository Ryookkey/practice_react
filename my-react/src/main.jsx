import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// １行下のconst root = createRoot部分は更に下でサンプルコードを記載する場合コメントアウト解除すること

// const root = createRoot(document.getElementById('root'));

// 以下は基本的にコメントアウトのまま
// setInterval(() => {
//   root.render(
//     <p>現在時刻: {(new Date()).toLocaleString()}</p>
//   );
// }, 1000);

// root.render(
//   <div>
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React!</p>
//   </div>
// )

// const name = '鈴木';
// root.render(
//   <p>こんにちは、{name}です！</p>
// );