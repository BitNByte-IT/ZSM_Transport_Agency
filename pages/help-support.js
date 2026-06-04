import PageLayout from "@/components/PageLayout";
import { useApp } from "@/lib/AppContext";
import site from "@/data/site.json";

export default function HelpSupport() {
  const { lang } = useApp();
  const bn = lang === "bn";
  return (
    <PageLayout title="Help & Support" titleBn="সহায়তা ও সাপোর্ট">
      {bn ? (
        <>
          <p>জেড এস এম ট্রান্সপোর্ট এজেন্সী-তে আমরা সর্বোচ্চ সেবা দিতে প্রতিশ্রুতিবদ্ধ। যেকোনো প্রশ্ন, বুকিং বা অভিযোগের জন্য আমাদের সাথে যোগাযোগ করুন।</p>
          <h2>কীভাবে যোগাযোগ করবেন</h2>
          <ul>
            <li>ফোন: {site.contact.phonePrimaryDisplay}, {site.contact.phoneSecondaryDisplay}</li>
            <li>ইমেইল: {site.contact.email}</li>
            <li>ঠিকানা: {site.contact.addressBn}</li>
          </ul>
          <h2>সাধারণ জিজ্ঞাসা</h2>
          <p><strong>কীভাবে গাড়ি বুক করব?</strong> আপনি সরাসরি কল করতে পারেন অথবা ওয়েবসাইটের কোটেশন ফর্ম পূরণ করতে পারেন।</p>
          <p><strong>আপনারা কোন এলাকায় সেবা দেন?</strong> আমরা বাংলাদেশের সকল ৬৪ জেলায় পরিবহন সেবা প্রদান করি।</p>
          <p><strong>জরুরি সহায়তা পাওয়া যায় কি?</strong> হ্যাঁ, আমাদের ২৪/৭ জরুরি সহায়তা রয়েছে।</p>
        </>
      ) : (
        <>
          <p>At ZSM Transport Agency, we are committed to providing the best service. Reach out to us for any question, booking, or complaint.</p>
          <h2>How to Reach Us</h2>
          <ul>
            <li>Phone: {site.contact.phonePrimaryDisplay}, {site.contact.phoneSecondaryDisplay}</li>
            <li>Email: {site.contact.email}</li>
            <li>Address: {site.contact.address}</li>
          </ul>
          <h2>Frequently Asked Questions</h2>
          <p><strong>How do I book a vehicle?</strong> You can call us directly or fill out the quote form on our website.</p>
          <p><strong>Which areas do you serve?</strong> We provide transport services across all 64 districts of Bangladesh.</p>
          <p><strong>Is emergency support available?</strong> Yes, we offer 24/7 emergency support.</p>
        </>
      )}
    </PageLayout>
  );
}
