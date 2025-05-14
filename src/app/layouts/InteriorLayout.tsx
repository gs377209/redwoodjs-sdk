import { Header } from "@/app/components/Header";
import { Toaster } from "../components/ui/sonner";

const InteriorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-wrapper">
      <main className="page bg-white">
        <Header />
        <div>{children}</div>
        <Toaster position="top-right" richColors />
      </main>
    </div>
  );
};

export { InteriorLayout };
