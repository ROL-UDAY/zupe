import Image from "next/image";

interface HeaderProps {
  session?: string;
  questionCountByUser: number;
}

const Header: React.FC<HeaderProps> = ({ session, questionCountByUser }) => {
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
      <div className="header flex w-full items-center justify-between py-1 sm:mb-12 sm:mt-12 sm:px-1 xs:mb-2 xs:mt-6 xs:px-1">
        <div>
          <Image src="/EVLogo.png" alt="Logo" width={130} height={100} />
        </div>
        <div className="flex flex-row items-center gap-1 sm:px-1">
          <div className="flex sm:ml-2 sm:flex-row sm:items-center sm:px-3">
            <div className="flex flex-row items-center sm:gap-2">
              <div className=" flex items-center justify-center rounded-full bg-[#9F122A] text-white sm:h-10 sm:w-10 xs:h-8 xs:w-8 xs:text-[14px]">
                {formattedSession}
              </div>
              <div className="font-montserrat xs:hidden">{session}</div>
            </div>
          </div>
          <p className="text-[#B0B0B0]">{questionCountByUser}</p>
          <p className="text-[#B0B0B0]">Contributions</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
