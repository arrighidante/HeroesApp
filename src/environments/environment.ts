export const environment = {
  production: false,
  /* OBS: 5) Sensitive configuration variables

   In production applications, the APIs urls should be stored in a configuration file
   or environment variables. This way, the application can be deployed in different environments
   without having to change the code.

  **************************************************************
   For simplicity, we are hardcoding the API URL and keys here.
  **************************************************************

  */

  // This keys will be stored here just for the purpose of this challenge. I'll delete them after the review.
  marvelPrivateKey: '177f53bba1305b5f8b8a42d6e8755dff2d611c78',
  marvelPublicKey: 'ade7bf1ea984a87bd9042f9599a1af16',
  apiMarvelURL: 'https://gateway.marvel.com:443/v1/public',
};
