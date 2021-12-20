# CryptoXchange
CryptoXchange is a full-stack (mock) cryptocurrency exchange and wallet built using React.js, Redux, and Ruby on Rails.

## Installation
Soon to be deployed to Heroku. For the remainder of development head over to https://github.com/TraeCoker/crypto-wallet-backend to clone the database to your local machine. 

Next run:

```bash
bundle install
```
Followed by:
```bash
Rails db:create
Rails db:migrate
Rails s
```
This will migrate the database and boot up the Rails server.

Next clone the frontend to your local machine and run:
```bash
npm install
npm start
```
This should boot up the application in your browser. If not head to http://localhost:3000 in your browser to view.
## Usage
<img width="866" alt="1" src="https://user-images.githubusercontent.com/79291960/146821646-1967c1f7-670b-43b1-b1f6-34f1bf7975a1.PNG">

From the landing page you will be prompted to sign up or log in to an existing account.
Once signed in you are redirected to your personal wallet dashboard.

<img width="947" alt="2" src="https://user-images.githubusercontent.com/79291960/146823748-beaa3e48-0a87-4031-8c0e-3a1b3e9bec02.PNG">

From here the historical market data for each of the coins in your wallet is charted against the historical holdings data of your wallet to graph your earnings and losses over time. 

At the top of the chart you can toggle between which coins are visible on the chart. 

<img width="570" alt="3" src="https://user-images.githubusercontent.com/79291960/146823827-2a366196-97cd-4125-99db-923af3beee01.PNG">

To the right of the chart the value of each of your coin holdings is shown in USD based on the current market price. By selecting "Buy or Sell" for any of the coins you open a menu that lets you make transactions to your account.

<img width="887" alt="5" src="https://user-images.githubusercontent.com/79291960/146823937-6d3c66cf-9c62-4ee7-bf98-6c5fcb913c55.PNG">

Selecting the Market tab from the navigation bar will render a marketplace listing of the top 100 cryptocurrencies and their real-time current market price, market cap, volume, etc. 

<img width="897" alt="4" src="https://user-images.githubusercontent.com/79291960/146824139-92a3cbe7-b83f-4a46-a49d-2030fa4a5881.PNG">

Coming Soon:
-real-time historical market data charts for each coin
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)