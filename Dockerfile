# Use uma imagem Node.js como base
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do aplicativo
COPY . .

# Exponha a porta em que a aplicação Angular será executada
EXPOSE 4200

# Comando para iniciar a aplicação
CMD ["npm", "start"]
