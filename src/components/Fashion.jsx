import FashionSidePanel from "./FashionSidePanel";

function Fashion() {
  return (
    <div className="flex">
      {/* Fixed Side Panel */}
      <FashionSidePanel />

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4">Fashion Items</h1>
        <p>Here you will find all the latest Fashion.</p>
      </div>
    </div>
  );
}
export default Fashion;
