import Link from "next/link";
import React from "react";

export interface ApiItem {
  method: "GET" | "POST";
  reference: string;
  desc?: string;
}

interface Props extends ApiItem {
  children?: React.ReactNode;
  styles?: string;
}

const ApiReferenceElement = (props: Props) => {
  return (
    <div className={`${props.styles} grid grid-cols-10 gap-4>`}>
      <div className="col-span-1">{props.method}</div>
      <Link href={props.reference} className="col-span-2">
        {props.reference}
      </Link>
      {props.desc ? (
        <div className="col-span-7">{props.desc}</div>
      ) : (
        <div className="col-span-7"></div>
      )}
    </div>
  );
};

export default ApiReferenceElement;
