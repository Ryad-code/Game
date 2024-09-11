FROM    node:latest

WORKDIR /src

EXPOSE  5000

CMD     ["/bin/bash", "-c", "npm install && npx prisma db push && npx prisma generate && npx prisma db seed && npm start"]