import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormSchemaType } from '@/schema/schema'
import { useFormContext } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {majors} from '@/schema/schema'
function SelectingPreferences() {
    const { control } = useFormContext<FormSchemaType>()
  
  return (
    <div className=" flex  flex-col items-center justify-center mt-16" dir='rtl'>
      <FormField
          control={control}
          name='preference1'
          render={({ field }) => (
            <FormItem className='w-full  max-w-sm mb-8'>
              <FormLabel>الرغبة الأولى</FormLabel>
              <FormControl>
                <Select dir='rtl'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger  id="preference1">
                    <SelectValue placeholder="غير محدد"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {majors.map((majors) => (
                        <SelectItem key={majors} value={majors}>
                          {majors}

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
          name='preference2'
          render={({ field }) => (
            <FormItem className='w-full  max-w-sm mb-8'>
              <FormLabel>الرغبة الثانية</FormLabel>
              <FormControl>
                <Select dir='rtl'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger  id="preference2">
                    <SelectValue placeholder="غير محدد"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {majors.map((majors) => (
                        <SelectItem key={majors} value={majors}>
                          {majors}

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
          name='preference3'
          render={({ field }) => (
            <FormItem className='w-full  max-w-sm'>
              <FormLabel>الرغبة الثالثة</FormLabel>
              <FormControl>
                <Select dir='rtl'
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger  id="preference3">
                    <SelectValue placeholder="غير محدد"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {majors.map((majors) => (
                        <SelectItem key={majors} value={majors}>
                          {majors}

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
      
  )
}

export default SelectingPreferences