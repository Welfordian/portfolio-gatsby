import React from "react";
import CaseStudy from "./CaseStudy";

export default class CaseStudies extends React.Component {
    render () {
        return (
            <div>
                <p className="text-4xl mt-24">Case Studies</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max mt-12">
                    <CaseStudy
                        inverted
                        name="EMR4DW"
                        description="EMR4DW (Electronic Medical Records for the Developing World) approached me for a complete rebuild of their patient medical records system. Using Laravel, I rebuilt this from scratch and it is now used in clinics in numerous countries and integrates directly into any Ministry/Department of Health that uses DHIS2."
                        length="Jan 2019 - Present"
                    ></CaseStudy>

                    <CaseStudy
                        name="Framework"
                        description="I spent my time at Framework working purely on an IoT Infusion Pump. The pump connected to WiFi and was able to display pressure readings from the Infusion Pump along with alarms (i.e., single bubble alarms & occlusion alarms) and other core data relating to the infusion. This was built from scratch using NodeJS."
                        length="Aug 2020 - Apr 2021"
                    ></CaseStudy>

                    <CaseStudy
                        inverted
                        name="RightMessage"
                        description=" After leaving VIA Creative, I worked directly with RightMessage on their personalization/segmentation editor. RightMessage combines data from ESPs/CRMs, on-site behavior, and survey responses to deliver fully personalized experiences on client websites. I utilized my Laravel & VueJS skills whilst working for RightMessage. "
                        length="Jul 2018 - Sep 2018"
                    ></CaseStudy>

                    <CaseStudy
                        name="VIA Creative"
                        description="During my time at VIA Creative, I worked mainly with RightMessage on their personalization/segmentation editor. RightMessage combines data from ESPs/CRMs, on-site behavior, and survey responses to deliver fully personalized experiences on client websites. I utilized my Laravel & VueJS skills whilst working for VIA Creative. "
                        length="Oct 2017 - Feb 2018"
                    ></CaseStudy>

                    <CaseStudy
                        inverted
                        name="LeadByte"
                        description="While working at LeadByte (lead management software) I worked with varied integrations as clients would often export leads from our software to their own CRM. During my time here I also revamped their dashboard bringing it into the modern day. This was a fully Javascript frontend which would request data via the LeadByte API as opposed to the backend which increased loading times for users and we saw a spike of good client feedback due to this. I also implemented 2FA. "
                        length="Mar 2017 - Jul 2017"
                    ></CaseStudy>

                    <CaseStudy
                        name="Better Brand Agency"
                        description="This section is missing text. It will be added at a later date."
                        length="Aug 2016 - Feb 2017"
                    ></CaseStudy>
                </div>
            </div>
        )
    }
}