FROM node:12.18.2-alpine3.12 as build-step
WORKDIR /api
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
