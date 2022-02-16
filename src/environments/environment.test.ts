export const environment = {
  production: false,
  isTesting: true,
  secretKey: process.env['NG_APP_SECRET']
};

console.log(environment, process.env);