
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

const TimelineEvent = ({ event }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date={event.date}
        >
            <h3 className="vertical-timeline-element-title">{event.institution}</h3>

            <p>
                {event.department}
            </p>
        </VerticalTimelineElement>
    );
};
const Timeline = ({events}) => {
    return (
        <>
            <div className="timeline">
                <VerticalTimeline>
                    {events.map((event, index) => (
                        <TimelineEvent key={`education-${index}`}event={event}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Timeline;