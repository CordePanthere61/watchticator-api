FROM node:18.8.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g ts-node-dev && npm install
COPY . .
CMD ["npm", "run", "build"]