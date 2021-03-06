# define ubuntu version, you can use --build-arg
ARG ubuntu_version="20.10"
FROM ubuntu:${ubuntu_version}

# Default nvm version, you can use --build-arg
ARG nvm_version="v0.37.2"

# Default node version, you can use --build-arg
ARG node_version="v14.16.0"

# Fast download server
RUN sed -i 's@archive.ubuntu.com@ftp.jaist.ac.jp/pub/Linux@g' /etc/apt/sources.list

# Install the base pakages
RUN apt update \
  && apt install -y \
  gnupg2 \
  gnupg1 \
  gnupg \
  curl

# Install a nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${nvm_version}/install.sh | bash
ENV NVM_DIR "/root/.nvm"
RUN . ${NVM_DIR}/nvm.sh \
  && nvm install ${node_version} \
  && nvm alias default ${node_version}
  
# Install a yarn
RUN . ${NVM_DIR}/nvm.sh \
  && npm install --global yarn

# Remove the files
RUN apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD ["/bin/sh"]

EXPOSE 3000