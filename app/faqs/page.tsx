"use client"
import React, { useContext } from 'react'
import Acordion from "@/app/Components/acordion/Acordion"
import PageHeading from '../Components/Header/PageHeading'
import { LanguageContext } from '../Components/Context/ContextProviders'
import { LANG } from '../utils/Language'
type Props = {}

const Page = (props: Props) => {
  const { language, } = useContext<any>(LanguageContext);
  // @ts-ignore
  const data = LANG[language]?.faqsPage;

  return (
    <div >
      <PageHeading title={data?.title} />
      <Acordion faqs={data?.faqs} />
    </div>
  )
}

export default Page;