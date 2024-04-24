import Image from "next/image";

interface HeaderProps {
  counterData?: number;
  session?: string;
}

const Header: React.FC<HeaderProps> = ({ counterData, session }) => {
  const formatSessionName = (name?: string) => {
    if (!name) return undefined;
    const capitalizedWords = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase());
    return capitalizedWords.join("");
  };
  const formattedSession = formatSessionName(session);
  return (
    <div>
      <div className="header flex w-full max-w-[1100px] items-center justify-between px-4 py-4 sm:mb-12 sm:mt-12 sm:px-12 xs:mt-4">
        <div>
          <Image src="/EVLogo.png" alt="Logo" width={130} height={100} />
        </div>
        <div className="flex flex-row items-center gap-2 sm:px-10">
          <div className="flex sm:ml-2 sm:flex-row sm:items-center sm:px-5">
            <div className="flex flex-row items-center sm:gap-2">
              <div className=" flex items-center justify-center rounded-full bg-[#9F122A] text-white sm:h-10 sm:w-10 xs:h-8 xs:w-8 xs:text-[14px]">
                {formattedSession}
              </div>
              <div className="xs:hidden">{session}</div>
            </div>
          </div>
          <p className="text-black">{counterData}</p>
          <p>Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
