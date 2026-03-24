export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0613",
      color: "white",
      padding: "60px",
      textAlign: "center"
    }}>
      <h1>NovaVision Studio</h1>
      <p>Site premium prêt 🚀</p>

      <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"40px", flexWrap:"wrap"}}>
        <img src="/images/mockup1.png" style={{width:"300px", borderRadius:"20px"}} />
        <img src="/images/mockup2.png" style={{width:"300px", borderRadius:"20px"}} />
      </div>
    </main>
  );
}