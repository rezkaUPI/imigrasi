// pages/_app.js
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/styles.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;