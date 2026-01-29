
const TimePosted = ({ timePosted }) => {
    function timeConversion(timePosted) {
        const timePostedInMilliseconds = timePosted * 1000;
        const currTimeMilliseconds = Date.now() * 1000;
        const dateObj = new Date(currTimeMilliseconds - timePostedInMilliseconds);

        if(dateObj.getHours() < 1) return `${dateObj.getMinutes()} min ago`;
        if(dateObj.getHours() >= 24) return `${dateObj.getDay()} days ago`;
        return `${dateObj.getHours()} hrs ago`;
    };

    return <div className='post-time-posted'>{timeConversion(timePosted)}</div>
};

export default TimePosted;
