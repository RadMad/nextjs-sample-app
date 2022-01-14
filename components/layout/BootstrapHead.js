import Head from "next/head";

function BootstrapHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOgit rigin="anonymous"
      ></link>
    </Head>
  );
}

export default BootstrapHead;
