"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChauffeurLogPrivacyEnRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/apps/chauffeur-log/privacy/en/");
  }, [router]);

  return (
    <div className="py-12 px-4 text-center">
      <p className="text-gray-500">Redirecting...</p>
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/apps/chauffeur-log/privacy/en/" />
        <a href="/apps/chauffeur-log/privacy/en/">Chauffeur Log Privacy Policy</a>
      </noscript>
    </div>
  );
}
