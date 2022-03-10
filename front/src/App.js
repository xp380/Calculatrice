import React from "react";
import { Layout } from "antd";
import Page from "./Page";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <h1 style={{ textAlign: "center" }}>Welcome to Calcul App</h1>
        <Content>
          <Page text="text" />
        </Content>
        <Footer
          style={{
            borderTop: "1px solid #e8e8e8",
            position: "fixed",
            left: 0,
            textAlign: "center",
            bottom: 0,
            width: "100%",
            backgroundColor: "#001529",
            color: "white",
            height: 50,
          }}
        ></Footer>
      </Layout>
    </div>
  );
};

export default App;
