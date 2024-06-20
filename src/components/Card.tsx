function Card() {
  return (
    <div className="relative flex h-96 w-72 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl">
      <img
        className="absolute h-full w-full object-cover object-[center]"
        src="./communicator.svg"
        alt="communicator"
      />
      <div className="relative flex flex-col gap-4 bg-gradient-to-t from-black/40 from-25% p-4">
        <h2 className="text-left text-3xl font-bold text-white">
          Communicator
        </h2>
        <div className="flex w-full items-center gap-2">
          <div className="h-10 w-10 rounded-md bg-slate-400"></div>
          <div>
            <p className="text-left font-bold text-white">Luke Nam</p>
            <span className="text-left text-white">123-456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
