FROM node:16-buster-slim

RUN apt-get update && apt-get install -y procps libaio1 wget unzip

RUN npm install -g @nestjs/cli 

WORKDIR /opt/oracle

# Instalando o Cliente Oracle
RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
  unzip instantclient-basiclite-linuxx64.zip && rm -f instantclient-basiclite-linuxx64.zip && \
  cd /opt/oracle/instantclient* && rm -f *jdbc* *occi* *mysql* *mql1* *ipc1* *jar uidrvci genezi adrci && \
  echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && ldconfig

# # Instalando o Cliente PostgreSQL
RUN apt-get install -y postgresql postgresql-contrib \
  && apt-get install sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

USER node

WORKDIR /home/node/app

COPY . /home/node/app/

COPY --chown=node:node . .