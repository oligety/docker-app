FROM node:22-alpine
LABEL maintainer="oliechti@gmx.ch"
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3001
CMD node index.js