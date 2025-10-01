
function BossElement(props)
{
    const boss=props.boss;

    return (
        <div className="card" style={{maxWidth:600}}>
        <header className="card-header">
            <p className="card-header-title">{boss.Boss}</p>
            <button className="card-header-icon" aria-label="more options">
            <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div className="card-content">
            <div className="content">
            <p>{boss.Image}</p>
            <img src={boss.Image}></img>
            <h3 className="subtitle is-5">Act {boss.Act}</h3>
            <h3 className="subtitle is-5">Average Rank: {boss.Average}</h3>
            <h3 className="subtitle is-5">Act Rank: {boss.Act_Rank}</h3>
            </div>
        </div>
        <footer className="card-footer">
            <a href={boss.Video} target="_blank">Boss Video (New Tab)</a>
        </footer>
        </div>
    )    
}

export default BossElement;