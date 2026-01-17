import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | January Effect",
  description: "Privacy Policy of January Effect",
};

export default function PrivacyPolicyEnglish() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto legal-content">
        <div className="flex justify-between items-center mb-8">
          <h1>Privacy Policy</h1>
          <Link
            href="/privacy/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            한국어 버전
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Effective Date: January 1, 2025
        </p>

        <p>
          January Effect Co., Ltd. (hereinafter referred to as the &quot;Company&quot;) complies
          with the Personal Information Protection Act and related laws to protect the
          freedom and rights of data subjects, and processes and safely manages personal
          information in accordance with the law.
        </p>

        <h2>Article 1 (Purpose of Processing Personal Information)</h2>
        <p>The Company processes personal information for the following purposes:</p>
        <ul>
          <li>Service provision and operation</li>
          <li>Member management and identity verification</li>
          <li>Customer inquiry and complaint handling</li>
          <li>Service improvement and new service development</li>
          <li>Marketing and advertising (only with consent)</li>
        </ul>

        <h2>Article 2 (Categories of Personal Information Processed)</h2>
        <p>The Company processes the following categories of personal information:</p>
        <h3>1. Required Information</h3>
        <ul>
          <li>Email address</li>
          <li>Service usage records</li>
          <li>Access logs</li>
          <li>Device information (device identifier, OS version, etc.)</li>
        </ul>
        <h3>2. Optional Information</h3>
        <ul>
          <li>Nickname</li>
          <li>Profile image</li>
        </ul>

        <h2>Article 3 (Processing and Retention Period)</h2>
        <p>
          The Company processes and retains personal information within the retention and
          use period stipulated by law or agreed upon when collecting personal information
          from the data subject.
        </p>
        <ul>
          <li>Member information: Until membership withdrawal</li>
          <li>Service usage records: 3 years</li>
          <li>
            Retention according to relevant laws:
            <ul>
              <li>Records of contracts or subscription withdrawal: 5 years</li>
              <li>Records of payment and supply of goods: 5 years</li>
              <li>Records of consumer complaints or dispute resolution: 3 years</li>
            </ul>
          </li>
        </ul>

        <h2>Article 4 (Provision of Personal Information to Third Parties)</h2>
        <p>
          The Company processes personal information only within the scope specified in
          Article 1 (Purpose of Processing Personal Information) and provides personal
          information to third parties only in cases falling under Articles 17 and 18
          of the Personal Information Protection Act, such as consent from the data
          subject or special provisions of the law.
        </p>

        <h2>Article 5 (Entrustment of Personal Information Processing)</h2>
        <p>
          The Company entrusts personal information processing as follows for smooth
          personal information processing:
        </p>
        <table>
          <thead>
            <tr>
              <th>Trustee</th>
              <th>Entrusted Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cloud Service Providers</td>
              <td>Data storage and management</td>
            </tr>
          </tbody>
        </table>

        <h2>Article 6 (Rights and Obligations of Data Subjects)</h2>
        <p>Data subjects may exercise the following rights at any time:</p>
        <ul>
          <li>Request access to personal information</li>
          <li>Request correction if there are errors</li>
          <li>Request deletion</li>
          <li>Request suspension of processing</li>
        </ul>

        <h2>Article 7 (Destruction of Personal Information)</h2>
        <p>
          The Company destroys personal information without delay when personal information
          becomes unnecessary due to the expiration of the retention period or achievement
          of the processing purpose.
        </p>
        <ul>
          <li>Electronic files: Permanently deleted in an unrecoverable manner</li>
          <li>Paper documents: Shredded or incinerated</li>
        </ul>

        <h2>Article 8 (Measures for Safety of Personal Information)</h2>
        <p>
          The Company takes the following measures to ensure the safety of personal
          information:
        </p>
        <ul>
          <li>Encryption of personal information</li>
          <li>Technical measures against hacking</li>
          <li>Restriction of access to personal information</li>
          <li>Regular self-audits</li>
        </ul>

        <h2>Article 9 (Personal Information Protection Officer)</h2>
        <p>
          The Company has designated a Personal Information Protection Officer as follows
          to take overall responsibility for personal information processing and to handle
          complaints and damage relief from data subjects related to personal information
          processing:
        </p>
        <ul>
          <li>Department: Privacy Protection Team</li>
          <li>Email: contact@januaryeffect.app</li>
        </ul>

        <h2>Article 10 (Changes to the Privacy Policy)</h2>
        <p>
          This Privacy Policy shall be effective from January 1, 2025. In case of any
          additions, deletions, or corrections of changes according to laws and policies,
          we will notify you through announcements from 7 days before the implementation
          of the changes.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
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
