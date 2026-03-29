"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChauffeurLogInternalTestingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/apps/chauffeur-log/open-testing/");
  }, [router]);

  return (
    <div className="px-4 py-16 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        공개 테스트 페이지로 이동 중입니다...
      </p>
    </div>
  );
}
