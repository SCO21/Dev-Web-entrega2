FROM node:18-alpine

# Set the working directory
WORKDIR /code
COPY ./ ./


# Install dependencies
RUN npm install

EXPOSE 3000

CMD [ "node", "local.js" ]
