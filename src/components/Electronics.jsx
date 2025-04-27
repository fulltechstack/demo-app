import ElectronicsSidePanel from "./ElectronicsSidePanel";

function Electronics() {
  return (
    <div className="flex">
      {/* Fixed Side Panel */}
      <ElectronicsSidePanel />

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4">Electronics Items</h1>
        <p>Here you will find all the latest electronics.</p>
      </div>
    </div>
  );
}
export default Electronics;
