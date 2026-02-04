import styles from './Course.module.css'
const course1 = "HTML";

function Course(){

    const styles = {
        backgroundColor : "green"
    }
    return (
        <div className="card">               
        
            <img src="" alt="" />
            <h3>{course1}</h3>
            <p>This is code io's HTML course</p>
        </div>
    );
}
export default Course