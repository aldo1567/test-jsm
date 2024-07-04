1. Install Node Module dengan command:
   
	npm install
   
2. Install Sequelize-cli dan init sequelize-cli di project dengan command:
   
	npm install --save-dev sequelize-cli

	npx sequelize-cli init

3. Isi .env:
   
	NODE_ENV=development // development/test/production

	
 	PORT=3007 // Not used port
	
 	JWT_SECRET="4cc82fe1a3fce3c4ad8204092aa3e8a1400fd144151ee105372557db13f38ff877f13c40aa1680a97e40c771c9b4c823f35a60253db27a8f95f0d9b4565b08ff" // Random String

4. Ubah setting database di config/config.json

   ![image](https://github.com/aldo1567/test-jsm/assets/62138780/97b320c6-a8e2-454c-88f1-4a5866c57af8)


5. Jalankan migrasi dengan command:

	npx sequelize-cli db:migrate

6. Jalankan seeder dengan command:
   
	npx sequelize-cli db:seed:all

7. Jalankan project dengan command:

	npm run dev

8. Untuk collection POSTMAN dapat di import menggunakan link berikut:

	https://api.postman.com/collections/11877243-c4a6bf0c-076f-48e0-8aeb-b9b3ab1d3529?access_key=PMAT-01J1WM65XJYZ4VDDEZBZTKY5YJ

9. Gunakan API login untuk mendapatkan token, untuk akunnya bisa login dengan data hasil seeder
    
    email: admin@email.co

    password: password123
