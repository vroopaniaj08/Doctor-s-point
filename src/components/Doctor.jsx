import { useSelector } from 'react-redux'
export default function Doctor(){
    let list = useSelector(state=>state.Lslice.value)
    return <>
        <h1 style={{marginTop:"150px"}}>hello</h1>{list.name}
    </>
}