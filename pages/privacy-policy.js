import PageLayout from "@/components/PageLayout";
import { useApp } from "@/lib/AppContext";
import site from "@/data/site.json";

export default function PrivacyPolicy() {
  const { lang } = useApp();
  const bn = lang === "bn";
  return (
    <PageLayout title="Privacy Policy" titleBn="গোপনীয়তা নীতি">
      {bn ? (
        <>
          <p>জেড এস এম ট্রান্সপোর্ট এজেন্সী আপনার গোপনীয়তাকে সম্মান করে। এই নীতিতে আমরা কীভাবে আপনার তথ্য সংগ্রহ ও ব্যবহার করি তা বর্ণনা করা হয়েছে।</p>
          <h2>আমরা যে তথ্য সংগ্রহ করি</h2>
          <p>কোটেশন ফর্মের মাধ্যমে আপনি যে নাম, ফোন নম্বর, ইমেইল ও বার্তা প্রদান করেন তা আমরা সংগ্রহ করি, শুধুমাত্র আপনার অনুরোধে সাড়া দেওয়ার জন্য।</p>
          <h2>তথ্যের ব্যবহার</h2>
          <ul>
            <li>আপনার পরিবহন অনুরোধে সাড়া দেওয়া</li>
            <li>সেবা সম্পর্কিত যোগাযোগ</li>
            <li>সেবার মান উন্নয়ন</li>
          </ul>
          <h2>তথ্য সুরক্ষা</h2>
          <p>আমরা আপনার তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না। প্রশ্নের জন্য যোগাযোগ করুন: {site.contact.email}</p>
        </>
      ) : (
        <>
          <p>ZSM Transport Agency respects your privacy. This policy explains how we collect and use your information.</p>
          <h2>Information We Collect</h2>
          <p>Through the quote form, we collect the name, phone number, email, and message you provide — solely to respond to your request.</p>
          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to your transport requests</li>
            <li>For service-related communication</li>
            <li>To improve our service quality</li>
          </ul>
          <h2>Data Protection</h2>
          <p>We do not sell or share your information with third parties. For questions, contact: {site.contact.email}</p>
        </>
      )}
    </PageLayout>
  );
}
