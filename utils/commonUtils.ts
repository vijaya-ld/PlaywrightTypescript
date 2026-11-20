import cryptoJS from 'crypto-js';

export default class CommonUtils {
    private secretKey: string;
    /**
     * Initializing SecretKey from environment variable. If SECRET_KEY is not defined, it throws an error.  
     */
    constructor() {
        //this.secretKey = process.env.SECRET_KEY ;
        if(process.env.SECRET_KEY){
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error('SECRET_KEY is not defined in environment variables');
        }
    }

    /**
     * Encrypts the provided data using AES encryption.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    public encryptData(data: string) {
        const encryptedData = cryptoJS.AES.encrypt(data, this.secretKey).toString();
        console.log('Encrypted Data:', encryptedData);
        return encryptedData;
    }

    /**
     * Decrypts the provided encrypted data using AES decryption.
     * @param encryptedData The data to decrypt.
     * @returns The decrypted data.
     */
    public decryptData(encryptedData: string) {
        const decryptedData = cryptoJS.AES.decrypt(encryptedData, this.secretKey).toString(cryptoJS.enc.Utf8);  
        
        console.log('Decrypted Data:', decryptedData);
        return decryptedData;
    }
}