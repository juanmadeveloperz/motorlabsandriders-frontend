export const Container = ({ children }) => {
  return (
    <div className="flex justify-center grow px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex grow max-w-[1200px] w-full">{children}</div>
    </div>
  );
};
