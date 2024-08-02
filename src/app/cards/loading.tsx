import "@/styles/loading.css";

export default function LoadingComponent() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <p className="text-4xl font-extrabold tracking-tight">
        IOIT <span className="text-[hsl(280,100%,70%)]">TENET</span>
      </p>
      <LoadingComponentDots />
    </div>
  );
}

export function LoadingComponentDots() {
  return (
    <div className="loading-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}
