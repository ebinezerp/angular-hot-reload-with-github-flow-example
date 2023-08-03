FROM  --platform=linux/amd64 node:latest as development

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


COPY package.json /app

RUN npm install

COPY . .

COPY nginx-config-local.conf /etc/nginx/conf.d/default.conf

CMD ["ng", "build", "--production"]



FROM --platform=linux/amd64 nginx:alpine
COPY --from=development /app/dist/angular-hot-reload-example /usr/share/nginx/html
COPY ./nginx-config-prod.conf /etc/nginx/conf.d/default.conf
