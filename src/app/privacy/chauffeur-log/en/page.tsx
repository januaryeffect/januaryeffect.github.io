import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur Log Privacy Policy | January Effect",
  description: "Privacy Policy for Chauffeur Log app",
};

export default function ChauffeurLogPrivacyPolicyEnglish() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto legal-content">
        <div className="flex justify-between items-center mb-8">
          <h1>Chauffeur Log Privacy Policy</h1>
          <Link
            href="/privacy/chauffeur-log/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            한국어 버전
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Effective Date: January 20, 2025 | Last Updated: January 20, 2025
        </p>

        <p>
          January Effect Co., Ltd. (hereinafter &quot;Company&quot;) establishes and discloses
          this Privacy Policy to protect users&apos; personal information and handle related
          complaints promptly and smoothly in accordance with applicable privacy laws.
        </p>

        <h2>Article 1. Personal Information Collected and Collection Methods</h2>

        <h3>1. Personal Information Collected</h3>
        <p>The Company collects the following personal information to provide services.</p>

        <h4>1.1 Required Information</h4>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Items</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trip Records</td>
              <td>Work date, start time, end time, departure location, destination, waypoints, calling app name, trip amount, notes</td>
              <td>Trip record management and statistics</td>
            </tr>
            <tr>
              <td>Financial Records</td>
              <td>Income/expense amounts, ledger item names</td>
              <td>Income/expense management</td>
            </tr>
          </tbody>
        </table>

        <h4>1.2 Optional Information</h4>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Items</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Location Data</td>
              <td>GPS coordinates (latitude, longitude) of departure/destination/waypoints</td>
              <td>Trip location recording</td>
            </tr>
            <tr>
              <td>Account Information</td>
              <td>Google account email</td>
              <td>Data backup and restoration</td>
            </tr>
          </tbody>
        </table>

        <h4>1.3 Automatically Collected Information</h4>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Items</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Device Information</td>
              <td>Device model, OS version, app version</td>
              <td>Service improvement and error analysis</td>
            </tr>
            <tr>
              <td>Error Information</td>
              <td>App crash logs, error stack traces</td>
              <td>Service stability improvement</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Collection Methods</h3>
        <ul>
          <li>Direct input by users within the app</li>
          <li>Automatic collection through the Auto Capture feature (Accessibility Service)</li>
          <li>Automatic collection of error information through Firebase Crashlytics</li>
        </ul>

        <h2>Article 2. Accessibility Service Usage</h2>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Important Notice</p>
          <p className="text-amber-700 dark:text-amber-300 text-sm">
            Chauffeur Log uses Android Accessibility Service to provide the &quot;Auto Capture&quot; feature.
            This feature is only activated after the user&apos;s explicit consent.
          </p>
        </div>

        <h3>1. Purpose</h3>
        <p>
          To automatically detect <strong>trip completion screens</strong> from chauffeur service
          apps and save trip records. This improves convenience by eliminating the need for manual entry.
        </p>

        <h3>2. Monitored Apps (16 apps)</h3>
        <p>The Accessibility Service only reads screen information from <strong>the apps listed below</strong>:</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>App Names</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chauffeur</td>
              <td>Kakao Chauffeur, T-map Chauffeur</td>
            </tr>
            <tr>
              <td>Chauffeur (Logi)</td>
              <td>Logi 1, Logi 2, Logi 3</td>
            </tr>
            <tr>
              <td>Chauffeur (Callmanner)</td>
              <td>Callmanner 1, Callmanner 2, Callmanner 3</td>
            </tr>
            <tr>
              <td>Chauffeur (iCon)</td>
              <td>iCon 1, iCon 2, iCon 3, iCon 4</td>
            </tr>
            <tr>
              <td>Chauffeur (Others)</td>
              <td>Treecall, Click</td>
            </tr>
            <tr>
              <td>Vehicle Delivery</td>
              <td>Handler</td>
            </tr>
            <tr>
              <td>Rental Car</td>
              <td>Truca</td>
            </tr>
          </tbody>
        </table>

        <h3>3. Information Collected</h3>
        <ul>
          <li>Trip start/end times</li>
          <li>Departure/destination/waypoint addresses</li>
          <li>Trip amounts</li>
        </ul>

        <h3>4. Information NOT Collected</h3>
        <p>The following information is <strong>NOT collected</strong> through the Accessibility Service:</p>
        <ul>
          <li>Information from apps not listed above</li>
          <li>Sensitive information such as passwords or financial data</li>
          <li>Personal messages or call logs</li>
          <li>Web browsing history</li>
        </ul>

        <h3>5. How to Disable</h3>
        <p>Users can disable the Accessibility Service at any time through device settings:</p>
        <ol>
          <li><strong>Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>Installed Services</strong></li>
          <li>Select <strong>Chauffeur Log</strong> and disable it</li>
        </ol>

        <h2>Article 3. Purpose of Processing Personal Information</h2>
        <p>The Company processes personal information for the following purposes:</p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service Provision</td>
              <td>Storing and viewing trip records, income/expense management, providing statistics</td>
            </tr>
            <tr>
              <td>Data Backup</td>
              <td>Data backup and restoration through Google Drive</td>
            </tr>
            <tr>
              <td>Service Improvement</td>
              <td>App error analysis and stability improvement</td>
            </tr>
          </tbody>
        </table>

        <h2>Article 4. Retention and Destruction of Personal Information</h2>

        <h3>1. Retention Period</h3>
        <table>
          <thead>
            <tr>
              <th>Information Type</th>
              <th>Retention Period</th>
              <th>Storage Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trip/Financial Records</td>
              <td>Until deleted by user</td>
              <td>Local storage on device</td>
            </tr>
            <tr>
              <td>Google Drive Backup</td>
              <td>Until deleted by user</td>
              <td>Google Drive (appDataFolder)</td>
            </tr>
            <tr>
              <td>Error Logs</td>
              <td>90 days</td>
              <td>Firebase Crashlytics</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Destruction Procedure</h3>
        <ul>
          <li><strong>When app is deleted</strong>: All data on the device is automatically deleted.</li>
          <li><strong>Backup data</strong>: Backups stored on Google Drive must be manually deleted by the user.</li>
        </ul>

        <h2>Article 5. Provision of Personal Information to Third Parties</h2>
        <p>
          The Company does not provide users&apos; personal information to third parties.
          However, the following cases are exceptions:
        </p>
        <ol>
          <li>When the user has given prior consent</li>
          <li>When required by law or when requested by investigative agencies according to
            procedures and methods prescribed by law</li>
        </ol>

        <h2>Article 6. Entrustment of Personal Information Processing</h2>
        <p>The Company entrusts personal information processing as follows to provide services:</p>
        <table>
          <thead>
            <tr>
              <th>Trustee</th>
              <th>Entrusted Tasks</th>
              <th>Privacy Policy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google LLC</td>
              <td>Firebase services (authentication, error analysis)</td>
              <td>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Firebase Privacy Policy
                </a>
              </td>
            </tr>
            <tr>
              <td>Google LLC</td>
              <td>Google Drive backup service</td>
              <td>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Google Privacy Policy
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Article 7. User Rights and How to Exercise Them</h2>

        <h3>1. User Rights</h3>
        <p>Users may exercise the following rights at any time:</p>
        <table>
          <thead>
            <tr>
              <th>Right</th>
              <th>How to Exercise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>View Data</td>
              <td>View all trip/financial records within the app</td>
            </tr>
            <tr>
              <td>Modify Data</td>
              <td>Modify records within the app</td>
            </tr>
            <tr>
              <td>Delete Data</td>
              <td>Delete all data in app settings</td>
            </tr>
            <tr>
              <td>Delete Backup</td>
              <td>Delete directly from Google Drive</td>
            </tr>
            <tr>
              <td>Disable Accessibility Service</td>
              <td>Disable at any time in device settings</td>
            </tr>
            <tr>
              <td>Hide Location</td>
              <td>Option to hide location information when sharing statistics</td>
            </tr>
          </tbody>
        </table>

        <h3>2. User Obligations</h3>
        <p>
          Users have the obligation to protect their own personal information. The Company
          is not responsible for problems arising from device loss or password exposure
          without the Company&apos;s fault.
        </p>

        <h2>Article 8. Measures to Ensure Personal Information Security</h2>
        <p>The Company takes the following measures to ensure the security of personal information:</p>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Local Storage</td>
              <td>All trip/financial data is stored in the device&apos;s app sandbox, inaccessible to other apps</td>
            </tr>
            <tr>
              <td>Encrypted Communication</td>
              <td>All communication with Google services is encrypted via HTTPS</td>
            </tr>
            <tr>
              <td>Authenticated Access</td>
              <td>Google Drive backup is only accessible after user&apos;s Google account authentication</td>
            </tr>
            <tr>
              <td>Minimum Privileges</td>
              <td>Accessibility Service only collects screen information from 16 designated apps</td>
            </tr>
          </tbody>
        </table>

        <h2>Article 9. Personal Information Protection Officer</h2>
        <p>
          The Company designates a Personal Information Protection Officer as follows to
          handle complaints and damage relief related to personal information processing:
        </p>
        <ul>
          <li><strong>Company Name</strong>: January Effect Co., Ltd.</li>
          <li><strong>Email</strong>: contact@januaryeffect.app</li>
        </ul>

        <h2>Article 10. Changes to Privacy Policy</h2>
        <p>
          This Privacy Policy is effective from the effective date. In case of additions,
          deletions, or corrections of changes according to laws and policies, the Company
          will notify users through in-app announcements at least 7 days before the changes
          take effect.
        </p>

        <h2>Article 11. Remedies for Rights Infringement</h2>
        <p>
          Users may apply for dispute resolution or consultation to the Personal Information
          Dispute Mediation Committee or Korea Internet &amp; Security Agency for relief from
          personal information infringement.
        </p>
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Contact</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Information Dispute Mediation Committee</td>
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
              <td>Personal Information Infringement Report Center</td>
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
          </tbody>
        </table>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            <strong>Announcement Date</strong>: January 20, 2025<br />
            <strong>Effective Date</strong>: January 20, 2025
          </p>
          <p className="text-sm text-gray-500 mt-4">
            For inquiries about this Privacy Policy, please contact us at{" "}
            <a href="mailto:contact@januaryeffect.app" className="text-blue-600 hover:text-blue-700">
              contact@januaryeffect.app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
