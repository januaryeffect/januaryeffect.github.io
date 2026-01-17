import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | January Effect",
  description: "Terms of Service of January Effect",
};

export default function TermsOfServiceEnglish() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto legal-content">
        <div className="flex justify-between items-center mb-8">
          <h1>Terms of Service</h1>
          <Link
            href="/terms/"
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            한국어 버전
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Effective Date: January 1, 2025
        </p>

        <h2>Article 1 (Purpose)</h2>
        <p>
          These Terms of Service aim to stipulate the rights, obligations, and
          responsibilities of the Company and users, and other necessary matters
          regarding the use of services provided by January Effect Co., Ltd.
          (hereinafter referred to as the &quot;Company&quot;).
        </p>

        <h2>Article 2 (Definitions)</h2>
        <ol>
          <li>
            &quot;Service&quot; refers to mobile applications and related services provided
            by the Company.
          </li>
          <li>
            &quot;User&quot; refers to members and non-members who use the services provided
            by the Company in accordance with these Terms.
          </li>
          <li>
            &quot;Member&quot; refers to a person who has entered into a service agreement
            with the Company and has been assigned a user ID.
          </li>
        </ol>

        <h2>Article 3 (Effect and Modification of Terms)</h2>
        <ol>
          <li>
            These Terms apply to all users who wish to use the Service.
          </li>
          <li>
            The Company may modify these Terms within the scope that does not violate
            relevant laws if necessary.
          </li>
          <li>
            When the Terms are modified, the Company will notify the changes through
            service announcements from 7 days before the effective date.
          </li>
        </ol>

        <h2>Article 4 (Provision of Services)</h2>
        <ol>
          <li>
            The Company provides the following services:
            <ul>
              <li>Mobile application services</li>
              <li>Other services determined by the Company</li>
            </ul>
          </li>
          <li>
            The Company may change the contents of the Service to improve quality,
            and changes will be announced through in-service announcements.
          </li>
        </ol>

        <h2>Article 5 (Conclusion of Service Agreement)</h2>
        <ol>
          <li>
            The service agreement is concluded when the user agrees to these Terms
            and the Company accepts it.
          </li>
          <li>
            The Company may refuse or cancel the service agreement in the following
            cases:
            <ul>
              <li>When using information that is not real name</li>
              <li>When stealing another person&apos;s information</li>
              <li>When not meeting other application requirements set by the Company</li>
            </ul>
          </li>
        </ol>

        <h2>Article 6 (User Obligations)</h2>
        <p>Users shall not engage in the following activities:</p>
        <ul>
          <li>Registering false information when signing up or changing information</li>
          <li>Stealing another person&apos;s information</li>
          <li>Infringing intellectual property rights of the Company and third parties</li>
          <li>Damaging the reputation of the Company or third parties or interfering with their business</li>
          <li>Posting obscene or violent content</li>
          <li>Using the Service to violate laws</li>
          <li>Other activities that violate relevant laws or conditions set by the Company</li>
        </ul>

        <h2>Article 7 (Company Obligations)</h2>
        <ol>
          <li>
            The Company does not engage in activities prohibited by relevant laws
            and these Terms or contrary to public order and morals, and does its
            best to provide continuous and stable services.
          </li>
          <li>
            The Company maintains a security system to protect users&apos; personal
            information and discloses and complies with the Privacy Policy.
          </li>
        </ol>

        <h2>Article 8 (Restriction and Suspension of Service Use)</h2>
        <ol>
          <li>
            The Company may restrict or suspend service use in the following cases:
            <ul>
              <li>Unavoidable circumstances due to repair of service facilities</li>
              <li>When a telecommunications service provider suspends telecommunications services as stipulated in the Telecommunications Business Act</li>
              <li>Other force majeure reasons</li>
            </ul>
          </li>
          <li>
            The Company may restrict service use or terminate the service agreement
            if the user violates these Terms.
          </li>
        </ol>

        <h2>Article 9 (Copyright)</h2>
        <ol>
          <li>
            Copyright and other intellectual property rights for works created by
            the Company within the Service belong to the Company.
          </li>
          <li>
            Users shall not use the information obtained through the Service for
            commercial purposes or allow third parties to use it by copying,
            transmitting, publishing, distributing, broadcasting, or other means
            without prior consent of the Company.
          </li>
        </ol>

        <h2>Article 10 (Disclaimer)</h2>
        <ol>
          <li>
            The Company is exempt from responsibility for service provision when
            it cannot provide services due to natural disasters, war, suspension
            of service by telecommunications service providers, and other force
            majeure.
          </li>
          <li>
            The Company is not responsible for service disruptions caused by
            reasons attributable to users.
          </li>
        </ol>

        <h2>Article 11 (Dispute Resolution)</h2>
        <ol>
          <li>
            The law of the Republic of Korea shall be the governing law for
            lawsuits regarding disputes between the Company and users.
          </li>
          <li>
            The court having jurisdiction over the location of the Company&apos;s
            headquarters shall have exclusive jurisdiction over lawsuits regarding
            disputes between the Company and users.
          </li>
        </ol>

        <h2>Supplementary Provisions</h2>
        <p>These Terms shall be effective from January 1, 2025.</p>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            For inquiries about these Terms of Service, please contact us at{" "}
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
