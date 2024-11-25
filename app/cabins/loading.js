import Spinner from "@/app/_components/Spinner";
function Loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading Cabin Data...</p>
    </div>
  );
}

export default Loading;
