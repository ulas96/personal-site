
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
const TimelineEvent = ({ event }) => {
    return (
        <VerticalTimelineElement
        contentStyle={{ background: '#fff', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date={event.date}
        iconStyle={{ background: '#fff', color: '#fff' }}
        icon={<div className="timeline-icon-div">
            <img src={event.icon} alt={event.institution} className="timeline-icon" />
        </div>}
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
                        <TimelineEvent key={`education-${index}`} event={event}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

TimelineEvent.propTypes = {
    event: PropTypes.shape({
        date: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};

Timeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default Timeline;