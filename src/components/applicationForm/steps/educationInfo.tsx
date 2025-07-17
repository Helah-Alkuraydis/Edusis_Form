import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormSchemaType ,MAX_FILES,
  MAX_RESUME_SIZE_IN_BYTES,
  VALID_RESUME_FILE_EXTENSIONS,} from '@/schema/schema'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { saCitiesEnum } from "@/lib/countries"; // عدلي المسار حسب مكان الملف
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import DropzoneInput from "@/components/ui/dropzone";


function EducationInfo() {
  const { control  } = useFormContext<FormSchemaType>()


  return (
    <div className=" flex-col items-center justify-center mt-16" >
      <div className="w-full flex gap-6 justify-start mb-8" dir="rtl">

        <FormField
          control={control}
          name='city'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>السكن </FormLabel>
              <FormControl>
                <Select dir='rtl'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="city">
                    <SelectValue placeholder="غير محدد"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {saCitiesEnum.map((saCitiesEnum) => (
                        <SelectItem key={saCitiesEnum} value={saCitiesEnum}>
                          {saCitiesEnum}

                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>


                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name='qualification'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>المؤهل</FormLabel>
              <FormControl>
                <RadioGroup
                  dir="rtl"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center gap-2 " >
                    <FormControl>
                      <RadioGroupItem value="ثانوي" />
                    </FormControl>
                    <FormLabel className="text-sm font-normal ">ثانوي</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="جامعي" />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">جامعي</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-full flex gap-6 justify-start mb-8" dir="rtl">

        <FormField
          control={control}
          name='highSchoolScore'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>نسبة الثانوية</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="المعدل التراكمي من 100%"
                  id='highSchoolScore'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='achievementScore'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>نسبة التحصيلي</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="من 100%"
                  id='achievementScore'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name='aptitudeScore'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>نسبة القدرات</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="من 100%"
                  id='aptitudeScore'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

         <div className='flex-col items-center justify-center mt-16' dir='rtl'>
      <FormField
        control={control}
        name="highSchoolFile"
        render={({ field }) => (
          <FormItem className='w-full max-w'>
             <FormLabel>مرفق شهادة الثانوية</FormLabel>
            <FormControl>
              <DropzoneInput
                value={field.value ?? []}
                onValueChange={field.onChange}
                maxFiles={MAX_FILES}
                allowedExtensions={VALID_RESUME_FILE_EXTENSIONS}
                maxSizeInBytes={MAX_RESUME_SIZE_IN_BYTES}
                multiple={MAX_FILES > 1}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={control}
        name="aptitudeFile"
        render={({ field }) => (
          <FormItem className='w-full max-w mt-16'>
             <FormLabel>مرفق امتحان القدرات</FormLabel>
            <FormControl>
              <DropzoneInput
                value={field.value ?? []}
                onValueChange={field.onChange}
                maxFiles={MAX_FILES}
                allowedExtensions={VALID_RESUME_FILE_EXTENSIONS}
                maxSizeInBytes={MAX_RESUME_SIZE_IN_BYTES}
                multiple={MAX_FILES > 1}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      </div>
    </div>
  )
}

export default EducationInfo