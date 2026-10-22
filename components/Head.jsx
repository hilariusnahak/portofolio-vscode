import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hilarius Nahak is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="hilarius nahak, hilarius, nahak, web developer portfolio, hilarius web developer, hilarius developer, mern stack, hilarius ranganath portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Hilarius Nahak's Portfolio" />
      <meta
        property="og:description"
        content="Hilarius Nahak is an avid full stack web developer building websites and applications you'd love to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://hilariusnahak.me" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Hilarius Nahak',
};
