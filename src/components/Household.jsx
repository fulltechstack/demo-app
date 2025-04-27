import HouseholdSidePanel from "./HouseholdSidePanel";

function Household() {
  return (
    <div className="flex">
      {/* Fixed Side Panel */}
      <HouseholdSidePanel />

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h1 className="text-3xl font-bold mb-4">Household Items</h1>
        <p>Here you will find all the latest Household items.</p>
      </div>
    </div>
  );
}
export default Household;
