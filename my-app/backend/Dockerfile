FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN npm prune --omit=dev

ENV DEBUG=playground:*
  
USER node

EXPOSE 3000

CMD ["npm", "start"]
