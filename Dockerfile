# syntax=docker/dockerfile:1.4

FROM node:20.12.2-alpine as base
WORKDIR /usr/src/app

# Install and run development mode
FROM base as development
ENV NODE_ENV development
COPY package.json package-lock.json ./
RUN npm install
CMD ["npm", "run", "start:debug"]


FROM base as build
COPY package.json package-lock.json ./
RUN npm install
COPY --link . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune

# Install and run production mode
FROM base as production
ENV NODE_ENV production
COPY --from=build /usr/src/app/dist .
COPY --from=build /usr/src/app/node_modules node_modules
CMD ["node", "main.js"]