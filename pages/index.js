import Link from "next/link";
import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/paper";
import { makeStyles } from "@material-ui/core/styles";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2rem",
    margin: "1rem"
  }
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Paper>

      <style jsx>
        {`
          h1 {
            color: red;
          }
          ,
          .paper {
          }
        `}
      </style>
    </Layout>
  );
}
