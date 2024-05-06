# Hospital-Dashboard-Server

## Setup and run on Local
    1. in terminal, npm install
    2. go to config/config.json, configure database username and password
    3. in terminal, npx sequelize-cli db:create
    4. in terminal, npx sequelize-cli db:migrate
    5. in terminal, npx sequelize-cli db:seed:all
    6. in terminal, npm run dev