FROM node:12.18-alpine3.12

COPY $PWD /home/node/app

WORKDIR /home/node/app

RUN yarn install --prod

EXPOSE 5000

CMD ["/bin/sh", "-c", "yarn start"]