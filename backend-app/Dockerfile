FROM --platform=linux/amd64 node:20-alpine as development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]

