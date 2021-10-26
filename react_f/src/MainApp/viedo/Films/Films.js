import ReactPlayer from 'react-player'

function Films() {
    return(
        <div>
            <ReactPlayer controls url={process.env.PUBLIC_URL+'1.mp4'} />

        </div>

    )
}
export default Films;