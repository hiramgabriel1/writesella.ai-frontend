import { Avatar } from "primereact/avatar";
import { TfiClip } from "react-icons/tfi";

export default function MessageEmail() {
  return (
    <div className="flex gap-3 bg-white rounded-xl  px-5 py-3">
      <div>
        <Avatar
          className="bg-blue-600 text-white  "
          label="JO"
          shape="circle"
        ></Avatar>
      </div>
      <main className="flex flex-col gap-2">
        <div className="flex justify-between gap-5">
          <div className=" flex gap-3 items-center text-sm">
            <p>Javier Ortiz</p>
            <p className="text-black/50">Repile to you</p>
          </div>
          <div className="flex gap-2">
            <TfiClip className="size-5" />
            <p className="text-black/50">45s</p>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <p className="font-bold">Hey, how are you doing?</p>
          <div className="bg-blue-400 rounded-full size-4" />
        </div>
        <p className="text-sm">Email all sent through but ...</p>
      </main>
    </div>
  );
}
