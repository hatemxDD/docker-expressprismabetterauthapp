# Installs Node.js image

FROM node:25.4.0-alpine3.22

RUN npm install -g pnpm

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "pnpm-lock.yaml", "tsconfig.json", ".env", "./"]
# Copies prisma 
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src

# Installs all packages
RUN pnpm prisma generate

# Runs the dev npm script to build & start the server
CMD ["pnpm", "run", "dev"]
