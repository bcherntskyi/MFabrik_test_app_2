FROM node:12.18.2-alpine3.12 as build-step
WORKDIR /web
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]
