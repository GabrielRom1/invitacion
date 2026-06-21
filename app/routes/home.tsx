import { useNavigate } from "react-router";
import { useState } from "react";
import Invite from "./invite"

export default function Home() {
  const navigate = useNavigate();
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  // const handleOpen = () => {
  //   setOpening(true);
  //   setTimeout(() => {
  //     navigate("/invite");
  //   }, 800);
  // };
  const handleOpen = () => {
  setOpening(true);

  setTimeout(() => {
    setOpened(true);
  }, 800);
};
if (opened) {
  return <Invite />;
}

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <div
        onClick={handleOpen}
        className={`w-full h-full cursor-pointer transition-all duration-700 ${
          opening ? "scale-105 opacity-0" : "hover:scale-[1.02]"
        }`}
      >
        <img
          src="/public/assets/sobre.svg"
          alt="Envelope"
className="w-full h-full object-cover object-[50%_50%] lg:hidden"
        />

                <img
          src="/public/assets/sobre-horizontal.png"
          alt="Envelope"
className="w-full h-full object-cover  hidden lg:block"
        />
      </div>
    </div>
  );
}