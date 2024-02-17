const Container = ({ children, maxWidth = "max-w-7xl", className = "" }) => {
  return (
    <div className={`w-full ${maxWidth} mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
