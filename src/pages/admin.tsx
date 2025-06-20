import { GetStaticProps } from "next";
import React from "react";

const getStatiicProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

function Admin() {
  return <div>Admin</div>;
}

export default Admin;
