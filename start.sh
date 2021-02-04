#!/bin/bash

if [ $# -gt 0 ];then
  exec "$@"
else
  tmux new-session -d -x "23" -y "80" -s "skuska" "echo start;sleep 60;echo stop" && \
  tmux set -g status off && tmux attach
fi
