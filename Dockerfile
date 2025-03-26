
FROM node:18-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install || exit 1


COPY . .


EXPOSE 3000


CMD ["node", "index.js"]
