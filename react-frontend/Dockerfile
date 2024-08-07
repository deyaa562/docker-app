FROM node:14

WORKDIR /app

ARG REACT_APP_BACKEND_PORT
ENV REACT_APP_BACKEND_PORT=$REACT_APP_BACKEND_PORT

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
