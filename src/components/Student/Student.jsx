import Score from "../Score/Score";

function Student({student: person}){
    
    const scores = person.scores.map((s,i) =>{
        return(
            <Score score={s} key = {i}/>
        )
    })
    return( 
<div>
<h1>{person.name}</h1>
<h2>{person.bio}</h2> 
<div>
{scores}
</div>

</div>
);


}

export default Student;



