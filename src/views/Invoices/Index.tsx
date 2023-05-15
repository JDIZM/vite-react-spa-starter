import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../../data/invoices";
import Layout from "../../layout/base-layout";

export default function Invoices() {
  const invoices = getInvoices();
  console.log(invoices);

  return (
    <>
      <Layout>
        <div style={{ display: "flex" }}>
          <nav
            style={{
              borderRight: "solid 1px",
              padding: "1rem"
            }}
          >
            {invoices.map((invoice) => (
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </Link>
            ))}
          </nav>
          <Outlet />
        </div>
      </Layout>
    </>
  );
}
