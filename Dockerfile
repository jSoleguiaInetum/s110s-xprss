# Utiliza la imagen oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expones el puerto en el que el servidor de Express escucha
EXPOSE 3000

# Comienza el servidor de Express
CMD [ "npm", "start" ]