FROM node:14-alpine

# create dir
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# build dependenciess
COPY ./package*.json ./
USER node
# dont install dev depedencies
RUN npm install --omit=dev


# copy in source code
COPY --chown=node:node ./ ./

EXPOSE 6400

# start express server
CMD [ "npm", "start" ]
