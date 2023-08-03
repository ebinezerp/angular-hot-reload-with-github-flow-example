FROM --platform=linux/amd64 node:latest as development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]

