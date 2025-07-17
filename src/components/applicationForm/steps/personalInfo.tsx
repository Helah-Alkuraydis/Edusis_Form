import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormSchemaType } from '@/schema/schema'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { PhoneInput } from "@/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { saCitiesEnum } from "@/lib/countries"; // عدلي المسار حسب مكان الملف

function PersonalInfo() {
  const { control } = useFormContext<FormSchemaType>()
  return (
    <div className="  flex-col items-center justify-center mt-16" >
      <div className="w-full flex gap-6 justify-start mb-8" dir="rtl">

        <FormField
          control={control}
          name='firstName'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>الاسم الأول</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="مثال : محمد"
                  id='firstName'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='middleName'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>الاسم الثاني</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="مثال : أحمد"
                  id='middleName'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name='lastName'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>الاسم الثالث</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="مثال : الكريديس"
                  id='lastName'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>


      <div className="w-full flex gap-6 justify-start mb-8" dir="rtl" >

        <FormField
          control={control}
          name='id'
          render={({ field }) => (
            <FormItem className='w-full max-w '>
              <FormLabel>رقم الهوية</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  id='id'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='creationCity'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>مكان الاصدار</FormLabel>
              <FormControl>
                <Select dir='rtl'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="creationCity">
                    <SelectValue placeholder="غير محدد" />
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
      </div>

      <div className="w-full flex gap-6 justify-start mb-8" dir="rtl" >

        <FormField
          control={control}
          name='dateOfBirth'
          render={({ field }) => (
            <FormItem className='w-full max-w '>
              <FormLabel>تاريخ الميلاد</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        data-empty={!field.value}
                        className="w-full justify-between flex-row font-normal data-[empty=true]:text-muted-foreground  bg-transparent"
                      >
                        {field.value ? format(field.value, "PPP") : <span>اختر التاريخ</span>}

                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={field.onChange}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='gender'
          render={({ field }) => (
            <FormItem className='w-full max-w'>
              <FormLabel>الجنس</FormLabel>
              <FormControl>
                <RadioGroup
                  dir="rtl"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-3"
                >
                  <FormItem className="flex items-center gap-2 " >
                    <FormControl>
                      <RadioGroupItem value="ذكر"
                        id="variant-default"
                        className="text-gold border-gold [&_svg]:fill-gold" />
                    </FormControl>
                    <FormLabel className="text-sm font-normal ">ذكر</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="أنثى" 
                      id="variant-default"
                        className="text-gold border-gold [&_svg]:fill-gold" />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">أنثى</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>


      <div className="w-full flex gap-6 justify-start mb-8"  >{/*dir="rtl"*/}



        <FormField
          control={control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full max-w' dir="rtl">
              <FormLabel className="text-right block">البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder="مثال : example@email.com"
                  id='email'

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full max-w" >
              <FormLabel className="text-right block" >رقم الجوال</FormLabel>
              <FormControl>
                <PhoneInput
                  international
                  id="phone"
                  defaultCountry="SA"
                  {...field}
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

export default PersonalInfo