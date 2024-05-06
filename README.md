# Hospital-Dashboard-Server

## Setup and run on Local
    1. in terminal or git bash, git clone https://github.com/rahfathoni/hospital-dashboard-slm-server.git
    2. in terminal, npm install
    3. go to config/config.json, configure database username and password
    4. in terminal, npx sequelize-cli db:create
    5. in terminal, npx sequelize-cli db:migrate
    6. in terminal, npx sequelize-cli db:seed:all
    7. in terminal, npm run dev