"use client";

import Form from "@/components/Form/Form";
import RootLayout from "@/components/Layout";
import UserComponent from "@/components/UserComponent/UserComponent";

const Forms: React.FC = () => {
  return (
    <RootLayout>
      <div>
        <h1>Example Button Page</h1>
        <br />
        <div>
          <UserComponent
            name="Testuser"
            age={26}
            address="87 Summer St, Boston, MA 02110"
            dob={new Date()}
          />
        </div>
      </div>
      <br />
      <div>
        <Form />
      </div>
    </RootLayout>
  );
};

export default Forms;
