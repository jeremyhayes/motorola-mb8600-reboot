FROM node:14 as builder

WORKDIR /app/source

# restore dependencies
COPY package*.json ./
RUN npm install

# copy source
COPY . .


FROM node:14-alpine as final

WORKDIR /app

# copy runtime files
COPY --from=builder /app/source ./

ENTRYPOINT ./docker-entrypoint.sh
