import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대리로그 개인정보처리방침 | January Effect",
  description: "대리로그(Chauffeur Log) 앱의 개인정보처리방침입니다.",
};

export default function ChauffeurLogPrivacyPolicy() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto legal-content">
        <div className="flex justify-between items-center mb-8">
          <h1>대리로그 개인정보처리방침</h1>
          <Link
            href="/privacy/chauffeur-log/en/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            English Version
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          시행일: 2025년 1월 20일 | 최종 수정일: 2025년 1월 20일
        </p>

        <p>
          (주)제뉴어리이펙트(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의
          개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
          하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>

        <h2>제1조 (개인정보의 수집 항목 및 수집 방법)</h2>

        <h3>1. 수집하는 개인정보 항목</h3>
        <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>

        <h4>1.1 필수 수집 항목</h4>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>항목</th>
              <th>수집 목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>운행 기록</td>
              <td>근무일자, 시간, 종료시간, 출발지, 도착지, 경유지, 호출 앱명, 운행 금액, 메모</td>
              <td>운행 기록 관리 및 통계</td>
            </tr>
            <tr>
              <td>재무 기록</td>
              <td>수입/지출 금액, 장부 항목명</td>
              <td>수입/지출 관리</td>
            </tr>
          </tbody>
        </table>

        <h4>1.2 선택 수집 항목</h4>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>항목</th>
              <th>수집 목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>위치정보</td>
              <td>출발지/도착지/경유지 GPS 좌표 (위도, 경도)</td>
              <td>운행 위치 기록</td>
            </tr>
            <tr>
              <td>계정정보</td>
              <td>Google 계정 이메일</td>
              <td>데이터 백업 및 복원</td>
            </tr>
          </tbody>
        </table>

        <h4>1.3 자동 수집 항목</h4>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>항목</th>
              <th>수집 목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기기정보</td>
              <td>기기 모델, OS 버전, 앱 버전</td>
              <td>서비스 개선 및 오류 분석</td>
            </tr>
            <tr>
              <td>오류정보</td>
              <td>앱 충돌 로그, 오류 스택 트레이스</td>
              <td>서비스 안정성 개선</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 개인정보 수집 방법</h3>
        <ul>
          <li>이용자가 앱 내에서 직접 입력</li>
          <li>자동 운행 기록 기능 (접근성 서비스)을 통한 자동 수집</li>
          <li>Firebase Crashlytics를 통한 오류 정보 자동 수집</li>
        </ul>

        <h2>제2조 (접근성 서비스 사용 안내)</h2>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ 중요 고지사항</p>
          <p className="text-amber-700 dark:text-amber-300 text-sm">
            대리로그는 &quot;자동 운행 기록&quot; 기능을 제공하기 위해 Android 접근성 서비스(Accessibility Service)를
            사용합니다. 이 기능은 이용자의 명시적 동의 후에만 활성화됩니다.
          </p>
        </div>

        <h3>1. 사용 목적</h3>
        <p>
          대리운전 앱의 <strong>운행 완료 화면을 자동으로 감지</strong>하여 운행 기록을
          저장합니다. 이용자가 매번 수동으로 입력하지 않아도 되어 편의성이 향상됩니다.
        </p>

        <h3>2. 모니터링 대상 앱 (16개)</h3>
        <p>접근성 서비스는 <strong>아래 나열된 앱에서만</strong> 화면 정보를 읽습니다:</p>
        <table>
          <thead>
            <tr>
              <th>분류</th>
              <th>앱 이름</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>대리운전</td>
              <td>카카오대리, 티맵대리</td>
            </tr>
            <tr>
              <td>대리운전 (로지)</td>
              <td>로지 1, 로지 2, 로지 3</td>
            </tr>
            <tr>
              <td>대리운전 (콜마너)</td>
              <td>콜마너 1, 콜마너 2, 콜마너 3</td>
            </tr>
            <tr>
              <td>대리운전 (아이콘)</td>
              <td>아이콘 1, 아이콘 2, 아이콘 3, 아이콘 4</td>
            </tr>
            <tr>
              <td>대리운전 (기타)</td>
              <td>트리콜, 클릭</td>
            </tr>
            <tr>
              <td>탁송</td>
              <td>핸들러</td>
            </tr>
            <tr>
              <td>렌트카</td>
              <td>투루카</td>
            </tr>
          </tbody>
        </table>

        <h3>3. 수집하는 정보</h3>
        <ul>
          <li>운행 시작/종료 시간</li>
          <li>출발지/도착지/경유지 주소</li>
          <li>운행 금액</li>
        </ul>

        <h3>4. 수집하지 않는 정보</h3>
        <p>접근성 서비스를 통해 <strong>다음 정보는 수집하지 않습니다</strong>:</p>
        <ul>
          <li>위에 나열되지 않은 다른 앱의 정보</li>
          <li>비밀번호, 금융정보 등 민감정보</li>
          <li>개인 메시지, 통화 기록</li>
          <li>웹 브라우징 기록</li>
        </ul>

        <h3>5. 비활성화 방법</h3>
        <p>이용자는 언제든지 기기 설정에서 접근성 서비스를 비활성화할 수 있습니다:</p>
        <ol>
          <li><strong>설정</strong> &gt; <strong>접근성</strong> &gt; <strong>설치된 서비스</strong></li>
          <li><strong>대리로그</strong> 선택 후 비활성화</li>
        </ol>

        <h2>제3조 (개인정보의 처리 목적)</h2>
        <p>회사는 다음의 목적으로 개인정보를 처리합니다.</p>
        <table>
          <thead>
            <tr>
              <th>목적</th>
              <th>상세 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>서비스 제공</td>
              <td>운행 기록 저장 및 조회, 수입/지출 관리, 통계 제공</td>
            </tr>
            <tr>
              <td>데이터 백업</td>
              <td>Google Drive를 통한 데이터 백업 및 복원</td>
            </tr>
            <tr>
              <td>서비스 개선</td>
              <td>앱 오류 분석 및 안정성 개선</td>
            </tr>
          </tbody>
        </table>

        <h2>제4조 (개인정보의 처리 및 보유 기간)</h2>

        <h3>1. 보유 기간</h3>
        <table>
          <thead>
            <tr>
              <th>정보 유형</th>
              <th>보유 기간</th>
              <th>저장 위치</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>운행/재무 기록</td>
              <td>이용자가 삭제할 때까지</td>
              <td>기기 내 로컬 저장소</td>
            </tr>
            <tr>
              <td>Google Drive 백업</td>
              <td>이용자가 삭제할 때까지</td>
              <td>Google Drive (appDataFolder)</td>
            </tr>
            <tr>
              <td>오류 로그</td>
              <td>90일</td>
              <td>Firebase Crashlytics</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 파기 절차</h3>
        <ul>
          <li><strong>앱 삭제 시</strong>: 기기 내 모든 데이터가 자동으로 삭제됩니다.</li>
          <li><strong>백업 데이터</strong>: Google Drive에 저장된 백업은 이용자가 직접 삭제해야 합니다.</li>
        </ul>

        <h2>제5조 (개인정보의 제3자 제공)</h2>
        <p>
          회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          단, 다음의 경우는 예외로 합니다:
        </p>
        <ol>
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우</li>
        </ol>

        <h2>제6조 (개인정보 처리의 위탁)</h2>
        <p>회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
        <table>
          <thead>
            <tr>
              <th>수탁업체</th>
              <th>위탁 업무</th>
              <th>개인정보처리방침</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google LLC</td>
              <td>Firebase 서비스 (인증, 오류 분석)</td>
              <td>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Firebase 개인정보처리방침
                </a>
              </td>
            </tr>
            <tr>
              <td>Google LLC</td>
              <td>Google Drive 백업 서비스</td>
              <td>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Google 개인정보처리방침
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>제7조 (이용자의 권리·의무 및 행사 방법)</h2>

        <h3>1. 이용자의 권리</h3>
        <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
        <table>
          <thead>
            <tr>
              <th>권리</th>
              <th>행사 방법</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>데이터 조회</td>
              <td>앱 내에서 모든 운행/재무 기록 조회 가능</td>
            </tr>
            <tr>
              <td>데이터 수정</td>
              <td>앱 내에서 기록 수정 가능</td>
            </tr>
            <tr>
              <td>데이터 삭제</td>
              <td>앱 내 설정에서 전체 데이터 삭제 가능</td>
            </tr>
            <tr>
              <td>백업 삭제</td>
              <td>Google Drive에서 직접 삭제 가능</td>
            </tr>
            <tr>
              <td>접근성 서비스 비활성화</td>
              <td>기기 설정에서 언제든 비활성화 가능</td>
            </tr>
            <tr>
              <td>위치정보 비공유</td>
              <td>통계 공유 시 위치정보 숨김 옵션 제공</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 이용자의 의무</h3>
        <p>
          이용자는 자신의 개인정보를 보호할 의무가 있으며, 회사의 귀책사유 없이
          기기 분실, 비밀번호 노출 등으로 인해 발생하는 문제에 대해 회사는 책임지지 않습니다.
        </p>

        <h2>제8조 (개인정보의 안전성 확보 조치)</h2>
        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
        <table>
          <thead>
            <tr>
              <th>조치</th>
              <th>상세 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>로컬 저장</td>
              <td>모든 운행/재무 데이터는 기기의 앱 샌드박스에 저장되어 다른 앱이 접근 불가</td>
            </tr>
            <tr>
              <td>암호화 통신</td>
              <td>Google 서비스와의 모든 통신은 HTTPS를 통해 암호화</td>
            </tr>
            <tr>
              <td>인증된 접근</td>
              <td>Google Drive 백업은 이용자의 Google 계정 인증 후에만 접근 가능</td>
            </tr>
            <tr>
              <td>최소 권한</td>
              <td>접근성 서비스는 지정된 16개 앱에서만 화면 정보 수집</td>
            </tr>
          </tbody>
        </table>

        <h2>제9조 (개인정보 보호책임자)</h2>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
          이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
          지정하고 있습니다.
        </p>
        <ul>
          <li><strong>회사명</strong>: (주)제뉴어리이펙트</li>
          <li><strong>이메일</strong>: contact@januaryeffect.app</li>
        </ul>

        <h2>제10조 (개인정보처리방침의 변경)</h2>
        <p>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
          추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 앱 내 공지사항을
          통하여 고지할 것입니다.
        </p>

        <h2>제11조 (권익침해 구제방법)</h2>
        <p>
          이용자는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
          한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>기관</th>
              <th>연락처</th>
              <th>홈페이지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>개인정보분쟁조정위원회</td>
              <td>1833-6972</td>
              <td>
                <a
                  href="https://www.kopico.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  www.kopico.go.kr
                </a>
              </td>
            </tr>
            <tr>
              <td>개인정보침해신고센터</td>
              <td>118</td>
              <td>
                <a
                  href="https://privacy.kisa.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  privacy.kisa.or.kr
                </a>
              </td>
            </tr>
            <tr>
              <td>대검찰청</td>
              <td>1301</td>
              <td>
                <a
                  href="https://www.spo.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  www.spo.go.kr
                </a>
              </td>
            </tr>
            <tr>
              <td>경찰청</td>
              <td>182</td>
              <td>
                <a
                  href="https://ecrm.cyber.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  ecrm.cyber.go.kr
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            <strong>공고일자</strong>: 2025년 1월 20일<br />
            <strong>시행일자</strong>: 2025년 1월 20일
          </p>
          <p className="text-sm text-gray-500 mt-4">
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
