import { TailSpin } from "react-loader-spinner";

function Loader({ text }) {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <h2>Loading {text}</h2>
      <TailSpin height={150} width={150} radius={1} color={"#3861fb"} />
    </div>
  );
}

export default Loader;