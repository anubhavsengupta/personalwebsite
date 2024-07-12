import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gradient text-center pt-24">
        Experience
      </h1>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff', border: '3px solid #fdba74' }}
          contentArrowStyle={{ borderRight: '7px solid  #333' }}
          date="May 2024 - Aug 2024"
          iconStyle={{ background: '#fed7aa', color: '#fff', boxShadow: '0 0 0 4px black' }}
         
        >
          <h3 className="font-raleway text-2xl font-bold">TTC (Toronto Transit Commission)</h3>
          <h4 className="vertical-timeline-element-subtitle italic">Software Developer</h4>
          <p>Created internal tools using C#, .NET, Javascript, and SQL.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff', border: '3px solid #fdba74' }}
          contentArrowStyle={{ borderRight: '7px solid  #333' }}
          date="Jun 2022  - Aug 2022"
          iconStyle={{ background: '#fed7aa', color: '#fff', boxShadow: '0 0 0 4px black' }}
         
        >
          <h3 className="font-raleway text-2xl font-bold">CAA</h3>
          <h4 className="vertical-timeline-element-subtitle">Membership Support Intern</h4>
          <p>Directly responsible for customer calls and processed large-scale transactions ranging from $100 to $1000</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff', border: '3px solid #fdba74' }}
          contentArrowStyle={{ borderRight: '7px solid  #333' }}
          date="Nov 2021 - Dec 2022"
          iconStyle={{ background: '#fed7aa', color: '#fff', boxShadow: '0 0 0 4px black' }}
          
        >
          <h3 className="font-raleway text-2xl font-bold">Kurius</h3>
          <h4 className="vertical-timeline-element-subtitle">Partnerships Coordinator</h4>
          <p>Raised sponsors and over $6000 in prize money for KuriusHacks CE.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff', border: '3px solid #fdba74' }}
          contentArrowStyle={{ borderRight: '7px solid  #333' }}
          date="Jun 2021 - Aug 2021"
          iconStyle={{ background: '#fed7aa', color: '#fff', boxShadow: '0 0 0 4px black' }}
          
        >
          <h3 className="font-raleway text-2xl font-bold">e2youngengineers</h3>
          <h4 className="vertical-timeline-element-subtitle">STEM Instructor</h4>
          <p>Prepared and served a variety of lessons with precision and creativity to over 25 students, consistently meeting and exceeding quality standards.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#333', color: '#fff', border: '3px solid #fdba74' }}
          contentArrowStyle={{ borderRight: '7px solid  #333' }}
          date="2019 - 2023"
          iconStyle={{ background: '#fed7aa', color: '#fff', boxShadow: '0 0 0 4px black' }}
          
        >
          <h3 className="font-raleway text-2xl font-bold">Robotics Programming Team Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">Bishop Reding Catholic Secondary School</h4>
          <p>Led school robotics team in programming. Developed image recognition models using openCV and taught C to students.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
