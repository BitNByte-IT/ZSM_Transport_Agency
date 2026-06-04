import PageLayout from "@/components/PageLayout";
import { useApp } from "@/lib/AppContext";

export default function TermsConditions() {
  const { lang } = useApp();
  const bn = lang === "bn";
  return (
    <PageLayout title="Terms & Conditions" titleBn="শর্তাবলী">
      {bn ? (
        <>
          <p>জেড এস এম ট্রান্সপোর্ট এজেন্সীর সেবা ব্যবহারের মাধ্যমে আপনি নিম্নলিখিত শর্তাবলীতে সম্মত হচ্ছেন।</p>
          <h2>সেবা</h2>
          <p>আমরা বাংলাদেশজুড়ে কভার্ড ভ্যান ও ট্রাক পরিবহন সেবা প্রদান করি। বুকিং নিশ্চিতকরণ গাড়ির প্রাপ্যতার উপর নির্ভরশীল।</p>
          <h2>পেমেন্ট</h2>
          <p>সেবার মূল্য দূরত্ব, লোড ও যানবাহনের ধরন অনুযায়ী নির্ধারিত হয়। চূড়ান্ত মূল্য বুকিংয়ের সময় নিশ্চিত করা হবে।</p>
          <h2>দায়বদ্ধতা</h2>
          <ul>
            <li>পণ্য নিরাপদে পরিবহনে আমরা সর্বোচ্চ যত্ন নিই।</li>
            <li>প্রাকৃতিক দুর্যোগ বা অনিবার্য পরিস্থিতিতে বিলম্বের জন্য আমরা দায়ী নই।</li>
            <li>মূল্যবান পণ্যের জন্য পূর্বে অবহিত করা আবশ্যক।</li>
          </ul>
          <h2>বাতিলকরণ</h2>
          <p>পিকআপের পূর্বে বুকিং বাতিল করা যাবে। বিস্তারিত জানতে যোগাযোগ করুন।</p>
        </>
      ) : (
        <>
          <p>By using ZSM Transport Agency's services, you agree to the following terms and conditions.</p>
          <h2>Services</h2>
          <p>We provide covered van and truck transport services across Bangladesh. Booking confirmation depends on vehicle availability.</p>
          <h2>Payment</h2>
          <p>Service charges are determined by distance, load, and vehicle type. The final price is confirmed at the time of booking.</p>
          <h2>Liability</h2>
          <ul>
            <li>We take maximum care to transport goods safely.</li>
            <li>We are not liable for delays due to natural disasters or unavoidable circumstances.</li>
            <li>Valuable goods must be declared in advance.</li>
          </ul>
          <h2>Cancellation</h2>
          <p>Bookings may be cancelled before pickup. Contact us for details.</p>
        </>
      )}
    </PageLayout>
  );
}
