import RootLayout from "@/components/Layout";

export default function Home() {
  return (
    <RootLayout>
      <div>
        <h1>This is an example Homepage</h1>
        <br />
        <p>Playground to try different things with react, next and ts.</p>
        <br></br>
        {/* Animations to chose from under https://animate.style/ */}
        <div className="animate__animated animate__fadeInTopLeft animate__slow animate__delay-1s">
          Animate Text on Page Loading with Animate.css!
        </div>
      </div>
    </RootLayout>
  );
}
