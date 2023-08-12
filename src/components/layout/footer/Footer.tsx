export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" bottom-0 z-40 border-t px-4 lg:px-0 w-full bg-background/95 backdrop-blur">
      <div className="text-center h-14 grid place-items-center">
        Copyright &copy; {year} - Peeranat Danaidusadeekul
      </div>
    </footer>
  );
}
