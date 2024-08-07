import CryptoJS from "crypto-js";

const key = import.meta.env.VITE_ENCRYPTION_KEY;

export const encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decrypt = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
