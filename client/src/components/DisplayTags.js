import React from 'react'

const DisplayTags = ({tags, questionTags, setQuestionTags}) => {

    const handleSetTag = ({name, id}) => {
        setQuestionTags([...questionTags, {name, id}]);
    };

    
    return (
        <div className="display_tag_container">
            {tags.map(tag => (
                <div key={tag._id} className="display_tag" onClick={() => handleSetTag({name: tag.tagName, id: tag._id})}>
                    
                    <div className="display_tag_header">
                        <span className="display_tag_header_title">{tag.tagName}</span>
                        <span className="display_tag_header_followers"><i class="fa fa-fire" aria-hidden="true"></i> { tag.followers.length}</span>
                    </div>
                    <div className="display_tag_body">
                        {tag.details}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayTags
