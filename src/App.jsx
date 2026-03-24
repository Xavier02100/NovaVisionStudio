export default function App(){
return(
<div style={{
minHeight:"100vh",
background:"radial-gradient(circle at 30% 20%, rgba(120,80,255,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,100,200,0.25), transparent 40%), #0b0613",
color:"white",
fontFamily:"Inter, sans-serif",
padding:"40px"
}}>

<div style={{display:"flex",justifyContent:"space-between",marginBottom:"80px"}}>
<h2>NovaVision Studio</h2>
<div style={{display:"flex",gap:"25px",opacity:0.7}}>
<span>Galerie</span>
<span>Services</span>
<span>Contact</span>
</div>
</div>

<div style={{display:"flex",gap:"40px",flexWrap:"wrap",alignItems:"center"}}>
<div style={{maxWidth:"600px"}}>
<h1 style={{fontSize:"64px",fontWeight:"900"}}>
Des sites <span style={{background:"linear-gradient(90deg,#c084fc,#f472b6)",WebkitBackgroundClip:"text",color:"transparent"}}>
haut de gamme
</span><br/>pour attirer plus de clients
</h1>
<p style={{opacity:0.7}}>Création de sites modernes et optimisés.</p>
</div>

<img src="/images/mockup1.png" style={{width:"420px",borderRadius:"20px"}}/>
</div>

<div style={{marginTop:"100px",textAlign:"center"}}>
<h2>Offres</h2>

<div style={{display:"flex",gap:"40px",justifyContent:"center",flexWrap:"wrap",marginTop:"40px"}}>

<div style={{background:"rgba(255,255,255,0.03)",padding:"25px",borderRadius:"20px",width:"300px"}}>
<h3>Site simple</h3>
<p>À partir de 390€</p>
</div>

<div style={{background:"linear-gradient(135deg, rgba(120,80,255,0.2), rgba(255,100,200,0.2))",padding:"25px",borderRadius:"20px",width:"300px"}}>
<h3>Site premium</h3>
<p>À partir de 690€</p>
</div>

</div>
</div>

</div>
)}
