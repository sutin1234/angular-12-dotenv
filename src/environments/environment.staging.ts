export const environment = {
  production: false,
  isStaging: true,
  secretKey: process.env['NG_APP_SECRET']
};

console.log(environment, process.env);