import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormSchemaType } from '@/schema/schema'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

function PersonalInfo() {
  const { control } = useFormContext<FormSchemaType>()

  return (
    // <div className='w-full grid grid-cols-4 gap-4 ' dir="rtl">
    <div className='flex-col items-end justify-center'>
      <div className=" flex-row-reverse justify-center gap-6">
      <FormField
        control={control}
        name='firstName'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>الاسم الأول</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder="مثال : محمد"
                id='firstName'

                {...field}
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='middleName'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>الاسم الثاني</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder="مثال : أحمد"
                id='middleName'

                {...field}
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />


       <FormField
        control={control}
        name='lastName'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>الاسم الثالث</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder="مثال : الكريديس"
                id='lastName'

                {...field}
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />


    </div>

    
    </div>
  )
}

export default PersonalInfo