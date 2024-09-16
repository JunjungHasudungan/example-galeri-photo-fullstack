## install express

## install express, prisma, cors, dotenv
npm install express prisma cors dotenv

## melakukan start API
node .

## melakukan install nodemoon
nodemoon bekerja untuk langsung reloading api tanpa harus melakukan stop dan start api yang ada
npm install nodemon --save-dev
dan custome dipackage.json dibagian script: mejadi
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

sekarang melakukan start kembali dengan npm run dev
 
## install prisma CLI
npm install prisma --save-dev

## inisialisasi prisma
npx prisma init

## install prisma client
npm install @prisma/client

## melakukan generate prisma client
npx prisma generate

## mengirimkan data model dari prisma ke database untuk membuat table
setelah selesai membuat model schema prisma, melakukan generate ke database
npx prisma db push

## melakukan install bcrypt
npm install bcrypt

