import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | January Effect",
  description: "January Effect의 개인정보처리방침입니다.",
};

export default function PrivacyPolicy() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto legal-content">
        <div className="flex justify-between items-center mb-8">
          <h1>개인정보처리방침</h1>
          <Link
            href="/privacy/en/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            English Version
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          시행일: 2025년 1월 1일
        </p>

        <p>
          (주)제뉴어리이펙트(이하 &quot;회사&quot;)는 정보주체의 자유와 권리 보호를 위해
          「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를
          처리하고 안전하게 관리하고 있습니다.
        </p>

        <h2>제1조 (개인정보의 처리 목적)</h2>
        <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
        <ul>
          <li>서비스 제공 및 운영</li>
          <li>회원 관리 및 본인 확인</li>
          <li>고객 문의 및 불만 처리</li>
          <li>서비스 개선 및 신규 서비스 개발</li>
          <li>마케팅 및 광고 활용 (동의한 경우에 한함)</li>
        </ul>

        <h2>제2조 (처리하는 개인정보의 항목)</h2>
        <p>회사는 다음의 개인정보 항목을 처리하고 있습니다:</p>
        <h3>1. 필수 항목</h3>
        <ul>
          <li>이메일 주소</li>
          <li>서비스 이용 기록</li>
          <li>접속 로그</li>
          <li>기기 정보 (기기 식별자, OS 버전 등)</li>
        </ul>
        <h3>2. 선택 항목</h3>
        <ul>
          <li>닉네임</li>
          <li>프로필 이미지</li>
        </ul>

        <h2>제3조 (개인정보의 처리 및 보유 기간)</h2>
        <p>
          회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를
          수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <ul>
          <li>회원 정보: 회원 탈퇴 시까지</li>
          <li>서비스 이용 기록: 3년</li>
          <li>
            관계 법령에 따른 보존:
            <ul>
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            </ul>
          </li>
        </ul>

        <h2>제4조 (개인정보의 제3자 제공)</h2>
        <p>
          회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위
          내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법
          제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
        </p>

        <h2>제5조 (개인정보 처리의 위탁)</h2>
        <p>
          회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를
          위탁하고 있습니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>수탁업체</th>
              <th>위탁업무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>클라우드 서비스 제공업체</td>
              <td>데이터 저장 및 관리</td>
            </tr>
          </tbody>
        </table>

        <h2>제6조 (정보주체의 권리·의무 및 행사방법)</h2>
        <p>정보주체는 회사에 대해 언제든지 다음 각 호의 권리를 행사할 수 있습니다:</p>
        <ul>
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구</li>
        </ul>

        <h2>제7조 (개인정보의 파기)</h2>
        <p>
          회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
          되었을 때에는 지체없이 해당 개인정보를 파기합니다.
        </p>
        <ul>
          <li>전자적 파일: 복원이 불가능한 방법으로 영구 삭제</li>
          <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
        </ul>

        <h2>제8조 (개인정보의 안전성 확보조치)</h2>
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
        <ul>
          <li>개인정보 암호화</li>
          <li>해킹 등에 대비한 기술적 대책</li>
          <li>개인정보에 대한 접근 제한</li>
          <li>정기적인 자체 감사 실시</li>
        </ul>

        <h2>제9조 (개인정보 보호책임자)</h2>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
          정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
          지정하고 있습니다:
        </p>
        <ul>
          <li>담당부서: 개인정보보호팀</li>
          <li>이메일: contact@januaryeffect.app</li>
        </ul>

        <h2>제10조 (개인정보 처리방침의 변경)</h2>
        <p>
          이 개인정보처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경
          내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을
          통하여 고지할 것입니다.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            본 개인정보처리방침에 대한 문의사항은{" "}
            <a href="mailto:contact@januaryeffect.app" className="text-blue-600 hover:text-blue-700">
              contact@januaryeffect.app
            </a>
            으로 연락해 주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
