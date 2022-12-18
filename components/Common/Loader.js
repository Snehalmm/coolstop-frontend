import Image from "next/image";

const Loader = ({ height, width }) => {
  return (
    <>
      <Image
        src="/images/spiner.gif"
        width={height ? height : 30}
        height={width ? width : 30}
        alt="Loading....."
      />
    </>
  );
};

export default Loader;
