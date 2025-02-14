"use client";
import PWAModal from "@/components/PWAModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [showInstallModal, setShowInstallModal] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    console.log("START");
  
    // ✅ Check if the app is already installed
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone;
    
    if (isStandalone) {
      console.log("App is already installed.");
      return;
    }
  
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);
      setShowInstallModal(true);
    };
  
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleCloseModal = () => {
    setShowInstallModal(false);
  };
  const handleInstall = () => {
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("ACCEPTED");
        } else {
          console.log("CANCELLED");
        }
        setPrompt(null);
        setShowInstallModal(false);
      });
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-semibold">PWA Learning</h1>
      <PWAModal
        show={showInstallModal}
        onClose={handleCloseModal}
        onInstall={handleInstall}
      />
    </div>
  );
}
