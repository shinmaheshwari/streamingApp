FROM node:18-alpine

# 🔥 Disable strict SSL (fixes corporate CA issues)
RUN npm config set strict-ssl false

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
