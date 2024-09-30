import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Frontend Developer - Jessica Randall</title>
        <meta
          name="description"
          content="Explore o portfólio de Jessica Randall, uma desenvolvedora frontend especializada em design responsivo e soluções criativas."
        />
        <meta
          name="keywords"
          content="desenvolvedora frontend, portfólio, Jessica Randall, design responsivo, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Jessica Randall" />
        <link rel="canonical" href="http://localhost:3000/" />
        <meta
          property="og:title"
          content="Frontend Developer - Jessica Randall"
        />
        <meta
          property="og:description"
          content="Explore o portfólio de Jessica Randall, uma desenvolvedora frontend."
        />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://localhost:3000/images/avatar-jessica.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
