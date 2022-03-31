# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production

# add app
COPY . ./
RUN yarn run build
EXPOSE 8081

# start app
CMD ["yarn", "start"]