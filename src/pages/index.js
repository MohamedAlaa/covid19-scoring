import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="step1">
      <div className="card mt-24">
        <h1>أداة اختبار فيروس كورونا</h1>
        <div className="flex py-4">
          <div className="flex-none text-center w-16 ml-2">icon</div>
          <div className="flex-grow ">ستجيب عن بعض الأسئلة حول الأعراض والسفر والاتصال الذي أجريته مع الآخرين.</div>
        </div>
        <div className="flex py-4">
          <div className="flex-none text-center w-16 ml-2">icon</div>
          <div className="flex-grow ">لن تتم مشاركة إجاباتك مع اي شخص او جهه بدون إذنك.</div>
        </div>

        <div className="flex py-4">
          <div className="flex-none text-center w-16 ml-2">icon</div>
          <div className="flex-grow ">
            باستخدام هذه الأداة ، فإنك توافق على شروطها وأننا لن نكون مسؤولين عن أي ضرر يتعلق باستخدامك.
            <div className="text-md text-gray-600 mt-4">التوصيات التي تقدمها هذه الأداة لا تشكل نصيحة طبية ولا يجب استخدامها لتشخيص أو علاج الحالات الطبية.</div>
          </div>
        </div>
        <div className="my-6">
          <button className="btn btn-primary w-full btn-lg mx-auto">استخدمه لنفسي</button>
        </div>
        <div className="my-3">
          <button className="btn btn-secondary w-full btn-lg mx-auto">استخدام لشخص آخر</button>
        </div>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
