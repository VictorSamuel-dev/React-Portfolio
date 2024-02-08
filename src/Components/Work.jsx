import React from 'react'
import WorkItem from './WorkItem'
import { Link } from '@mui/material'

const data = [
    {
        year: 2023 ,
        title: 'Revenue Operations Analyst',
        duration: '10 Months',
        details:
        'Utilized expertise in Stripe to facilitate client invoicing, ensuring accurate and timely billing processes. Collaborated with team members to establish comprehensive tracking systems using Notion, enabling efficient monitoring of various operational aspects. Played a pivotal role in supporting the overall Revenue Operations (RevOps) function, contributing to streamlined workflows and improved revenue management. Managed the tracking of multi-team and annual burndown against contracts, providing valuable insights into financial performance and contract compliance'
    },
    {
        year: 2022,
        title: 'Accounts Receivable Analyst',
        duration: '11 Months',
        details:
        'Daily troubleshooting of automated payment failures and reconciliation between bank and ERP. Managed invoice submissions through vendor portals, ensuring accurate setup and tracking. Utilized Salesforce to resolve daily cases with a 90% success rate and responded with 100% accuracy. Collaborated with cross-functional teams to enhance financial performance and support business initiatives.'
    },
    {
        year: 2021,
        title: 'Finance Associate',
        duration: '3 Months',
        details:
        'Reviewed cash transactions, reconciled bank accounts, and prepared balance sheet reconciliation schedules for quarter-end accounts. Assisted in the preparation of quarter-end financial reports, including the presentation of financials to internal stakeholders. Collaborated on investor-related tasks, including capital call notices, distribution calculations, and supported Accounts Payable processes while maintaining effective communication with third-party administrators.'
    },
    {
        year: 2017,
        title: 'Staff Accountant',
        duration: '4.7 Years',
        details:
        'Partnered with the VP of Finance to finalize month-end taxes, reconciliation, and year-end audits. Performed root-cause analysis on billing issues to recommend improvements to processes and procedures. Generated month-end Accounts Receivable and Account Payable reports. Analyzed financial data to identify trends and provide insights to improve financial performance. Created reports for senior management and board of directors’ meeting.'  
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=> (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    <div>
       <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:367b856d-68c1-4b6d-8a0c-89cc44517a01"><button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg cursor-pointer-click'>Download Resume</button></a> 
    </div>
    </div>
    
  )
}


export default Work