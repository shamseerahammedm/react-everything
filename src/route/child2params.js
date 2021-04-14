import React from 'react'
import { useParams } from 'react-router-dom';
const ChildTwoParams = () => {
    let { childId } = useParams();
    return (
        <div>
            ChildTwoParams { childId }
        </div>
    )
}

export default ChildTwoParams;
