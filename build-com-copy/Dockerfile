#O Arquivo sera baseado no SO Nginx
FROM nginx:latest

#Nome do Mantenedor
LABEL maintainer 'Igor Rubio'

# Na criacao da imagem o texto SEM CONTEUDO vai ser inserido dentro da pagina conteudo.html
RUN echo '<h1>Sem conteudo</h1>' > /usr/share/nginx/html/conteudo.html

# Todo os arquivos com a extensao .html vai ser copiado para o diretorio html do container
COPY *.html /usr/share/nginx/html/