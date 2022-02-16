# AngularEnv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## add inject env

`$ ng add @ngx-env/builder`

## Setup .env files

```js
1. create  .env at root project
2. create  .env.development at root project
3. create  .env.staging at root project
4. create  .env.test at root project
5. create  .env.production at root project
```

## Write some secret

```bash 
.env, .env.development, .env.staging, .env.test, .env.production
```

```bash
NG_APP_SECRET=SECRET_KEY
...

```

## Setup environments in Angular

1. create src/environments/environment.ts # default to development mode
2. create src/environments/environment.development.ts # set to development mode
3. create src/environments/environment.staging.ts # set to staging mode
4. create src/environments/environment.test.ts # set to testing mode
5. create src/environments/environment.production.ts # set to production mode

## Setup angular.json environment

```js
1. setup configuration build state for development state
   {
       ...
       build: {
           ...
           configurations: {
              ...
              "development": {
                ...
               },
           }
       },
       serve: {
           ...
           configurations: {
              ...
              "development": {
                "browserTarget": "angular-env:build:development"
               },
           }
       }
   }
   ```

   ```js
2. setup configuration build state for staging staging
   {
       ...
       build: {
           ...
           configurations: {
              ...
              "staging": {
                ...
               },
           }
       },
       serve: {
           ...
           configurations: {
              ...
              "staging": {
                "browserTarget": "angular-env:build:staging"
               },
           }
       }
   }
   ```

   ```js
3. setup configuration build state for testing state
   {
       ...
       build: {
           ...
           configurations: {
              ...
              "test": {
                ...
               },
           }
       },
       serve: {
           ...
           configurations: {
              ...
              "test": {
                "browserTarget": "angular-env:build:test"
               },
           }
       }
   }
   ```

   ```js
4. setup configuration build state for production state
   {
       ...
       build: {
           ...
           configurations: {
              ...
              "production": {
                ...
               },
           }
       },
       serve: {
           ...
           configurations: {
              ...
              "production": {
                "browserTarget": "angular-env:build:production"
               },
           }
       }
   }
   ```

   ## Setup script

```js
"start": "NODE_ENV=development ng serve --configuration development",
"start:test": "NODE_ENV=test ng serve --configuration test",
"start:staging": "NODE_ENV=staging ng serve --configuration staging",
"serve:prod": "NODE_ENV=production ng serve --configuration production",
```