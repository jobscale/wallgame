# wallgame

```
git clone https://github.com/jobscale/wallgame.git
cd wallgame
main() {
  docker build . -t local/wallgame:0.0.1
  docker run --rm --name wallgame -it local/wallgame:0.0.1
} && main
```
