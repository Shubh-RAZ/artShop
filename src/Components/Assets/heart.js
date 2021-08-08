import React from "react";

const Heart = (props) => {
    return ( 
        <React.Fragment>
            <svg width="100%" height="100%" viewBox="0 0 40 40" fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M35.7075 4.17317C33.7302 2.66577 31.5484 1.90131 29.2224 1.90131C26.2876 1.90131 23.1176 3.15389 19.9999 5.53577C16.8823 3.15389 13.7122 1.90131 10.7775 1.90131C8.4515 1.90131 6.26961 2.66577 4.29232 4.17317C1.39932 6.37898 -0.0442284 9.1625 0.00103209 12.4463C0.156684 23.6909 18.4167 36.9593 19.1939 37.5186L19.9999 38.0987L20.806 37.5186C21.5833 36.9593 39.8434 23.6909 39.9988 12.4463C40.0441 9.1625 38.6005 6.37898 35.7075 4.17317ZM28.303 27.417C24.9225 30.8171 21.5112 33.5231 19.9999 34.6758C18.4887 33.5231 15.0774 30.8173 11.6968 27.417C5.90514 21.5918 2.8151 16.4012 2.76064 12.4065C2.72789 10.0123 3.77642 8.03706 5.96585 6.36775C7.45117 5.23514 9.07006 4.66092 10.7775 4.66092C14.0088 4.66092 17.0952 6.67299 19.1151 8.36087L19.9999 9.10013L20.8847 8.36087C22.9047 6.67299 25.9911 4.66092 29.2224 4.66092C30.9298 4.66092 32.5487 5.23514 34.034 6.36775C36.2234 8.03706 37.272 10.0123 37.2392 12.4065C37.1848 16.4014 34.0945 21.5918 28.303 27.417Z" fill={props.color}/>
</svg>

        </React.Fragment>
     );
}
 
export default Heart;