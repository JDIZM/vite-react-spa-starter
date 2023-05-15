import React from "react";
import { useParams } from "react-router-dom";

export default function Invoice() {
  const params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
}
