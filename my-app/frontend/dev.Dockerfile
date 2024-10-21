FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

EXPOSE 3000
EXPOSE 5173

CMD ["npm", "run", "dev"]