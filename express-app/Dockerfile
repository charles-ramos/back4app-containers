FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install --omit=dev

CMD ["npm", "start"]
