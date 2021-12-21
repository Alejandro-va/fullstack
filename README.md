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
