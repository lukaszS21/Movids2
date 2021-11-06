import ReactPlayer from 'react-player'


function Films() {
    return(
        <div>
            <ReactPlayer controls url={process.env.PUBLIC_URL+'video/1.mp4'} />

            <img  src={process.env.PUBLIC_URL+'img/Ig.jpg'} />
        </div>

    )
}
export default Films;