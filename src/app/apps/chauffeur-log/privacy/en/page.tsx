"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChauffeurLogPrivacyEnPlaceholder() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/apps/chauffeur-log/privacy/");
  }, [router]);

  return (
    <div className="py-12 px-4 text-center">
      <p className="text-gray-500">Redirecting to Korean version...</p>
      <noscript>
        <a href="/apps/chauffeur-log/privacy/">대리로그 개인정보처리방침</a>
      </noscript>
    </div>
  );
}
