
const TimePosted = ({ timePosted }) => {
    function timeConversion(timePosted) {
        const timePostedInMilliseconds = timePosted * 1000;
        const dateObj = new Date(timePostedInMilliseconds).toLocaleTimeString();

        return dateObj;
    };

    return <div className='post-time-posted'>{timeConversion(timePosted)}</div>
};

export default TimePosted;
