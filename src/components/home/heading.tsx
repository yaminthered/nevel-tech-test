function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-primary text-xl font-black tracking-tighter italic lg:text-3xl">
      {children}
    </h2>
  );
}

export default Heading;
