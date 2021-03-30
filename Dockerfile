FROM mhart/alpine-node AS dependencies

ENV ENV "production"
ENV ENV "production"
ENV HOST "0.0.0.0"
ENV PORT "3000"
ENV TZ "Asia/Bangkok"

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD yarn start
