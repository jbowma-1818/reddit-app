
const TimePosted = ({ timePosted }) => {
    function timeConversion(timePosted) {
        const timePostedInMilliseconds = timePosted * 1000;
        const currTimeMilliseconds = Date.now();
        const dateObj = new Date(currTimeMilliseconds - timePostedInMilliseconds);

        if(dateObj.getHours() < 1) return `${dateObj.getMinutes().toLocaleString()} min ago`;
        if(dateObj.getHours() >= 24) return `${dateObj.getDay().toLocaleString()} days ago`;
        return `${dateObj.getHours().toLocaleString()} hrs ago`;
    };

    return <div className='post-time-posted'>{timeConversion(timePosted)}</div>
};

export default TimePosted;
