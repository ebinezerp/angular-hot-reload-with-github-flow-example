FROM  --platform=linux/amd64 node:latest as development

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


COPY package.json /app

RUN npm install

COPY . .

CMD ["npm", "start"]


FROM  --platform=linux/amd64 node:latest as production

WORKDIR /app

# Install Angular CLI globally (only needed for building the production version)
RUN npm install -g @angular/cli

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Build the optimized production version of the Angular app
RUN ng build --configuration=production


FROM --platform=linux/amd64 nginx:alpine as final
COPY --from=production /app/dist/angular-hot-reload-example /usr/share/nginx/html
COPY ./nginx-config.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
