
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=20000

EXPOSE 20000

CMD ["npm", "run", "start"]