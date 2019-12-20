import Header from "./Header";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <>
    <CssBaseline />
    <Head>
      <title>Top 10</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <Header />
    {props.children}
  </>
);

export default Layout;
