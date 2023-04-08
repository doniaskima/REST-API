FROM node:18 AS dependencies

ADD package.json /tmp/package.json
ADD npm.lock /tmp/npm.lock
RUN rm -rf build
RUN npm install express
RUN cd /tmp && npm install
ADD ./ /src
RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/
WORKDIR /src
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=dependencies /src/build /app/build
COPY package.json .
COPY npm.lock .
RUN npm install
CMD ["node", "build/src/app.js"]
