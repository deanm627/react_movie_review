import { useState } from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    
    .reviewButton {
        display: block;
        color: teal;
        border: none;
        padding: 0;
    }

    input {
        display: block;
        margin-top: 5px;
    }

    .formButtons {
        display: flex;
    }

    .formButton {
        margin: 5px 45px 0 0;
    }

`

function UserReviewForm ({nameChange, ratingChange, nameValue, ratingValue, onSave, onCancel}) {
    return (
        <>
            <input type='text' onChange={nameChange} value={nameValue} placeholder="Your Name" />
            <input type='number' onChange={ratingChange} value={ratingValue} placeholder="Rating: 1-10" />
            <div className='formButtons'>
                <button className="formButton" onClick={onSave}>Save</button>
                <button className="formButton" onClick={onCancel}>Cancel</button>
            </div>
            
        </>
        
    )
}

export const UserReview = () => {
    const [formStatus, setFormStatus] = useState(false);
    const [buttonText, setButtonText] = useState('Click here to add your own review');
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState('');

    function handleClick() {
        setFormStatus(true);
    }

    function handleNameChange(e) {
        setUserName(e.target.value);
    }

    function handleRatingChange(e) {
        setUserRating(e.target.value);
    }

    function handleSave() {
        if (userName && userRating) {
            setButtonText(`${userName}'s Rating: ${userRating}/10`);
            setFormStatus(false);
            return;
        }
        alert('Fill in both fields, then click Save');
    }

    function handleCancel() {
        setFormStatus(false);
        setUserName('');
        setUserRating('');
    }

    return (
        <OuterWrapper>
            <button className="reviewButton" onClick={handleClick}>
                {buttonText}
            </button>
            {formStatus ? 
                <UserReviewForm 
                    nameChange={handleNameChange} 
                    ratingChange={handleRatingChange} 
                    nameValue={userName}
                    ratingValue={userRating}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
                : null
            }
        </OuterWrapper>
    )
}