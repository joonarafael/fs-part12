FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=playground:*
  
USER node

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]