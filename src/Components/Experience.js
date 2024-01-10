import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  // turn of sticky navbar
  
  return (
      <div style={{
        backgroundImage: 'linear-gradient(to right, #ADD8E6, #87CEEB)', // Replace these color values with your desired gradient
      }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
          date="Jun 2022  - Aug 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        
        >
          <h3 className="vertical-timeline-element-title">CAA</h3>
          <h4 className="vertical-timeline-element-subtitle">Membership Support Intern</h4>
          <p>
            Directly responsible for customer calls and processed large-scale transactions ranging from $100 to
            $1000
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2022 - Jun 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Dairy Queen</h3>
          <h4 className="vertical-timeline-element-subtitle">Crew Member</h4>
          <p>
            Managed and processed customer orders.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2021 - Dec 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Kurius</h3>
          <h4 className="vertical-timeline-element-subtitle">Partnerships Coordinator</h4>
          <p>
            Raised sponsors and over $6000 in prize money for KuriusHacks CE.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience