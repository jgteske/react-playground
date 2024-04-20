import ApiReferenceElement, {
  ApiItem,
} from "@/components/ApiReferenceElement/ApiReferenceElement";

const ApiItems: ApiItem[] = [
  {
    method: "GET",
    reference: "/api/testroute",
    desc: "Returns a list of users.",
  },
  {
    method: "GET",
    reference: "/api/apiendpoint",
  },
  {
    method: "POST",
    reference: "/api/apiendpoint",
    desc: "data {name: 'name', email: 'email'}",
  },
];

// pages/api/index.js
export default function ApiReference() {
  return (
    <div>
      <h1 className="h1">API Reference Landing Page</h1>
      <p>
        This page provides documentation and reference for the API endpoints.
      </p>
      <br />
      <div className="ml-6">
        {ApiItems.map(({ method, reference: ref, desc }, index) => (
          <div key={index} className="mb-4">
            <ApiReferenceElement method={method} reference={ref} desc={desc} />
          </div>
        ))}
      </div>
    </div>
  );
}
