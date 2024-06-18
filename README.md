# react-playground

This projects can be used to test and develope react elements

Additionally it can be used to configure different API endpoints.

## Used Technologies

- React
- next.js
- tailwind
- [Animate.css](https://animate.style/) - Simple Animations of Text on Page Loading
- [react-animate-on-scroll](https://www.npmjs.com/package/react-animate-on-scroll) - Simple Animations of Text on Scrolling
- [Framer Motion](https://www.framer.com/motion/) - Complex Animations

## Develope

### Develope locally

```powershell
cd my-app
npm run dev
```

### Develope in Docker Container

> Not recommended.

```powershell
# Dev in docker image
docker build . -t react-playground-dev -f Dockerfile.dev

docker run -p 3000:3000 -v ${pwd}/my-app:/app react-playground-dev  #windows
docker run -p 3000:3000 -v $(pwd)/my-app:/app react-playground-dev  #linux
```

## Run Application in Docker

```powershell
# Build the Image

docker build . -t react-playground
docker images react-playground:latest

# Run the image

docker run -p 3000:3000 react-playground
```
