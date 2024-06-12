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

# Run Application in Docker

```cmd
# Build the Image

docker build . -t react-playground
docker images react-playground:latest

# Run the image

docker run -p 3000:3000 react-playground
```
