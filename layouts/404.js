import Head from 'next/head';

export default ({ children, title = 'Cool Stop' }) => {
  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; {title}</title>
      </Head>

      <main>{children}</main>
    </div>
  );
};
