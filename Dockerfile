# Sarkar-MD Dockerfile

# Node.js ka lightweight version use karein
FROM node:18-alpine

# Work directory set karein
WORKDIR /app

# Package.json aur package-lock.json copy karein
COPY package*.json ./

# Dependencies install karein
RUN npm install

# Baaki sab files copy karein
COPY . .

# Port expose karein (agar API kisi specific port pe chalti hai)
EXPOSE 3000

# API start karne ka command
CMD ["npm", "start"]

# POWERED BY BANDAHEALI
