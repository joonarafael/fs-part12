FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

RUN VITE_BACKEND_URL=http://localhost:3000 npm run build

EXPOSE 3000
EXPOSE 4173

CMD ["npm", "run", "preview"]
