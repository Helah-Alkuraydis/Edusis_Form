import { date, z } from 'zod';
import { isValidEmail } from '@/lib/utils';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { convertMetricsToBytes, FileExtension, getFormattedFileSize, getMimeTypes, MimeType } from "@/lib/files";
import { saCitiesEnum } from "@/lib/countries"; // عدلي المسار حسب مكان الملف
import { saCities } from "@/lib/countries"; // عدلي المسار حسب مكان الملف


const EmailValidationSchema = z.string().superRefine(async (email, ctx) => {
    const isAvaiable = await isValidEmail(email);
    if (!isAvaiable) {
        ctx.addIssue({
            code: "custom",
            message: "الرجاء ادخال بريد صحيح"
        })

    }
    if (email) {
        const hasAddSign = email.includes("+");
        if (hasAddSign) {
            ctx.addIssue({
                code: "custom",
                message: "الرجاء ادخال بريد صحيح بدون علامة +"
            });
        }

        const issubDomainEmail = email.split("@")[1].split(".").length > 2;
        if (issubDomainEmail) {
            ctx.addIssue({
                code: "custom",
                message: "الرجاء ادخال بريد صحيح بدون نطاق فرعي"
            });
        }

    }
})

export const MAX_RESUME_SIZE_IN_BYTES = convertMetricsToBytes(10, "MB");
export const VALID_RESUME_FILE_EXTENSIONS: FileExtension[] = [".pdf"]
export const MAX_FILES = 2

const ResumeValidationSchema = z
    .instanceof(File)
    .superRefine((file, ctx) => {
        if (file.size <= 0) {
            ctx.addIssue({
                code: "custom",
                message: "Cannot upload empty file",
                path: ["resume"]
            })
        }

        if (file.size >= MAX_RESUME_SIZE_IN_BYTES) {
            ctx.addIssue({
                code: "custom",
                message: `File size cannot be greater than ${getFormattedFileSize(MAX_RESUME_SIZE_IN_BYTES)}`,
                path: ["resume"]
            })
        }


        if (!getMimeTypes(VALID_RESUME_FILE_EXTENSIONS).includes(file.type as MimeType)) {
            ctx.addIssue({
                code: "custom",
                message: `Only ${VALID_RESUME_FILE_EXTENSIONS.join(", ")} type are allowed`,
                path: ["resume"]
            })
        }
    })



const genders = ["ذكر", "أنثى"] as const;

export const majors = [
    "علوم الحاسب",
    "هندسة البرمجيات",
    "تقنية المعلومات",
    "الذكاء الاصطناعي",
    "الأمن السيبراني"
] as const;

export const formschema = z.object({

    // البيانات الشخصية
    firstName: z.string().min(3, { message: "الرجاء ادخال الاسم الأول بشكل صحيح" }).max(15),
    middleName: z.string().min(3, { message: "الرجاء ادخال الاسم الأوسط بشكل صحيح" }).max(15),
    lastName: z.string().min(4, { message: "الرجاء ادخال الاسم الأخير بشكل صحيح" }).max(10),
    id: z.string().min(10, { message: "الرجاء ادخال رقم الهوية بشكل صحيح" }).max(10).regex(/^1[0-9]*$/),
    email: EmailValidationSchema,
    phone: z.string().refine(isValidPhoneNumber, { message: "الرجاء ادخال رقم الجوال بشكل صحيح" }),
    creationCity: z.enum(saCitiesEnum, {
        message: 'الرجاء تحديد مدينة الاصدار',
    }),
    dateOfBirth: z.date().refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();

        // لو ما وصل تاريخ الميلاد إلى يوم وشهر اليوم، ننقص سنة من العمر
        const hasHadBirthdayThisYear =
            today.getMonth() > date.getMonth() ||
            (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());

        const actualAge = hasHadBirthdayThisYear ? age : age - 1;

        return actualAge >= 17;
    }, {
        message: "يجب أن يكون عمرك 17 سنة أو أكثر",
    }),

    gender: z.enum(genders, {
        message: "الرجاء اختيار الجنس",
    }),



    // البيانات التعليمية

    city: z.enum(saCitiesEnum, {
        message: "الرجاء اختيار المدينة",
    }),

    qualification: z.enum(["ثانوي", "جامعي"], {
        message: "الرجاء اختيار المؤهل",
    }),

    highSchoolScore: z
        .string()
        .min(1, { message: "النسبة لا يمكن أن تكون أقل من 0" })
    ,
    achievementScore: z
        .string()
        .min(1, { message: "النسبة لا يمكن أن تكون أقل من 0" })
    ,
    aptitudeScore: z
        .string()
        .min(1, { message: "النسبة لا يمكن أن تكون أقل من 0" })
    ,
    highSchoolFile: z.array(ResumeValidationSchema),

    aptitudeFile: z.array(ResumeValidationSchema),

    //تفاصيل الرغبات

    preference1: z.enum(majors, { message: "اختاري الرغبة الأولى" }),
    preference2: z.enum(majors, { message: "اختاري الرغبة الثانية" }),
    preference3: z.enum(majors, { message: "اختاري الرغبة الثالثة" }),
})
    .refine((data) => {
        const set = new Set([data.preference1, data.preference2, data.preference3]);
        return set.size === 3;
    }, {
        message: "لا يمكن اختيار نفس الرغبة أكثر من مرة",
        path: ["preference1"], // مكان ظهور رسالة الخطأ
    })




export type FormSchemaType = z.infer<typeof formschema>;
