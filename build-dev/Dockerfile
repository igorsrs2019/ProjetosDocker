#O Arquivo sera baseado no Python
FROM python:3.6

#Nome do Mantenedor
LABEL maintainer 'Igor Rubio <ighor_souza@hotmail.com>'

# Sera feita a criacao das seguinte pastas e a permissao de owner para o usuario www
RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

#O usuario que estara logado no sistema e o www, o volume vai ser criado nas pasta log, o diretorio de trabalho e o app e servico vai ser esposto na porta 8000
USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

# O ponto de entrada  no momento que o container inicia, e o executavel .py
ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]