import firstimg from './illustration-hero.svg'
// import img from './illustration-features-tab-1.svg'




export default function First(){
    return(
        
        <>
       
       <div className='bg-blue'> </div>
        <div className='first-img-container'>
        <img className='first-img' src={firstimg}  alt="img" />
        </div>


        <div className="firstContent" >
<h1 className="first-heading" > A Simple Bookmark Manager</h1>
<p className="first-paragraph"> A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>

<div className="buttons">
<div className="btnone"> <a className="btnnone" href=" " >Get it on Chrome</a> </div>
<div className="btntwo"> <a  className="btnntwo" href=" " >Get it on Firefox</a> </div>
</div>

</div>
        
        </>

    )
 


}