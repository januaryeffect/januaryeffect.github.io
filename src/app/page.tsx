import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            January Effect
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4">
            (주)제뉴어리이펙트
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            혁신적인 모바일 앱으로 일상에 변화를 만들어갑니다
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">회사 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                January Effect는 사용자 중심의 모바일 애플리케이션을 개발하는
                회사입니다. 우리는 기술과 디자인의 조화를 통해 사람들의 일상에
                긍정적인 변화를 만들어가고 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                복잡한 문제를 간단하게 해결하고, 누구나 쉽게 사용할 수 있는
                직관적인 앱을 만드는 것이 우리의 목표입니다. 사용자의 경험을
                최우선으로 생각하며 개발합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">사업 분야</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">iOS 앱 개발</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Swift와 SwiftUI를 활용한 네이티브 iOS 애플리케이션 개발
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Android 앱 개발</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kotlin을 활용한 네이티브 Android 애플리케이션 개발
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">크로스 플랫폼</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Flutter와 React Native를 활용한 크로스 플랫폼 앱 개발
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">출시 앱</h2>
          <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Image
                src="/apps/chauffeur-log/icon.png"
                alt="대리로그 앱 아이콘"
                className="w-20 h-20 rounded-2xl"
                width={80}
                height={80}
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">대리로그</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  운행의 시작과 마무리, 대리로그.
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <Link
                    href="/apps/chauffeur-log/"
                    className="inline-flex items-center rounded-lg px-4 py-2 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                  >
                    소개 페이지
                  </Link>
                  <Link
                    href="/apps/chauffeur-log/internal-testing/"
                    className="inline-flex items-center rounded-lg px-4 py-2 font-semibold border border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                  >
                    내부테스터 모집
                  </Link>
                  <Link
                    href="/apps/chauffeur-log/feedback/"
                    className="inline-flex items-center rounded-lg px-4 py-2 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    피드백 보내기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">연락처</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">회사명</h3>
              <p className="text-gray-600 dark:text-gray-400">
                January Effect / (주)제뉴어리이펙트
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">이메일</h3>
              <a
                href="mailto:contact@januaryeffect.app"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                contact@januaryeffect.app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 text-sm">
            <Link
              href="/privacy/"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/terms/"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              서비스 이용약관
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
