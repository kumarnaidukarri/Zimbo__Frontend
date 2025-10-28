// Grocery is a different independent Service. mini app.
/*
Lazy loading:
  -> loading the entire application as one bundle makes it slower to start.
  -> To fix this, we use Lazy Loading (also known as code splitting, chunking, dynamic bundling, or on-demand loading).
  -> This technique loads only the specific components needed at a given moment. for example, when a user opens a certain navigation tab or route.
  -> so, it improves initial load time, each component bundle loaded only when required, always wrap lazy-loaded component with Suspense.
 */

const Grocery = () => {
  return (
    <h1 style={{ margin: "10px" }}>
      Our grocery online store, we have a lot of child components inside this
      web page!!!
    </h1>
  );
};

export default Grocery;
