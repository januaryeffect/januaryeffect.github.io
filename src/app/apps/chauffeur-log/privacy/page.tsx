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
            href="/apps/chauffeur-log/privacy/en/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            English Version
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          시행일: 2026년 2월 23일
        </p>

        <p>
          January Effect(이하 &quot;개발자&quot;)는 대리로그(Chauffeur Log, 이하 &quot;앱&quot;) 서비스를 제공함에 있어
          「개인정보 보호법」 및 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같이
          개인정보처리방침을 수립합니다.
        </p>

        <h2>제1조 (수집하는 개인정보 항목 및 수집 방법)</h2>

        <h3>1. 사용자가 직접 입력하는 정보</h3>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>운행 기록</td>
              <td>출발지, 경유지, 도착지(텍스트), 운행 시간, 호출 앱 이름</td>
            </tr>
            <tr>
              <td>수입/지출 정보</td>
              <td>금액, 장부 카테고리</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 자동으로 수집되는 정보</h3>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
              <th>플랫폼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>자동 캡처 데이터</td>
              <td>접근성 서비스를 통해 수집되는 호출 앱 화면 텍스트 (운행 정보 자동 입력 목적)</td>
              <td>Android 전용</td>
            </tr>
            <tr>
              <td>기기 식별자</td>
              <td>해시된 Android ID (자동 캡처 로그 구분 목적)</td>
              <td>Android 전용</td>
            </tr>
            <tr>
              <td>충돌 로그</td>
              <td>Firebase Crashlytics를 통해 수집되는 앱 오류 정보</td>
              <td>Android</td>
            </tr>
            <tr>
              <td>사용 통계</td>
              <td>Firebase Analytics를 통해 수집되는 앱 사용 패턴 (선택적)</td>
              <td>Android</td>
            </tr>
          </tbody>
        </table>

        <h3>3. 선택적으로 수집되는 정보</h3>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
              <th>수집 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google 계정 이메일</td>
              <td>Google Drive 백업 기능 사용 시 인증 목적</td>
              <td>Google Drive 백업 선택 시</td>
            </tr>
          </tbody>
        </table>

        <h2>제2조 (개인정보의 수집 및 이용 목적)</h2>
        <p>개발자는 수집한 개인정보를 다음의 목적으로만 이용합니다.</p>
        <table>
          <thead>
            <tr>
              <th>목적</th>
              <th>해당 정보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>운행 기록 관리</td>
              <td>운행 기록, 수입/지출 정보</td>
            </tr>
            <tr>
              <td>운행 정보 자동 입력</td>
              <td>자동 캡처 데이터</td>
            </tr>
            <tr>
              <td>자동 캡처 기능 개선</td>
              <td>해시된 기기 식별자, 자동 캡처 로그</td>
            </tr>
            <tr>
              <td>데이터 백업 및 복원</td>
              <td>Google 계정 이메일</td>
            </tr>
            <tr>
              <td>앱 안정성 개선</td>
              <td>충돌 로그</td>
            </tr>
            <tr>
              <td>서비스 품질 향상</td>
              <td>사용 통계</td>
            </tr>
          </tbody>
        </table>

        <h2>제3조 (개인정보의 저장 위치 및 보관)</h2>

        <h3>1. 로컬 저장소 (기기 내)</h3>
        <ul>
          <li><strong>저장 방식</strong>: SQLite 데이터베이스</li>
          <li><strong>저장 내용</strong>: 운행 기록, 수입/지출 정보, 앱 설정</li>
          <li><strong>보관 기간</strong>: 앱 삭제 시 자동으로 완전히 삭제됨</li>
          <li><strong>접근 범위</strong>: 본 앱만 접근 가능 (앱 샌드박스 내 저장)</li>
        </ul>

        <h3>2. Cloudflare R2 (개발 서버)</h3>
        <ul>
          <li><strong>저장 내용</strong>: 자동 캡처 개발 로그 (기능 개선 목적)</li>
          <li><strong>보관 기간</strong>: 업로드 후 <strong>90일 자동 삭제</strong></li>
          <li><strong>식별 정보</strong>: 해시된 Android ID만 포함 (직접적 개인 식별 불가)</li>
          <li><strong>암호화</strong>: HTTPS를 통한 전송 암호화</li>
        </ul>

        <h3>3. Google Drive (사용자 요청 시)</h3>
        <ul>
          <li><strong>저장 내용</strong>: 사용자가 요청한 백업 파일</li>
          <li>
            <strong>저장 위치</strong>: 사용자 본인의 Google Drive 내 &quot;대리로그 백업&quot; 폴더
            (Drive 루트 하위, 사용자가 직접 확인 및 관리 가능)
          </li>
          <li><strong>저장 형식</strong>: 평문 SQLite 데이터베이스 파일</li>
          <li><strong>보관 기간</strong>: 사용자가 직접 관리 및 삭제</li>
          <li>
            <strong>접근 권한</strong>: 본 앱은 &quot;대리로그 백업&quot; 폴더 내 앱이 생성한 파일에만
            접근합니다
          </li>
          <li>
            <strong>대리가계부(DCB) 마이그레이션</strong>: 대리가계부(DCB) 및 최강대리 앱의 백업
            데이터를 가져오기 위해 사용자의 Google Drive 파일 목록에 읽기 전용으로 접근합니다.
            이 접근은 마이그레이션 시에만 발생하며, 타 앱의 백업 파일(dcb_teras.zip 등)을 찾기
            위한 목적으로만 사용됩니다.
          </li>
          <li>
            <strong>레거시 appDataFolder 마이그레이션</strong>: 대리가계부(DCB) 및 최강대리 앱에서
            데이터를 가져오기 위해 Google Drive의 앱 전용 저장 영역(appDataFolder)에 일회성으로
            접근합니다. 이 접근은 마이그레이션 시에만 발생하며, 이후에는 사용되지 않습니다.
          </li>
        </ul>

        <h2>제4조 (개인정보의 제3자 제공)</h2>
        <p>
          개발자는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          다만, 다음의 경우는 예외로 합니다.
        </p>
        <ol>
          <li>이용자가 사전에 동의한 경우</li>
          <li>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우
          </li>
        </ol>

        <h2>제5조 (제3자 서비스 이용)</h2>
        <p>
          본 앱은 다음의 제3자 서비스를 이용하며, 각 서비스의 개인정보처리방침이 별도로 적용됩니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>서비스</th>
              <th>제공자</th>
              <th>목적</th>
              <th>수집 정보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Sign-In</td>
              <td>Google LLC</td>
              <td>사용자 인증 (Google Drive 백업용)</td>
              <td>이메일, 인증 토큰</td>
            </tr>
            <tr>
              <td>Firebase Crashlytics</td>
              <td>Google LLC</td>
              <td>앱 충돌 보고 및 안정성 개선</td>
              <td>충돌 로그, 기기 정보</td>
            </tr>
            <tr>
              <td>Firebase Analytics</td>
              <td>Google LLC</td>
              <td>앱 사용 통계 (선택적)</td>
              <td>이벤트 데이터, 기기 정보</td>
            </tr>
          </tbody>
        </table>
        <p>각 서비스의 개인정보처리방침:</p>
        <ul>
          <li>
            Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            Firebase:{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              https://firebase.google.com/support/privacy
            </a>
          </li>
        </ul>

        <h2>제6조 (개인정보의 보유 및 이용 기간)</h2>
        <table>
          <thead>
            <tr>
              <th>데이터</th>
              <th>보관 기간</th>
              <th>삭제 방법</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>로컬 데이터 (SQLite)</td>
              <td>앱 삭제 시까지</td>
              <td>앱 삭제 또는 앱 데이터 초기화</td>
            </tr>
            <tr>
              <td>Cloudflare R2 로그</td>
              <td>업로드 후 90일</td>
              <td>자동 삭제 (TTL 정책) 또는 이메일 요청</td>
            </tr>
            <tr>
              <td>Google Drive 백업</td>
              <td>사용자가 삭제할 때까지</td>
              <td>사용자가 Google Drive에서 직접 삭제</td>
            </tr>
            <tr>
              <td>Firebase 데이터</td>
              <td>각 서비스 보관 정책에 따름</td>
              <td>Google 정책에 따름</td>
            </tr>
          </tbody>
        </table>

        <h2>제7조 (이용자의 권리와 행사 방법)</h2>
        <p>이용자는 다음의 권리를 행사할 수 있습니다.</p>

        <h3>1. 데이터 삭제</h3>
        <ul>
          <li>
            <strong>로컬 데이터</strong>: 앱을 삭제하면 기기 내 모든 데이터가 즉시 삭제됩니다.
          </li>
          <li>
            <strong>R2 로그 삭제 요청</strong>: 아래 연락처로 이메일을 보내 삭제를 요청할 수 있습니다.
            요청 접수 후 7일 이내에 처리합니다.
          </li>
          <li>
            <strong>Google Drive 백업</strong>: 사용자가 본인의 Google Drive에서 직접 삭제할 수 있습니다.
          </li>
        </ul>

        <h3>2. 자동 캡처 기능 비활성화</h3>
        <ul>
          <li>앱 설정에서 자동 캡처 기능을 언제든지 끌 수 있습니다.</li>
          <li>기능을 비활성화하면 접근성 서비스를 통한 데이터 수집이 즉시 중단됩니다.</li>
        </ul>

        <h3>3. 선택적 데이터 수집 거부</h3>
        <ul>
          <li>Firebase Analytics 데이터 수집은 선택적이며, 앱 설정에서 거부할 수 있습니다.</li>
        </ul>

        <h2>제8조 (개인정보의 안전성 확보 조치)</h2>
        <p>개발자는 개인정보의 안전성 확보를 위해 다음 조치를 취하고 있습니다.</p>
        <ol>
          <li>
            <strong>전송 암호화</strong>: 모든 네트워크 통신은 HTTPS(TLS)를 통해 암호화됩니다.
          </li>
          <li>
            <strong>로컬 데이터 보호</strong>: 앱 데이터는 운영체제의 앱 샌드박스 내에 저장되어
            다른 앱에서 접근할 수 없습니다.
          </li>
          <li>
            <strong>식별자 해시 처리</strong>: 기기 식별자는 해시 처리하여 저장하며 직접적인
            개인 식별이 불가능합니다.
          </li>
          <li>
            <strong>최소 수집 원칙</strong>: 서비스 제공에 필요한 최소한의 정보만 수집합니다.
          </li>
          <li>
            <strong>접근 권한 제한</strong>: Google Drive 접근 시 대리로그 자체 백업은 &quot;대리로그
            백업&quot; 폴더 내 앱이 생성한 파일에만 접근합니다. 대리가계부(DCB) 및 최강대리 앱의
            백업 파일을 가져오기 위해 Drive 전체 파일 목록에 대한 읽기 전용 접근 권한이 필요하며,
            이는 일회성 마이그레이션 작업에만 사용됩니다. 백업 파일은 사용자의 Google Drive에서
            직접 확인하고 삭제할 수 있습니다.
          </li>
        </ol>

        <h2>제9조 (접근성 서비스 사용에 관한 고지)</h2>
        <p>본 앱은 Android 접근성 서비스를 다음 용도로만 사용합니다.</p>
        <ul>
          <li>
            <strong>용도</strong>: 대리운전 호출 앱의 운행 정보를 자동으로 읽어 입력을 편리하게
            하기 위함
          </li>
          <li>
            <strong>수집 범위</strong>: 사용자가 지정한 호출 앱의 화면 텍스트만 수집
          </li>
          <li>
            <strong>데이터 처리</strong>: 수집된 텍스트는 운행 정보 자동 입력에만 사용되며,
            기기 내에서 처리됩니다.
          </li>
          <li>
            <strong>개발 로그</strong>: 기능 개선을 위해 수집된 텍스트의 일부가 개발
            서버(Cloudflare R2)에 업로드될 수 있으며, 90일 후 자동 삭제됩니다.
          </li>
        </ul>
        <p>
          접근성 서비스는 사용자가 명시적으로 활성화해야 하며, 언제든지 비활성화할 수 있습니다.
        </p>

        <h2>제10조 (개인정보 보호책임자 및 연락처)</h2>
        <p>
          개인정보 처리에 관한 문의, 불만 처리, 피해 구제 등은 아래로 연락해 주시기 바랍니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>서비스명</td>
              <td>대리로그 (Chauffeur Log)</td>
            </tr>
            <tr>
              <td>개발자</td>
              <td>January Effect</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <a
                  href="mailto:contact@januaryeffect.app"
                  className="text-blue-600 hover:text-blue-700"
                >
                  contact@januaryeffect.app
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>제11조 (개인정보처리방침의 변경)</h2>
        <p>
          이 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수 있습니다.
          변경 사항이 있을 경우 앱 내 공지 또는 본 문서의 업데이트를 통해 고지합니다.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            <strong>시행일자</strong>: 2026년 2월 23일<br />
            <strong>버전</strong>: 1.0
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
