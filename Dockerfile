FROM node:10

WORKDIR /c/Users/Deserie Murembeni/Desktop/deseriedocker1

COPY package*.json ./

COPY app.js ./

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]