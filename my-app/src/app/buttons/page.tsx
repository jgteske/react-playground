"use client";

import Button from "@/components/Button/Button";
import RootLayout from "@/components/Layout";

const Buttons: React.FC = () => {
  return (
    <RootLayout>
      <div>
        <h1>Example Button Page</h1>
        <br />
        <div>
          <Button
            handleClick={() => alert("hi")}
            type={"button"}
            title={"Test Titel"}
            disabled={false}
          >
            {/* children */}
            Open modal
          </Button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Buttons;
