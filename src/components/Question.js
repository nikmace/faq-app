const Question = ({ isCollapsed, handleClick, number }) => {
    return (
        <div className="question" onClick={handleClick}>
            <article className="question__title" style={{padding: `${isCollapsed ? '20px' : '30px 20px'}`}} onClick={handleClick}>
                <h2 className="question__title-text">Question number {number}</h2>
                <img className={`question__title-image ${isCollapsed ? 'rotateDown' : 'rotateUp'}`} src='images/arrow.png' alt="Arrow" />
            </article>

            {isCollapsed ? (
                <>
                </>
            ) : (
                <article>
                    <div className="question__answer" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </article>
            )}
        </div>
    )
}

export default Question;
