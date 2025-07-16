// components/WelcomeSection.tsx
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <>
      <div className="items-end  flex justify-end">
        <Image
          src="/Logo.png" // تأكد من وضع الصورة داخل مجلد public/images
          alt="شعار"
          width={28}
          height={64}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-start text-center ">
        <h2 className="mb-2 text-stone-900 text-3xl font-medium font-[Tajawal]">
          مرحبًا بك في
        </h2>
        <h1 className="mb-6 text-slate-700 text-6xl font-extrabold font-[Tajawal]">
          نظام القبول الجامعي
        </h1>
        <p className=" mb-7 text-neutral-400 text-2xl font-medium font-[Tajawal]">
          ابدأ الآن بتعبئة نموذج طلب القبول
        </p>
      </div>
    </>
  );
}
