
const Page = () => {
  // import suggestion for lodash is working
  const bar = sum(1, 2)

  // internal @repo/ui package exports don't work
  const foo = getFoo();
  const bar = getBar();

  return (
    // also not in jsx
    <Card>
      <h1>Hello, world!</h1>
      <p>Welcome to your new app!</p>
    </div>
  );
};

export default Page;
