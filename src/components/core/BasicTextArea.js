import React from 'react'
import Forum from '@material-ui/icons/Forum';
import TweetButton from './ButtonGeneric';

const TextareaPage = () => {
    return (
        <div style={{border:'1px solid #999999',backgroundColor: "rgba(158, 158, 158, 0.15)" }}>
            <div style={{ margin: "5px 15px 10px 10px"}}>
                <Forum style={{ fontSize: 30 }} />
                <textarea placeholder="Tweet..." rows="3" style={{border:'1px solid #999999', width:'100%', marginBottom: '10px'}}></textarea>
                <TweetButton  color="#db3236" text="Tweet" ></TweetButton>
                <div style={{clear:'both'}}></div>
            </div>
        </div>
    )
}

export default TextareaPage;