export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary to-accent opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-accent to-primary opacity-20 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}