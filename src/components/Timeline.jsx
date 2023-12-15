
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
const EducationTimelineEvent = ({ event }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#27313b', color: '#fff', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  #27313b' }}
            date={event.date}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<div className="timeline-icon-div">
                <a href={event.url}>
                    <img src={event.icon} alt={event.institution} className="timeline-icon" />
                </a>
            </div>}
            >
                <h3 className="vertical-timeline-element-title">{event.institution}</h3>

                <p>
                    {event.department}
                </p>
        </VerticalTimelineElement>
    );
};
const EducationTimeline = ({events}) => {
    return (
        <>
            <div className="timeline">
                <VerticalTimeline>
                    {events.map((event, index) => (
                        <EducationTimelineEvent key={`education-${index}`} event={event}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

const ExperienceTimelineEvent = ({ event }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#27313b', color: '#fff', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  #27313b' }}
            date={event.date}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<div className="timeline-icon-div" id="experience-icon">
                <a href={event.url}>
                    <img src={event.icon} alt={event.institution} className="timeline-icon" />
                </a>

            </div>}
        >
            <h3 className="vertical-timeline-element-title">{event.institution}</h3>

            <p>
                {event.department}
            </p>

            <ul className="experience-points">
                {event.points.map((point, index) => (
                    <li key={`point-${index}`}>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const ExperienceTimeline = ({events}) => {
    return (
        <>
            <div className="timeline">
                <VerticalTimeline>
                    {events.map((event, index) => (
                        <ExperienceTimelineEvent key={`experience-${index}`} event={event}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

EducationTimelineEvent.propTypes = {
    event: PropTypes.shape({
        date: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired,
};

EducationTimeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
};

ExperienceTimelineEvent.propTypes = {
    event: PropTypes.shape({
        date: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

ExperienceTimeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            points: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};
export {EducationTimeline, ExperienceTimeline};