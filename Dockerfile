FROM node:8.11.1-alpine

RUN npm install pm2 -g

# Set a working directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock /app/
RUN yarn install

#Copy source code
COPY . .

EXPOSE 4500

CMD npm run prod:docker
