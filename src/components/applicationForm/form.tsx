"use client";
import { formschema, FormSchemaType } from '@/schema/schema'
import React, { Component } from 'react'
import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import PersonalInfo from './steps/personalInfo';
import EducationInfo from './steps/educationInfo';
import SelectingPreferences from './steps/selectingPreferences';
import { FormControlsProvider } from './hooks/useForm';
import FormHeader from './formHeader';
import { Form } from '../ui/form';

export type Step = {
  id: string;
  title: string;
  description: string;
  component: () => React.JSX.Element;
  inputs: (keyof FormSchemaType)[] // to matching the enters with the default values  

}

const steps = [{
  id: "1",
  title: "البيانات الشخصية",
  description: " ",
  component: PersonalInfo,
  inputs: ["firstName", "middleName", "lastName", "id", "email", "phone", "creationCity", "creationCity", "dateOfBirth", "gender"]
},
{
  id: "2",
  title: "البيانات الدراسية",
  description: "",
  component: EducationInfo,
  inputs: ["city","qualification","highSchoolScore","achievementScore","aptitudeScore","highSchoolFile", "aptitudeFile"]

},
{
  id: "3",
  title: "تفاصيل الرغبات",
  description: "",
  component: SelectingPreferences,
  inputs: ["preference1", "preference2", "preference3"]

}
] satisfies Step[];

const ApplicationForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formschema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      id: "",
      email: "",
      phone: "",
      creationCity: "غير محدد",
      dateOfBirth: "",
      gender: "undefined",
      city : "غير محدد",
      qualification: "undefiend",
      highSchoolScore: 0,
      achievementScore: 0,
      aptitudeScore:0,
      highSchoolFile: [],
      aptitudeFile :[],
      preference1: "غير محدد",
      preference2: "غير محدد",
      preference3: "غير محدد",
      
    }

  })

  const onSubmit = (values: FormSchemaType) =>{
    console.log(values);
  }


  return (
    <FormControlsProvider steps={steps}>
      <Form{...form}>
        <form onSubmit= {form.handleSubmit(onSubmit)}
        className='space-y-8 h-svh py-20 flex flex-col justify-between'
        >
          <FormHeader steps={steps}/>
        </form>
        
      </Form>
    </FormControlsProvider>
  )
}

export default ApplicationForm