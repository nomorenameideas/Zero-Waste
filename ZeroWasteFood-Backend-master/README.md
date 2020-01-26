## **Zero Waste Food**

Deployment Documentation

####requirements:

- PHP 7.2 or higher
- Composer
- MySQL

####Installation:

- Clone this repository to the location where it needs to be installed
 ```
$ git clone ...git  
```

- Inside the project folder and install the dependencies via composer
```
$ cd ZeroFood

$ composer install
```
- Add .env file and add your database connection credentials
```
$ nano .env

#inside .env:

APP_NAME=ZeroFood
APP_ENV=local // for development
APP_DEBUG=true // false in prodection
APP_URL=[app_url]
APP_TIMEZONE=UTC

DB_CONNECTION=mysql
DB_HOST=[db_host]
DB_PORT=3306
DB_DATABASE=[db_name]
DB_USERNAME=[db_user]
DB_PASSWORD=[db_pass]

```

- Generate jwt key by running this command :
```
$ php artisan jwt:secret
 ```

Set token expire time inside .env file
```
 JWT_TTL=36000
```

- Migrate the database by running:
```
$ php artisan migrate
```
## Frontend Applications

**Both client and admin app.**

####Building/compiling requirements

`npm tool`

####Building documentation

**DOWNLOAD [NODEJS](https://nodejs.org/dist/v13.1.0/node-v13.1.0-x64.msi)**

#### First step

**Download the project**

```
git clone
```

**You should have a GIT BASH**

#### Second step

**Navigate to the project folder** ,

```
cd zeroFoodFront
```

**RUN THIS COMMAND**

```
npm install
```

### Third step

**TO RUN THE SERVER**

```
npm run serve
```
