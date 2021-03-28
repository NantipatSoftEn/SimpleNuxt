FROM node:15.12.0-alpine

ENV ENV "production"
ENV ENV "production"
ENV HOST "0.0.0.0"
ENV PORT "3000"
ENV TZ "Asia/Bangkok"

RUN apk --no-cache add curl g++ gcc libgcc libstdc++ linux-headers make python

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

WORKDIR /app

COPY . .
RUN yarn --frozen-lockfile --production

RUN yarn build

CMD yarn start
