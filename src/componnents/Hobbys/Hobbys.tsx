import Image from "next/image";
export const Hobbys = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Hobbies</h2>
      <div className="relative w-full h-screen overflow-hidden rounded-lg shadow-lg">
        {/* Left Side (HEMA Sports) */}
        <Image
          src="/globe.svg" // Replace with your actual image path
          alt="HEMA Sports"
          fill
          className="object-cover topCorner"
          priority
        />

        {/* Right Side (Writing & Books) */}
        <Image
          src="/next.svg" // Replace with your actual image path
          alt="Writing and Books"
          fill
          className="object-cover downCorner"
          priority
        />
      </div>
    </>
  );
};
