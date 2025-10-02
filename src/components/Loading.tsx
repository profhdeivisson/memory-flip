import { PuffLoader } from 'react-spinners';

export function Loading() {
  return (
    <div className="absolute w-full h-screen bg-black/70 flex items-center justify-center">
      <PuffLoader color={"#fff"} />
    </div>
  );
}
