creo backend
npm init -yes
npm i express morgan cors

lo instalo con -D para q se instale aparte en devDependenci, paquetes q solo vamos a utilizar en desarrollo
npm i nodemon -D

para probar las peticiones put, post y delete utilizo:
"thunder client", (es una extencion del vsc) es como usar postman o algo asi pero dentro del ide

modulo para conectar con postgreSQL(este modulo permite conectar y ejecutar consultas)
npm i pg
para movereme dentro de la consola pg:
\l => muestra toas las base de datos
\ c baseDdatos =>entro a la base de datos

VARIABLES DE ENTORNO
npm i dotenv
lñuego cuento un fichero ".env"

---

para excluir archivos en el desarrollo
workspace
preferences: open workspaces setting (JSON)
{
"files.exclude": {
"**/.git": true,
"**/.svn": true,
"**/.hg": true,
"**/CVS": true,
"**/.DS_Store": true,
"**/Thumbs.db": true,
"**/node_modules": true,
"**client/node_modules": true
}
}

---

para las rutas(dentro de la carpeta client)
npm i react-router-dom (debe ser de las version 6 en adelamte pq rompe cn la 5)

---

pag de ui
https://mui.com/
// with npm
npm install @mui/material @emotion/react @emotion/styled
// with npm
npm install @mui/icons-material

---

para correr bakend
npm run dev
para entrar a la carpeta front
\cd client
npm start
