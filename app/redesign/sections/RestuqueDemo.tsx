"use client";
import { useState, useEffect, useRef } from "react";

type Screen = "splash" | "login" | "menu" | "list" | "detail";
interface Tx { id: string; code: string; date: string; dep: string; ret: string; employee: string; dept: string; days: number; cost: string; notes: string; dest: string; lastApproval: string; }

const TXNS: Tx[] = [
  { id:"1", code:"TRX/REQ/2026/001", date:"10-Mar-2026", dep:"12-Mar-2026", ret:"15-Mar-2026", employee:"John Doe", dept:"Sales Department", days:3, cost:"3,500,000", notes:"Client Meeting Jakarta", dest:"JKT", lastApproval:"Manager A" },
  { id:"2", code:"TRX/REQ/2026/002", date:"09-Mar-2026", dep:"11-Mar-2026", ret:"14-Mar-2026", employee:"Jane Smith", dept:"Marketing", days:3, cost:"2,100,000", notes:"Event Survey", dest:"SBY", lastApproval:"Director B" },
  { id:"3", code:"TRX/REQ/2026/003", date:"08-Mar-2026", dep:"10-Mar-2026", ret:"12-Mar-2026", employee:"Michael Johnson", dept:"IT Department", days:2, cost:"1,800,000", notes:"Server Maintenance", dest:"BDG", lastApproval:"VP Tech" },
  { id:"4", code:"TRX/REQ/2026/004", date:"07-Mar-2026", dep:"15-Mar-2026", ret:"18-Mar-2026", employee:"Emily Davis", dept:"HR Department", days:3, cost:"2,500,000", notes:"Campus Recruitment", dest:"MDN", lastApproval:"Head of HR" },
  { id:"5", code:"TRX/REQ/2026/005", date:"06-Mar-2026", dep:"12-Mar-2026", ret:"13-Mar-2026", employee:"David Wilson", dept:"Operations", days:1, cost:"950,000", notes:"Site Visit", dest:"SMG", lastApproval:"Supervisor" },
];

function StatusBar({ dark = false }: { dark?: boolean }) {
  const [time, setTime] = useState("17:25");
  useEffect(() => {
    const t = new Date();
    setTime(`${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`);
  }, []);
  const c = dark ? "#fff" : "#111";
  return (
    <div style={{ display:"flex", justifyContent:"space-between", padding:"2px 14px 0", fontSize:"11px", fontWeight:600, color:c }}>
      <span>{time}</span>
      <div style={{ display:"flex", gap:"4px", alignItems:"center" }}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill={c}><rect x="0" y="6" width="3" height="4" rx="0.5" opacity="0.4"/><rect x="4" y="4" width="3" height="6" rx="0.5" opacity="0.6"/><rect x="8" y="1" width="3" height="9" rx="0.5" opacity="0.8"/><rect x="12" y="0" width="2" height="10" rx="0.5"/></svg>
        <svg width="14" height="10" viewBox="0 0 16 12" fill={c}><path d="M8 3c2.76 0 5.22 1.12 7 2.97L16 4.89C13.95 2.71 11.13 1.5 8 1.5S2.05 2.71 0 4.89L1 5.97C2.78 4.12 5.24 3 8 3z"/><path d="M8 6c1.86 0 3.55.76 4.78 1.98L13.78 6.9C12.28 5.41 10.24 4.5 8 4.5S3.72 5.41 2.22 6.9L3.22 7.98C4.45 6.76 6.14 6 8 6z"/><circle cx="8" cy="10" r="1.5"/></svg>
        <svg width="24" height="11" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={c} strokeOpacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="2" fill={c}/><path d="M23 4v4c.82-.37 1.38-1.2 1.38-2s-.56-1.63-1.38-2z" fill={c} fillOpacity="0.4"/></svg>
      </div>
    </div>
  );
}

function Notch() {
  return <div style={{ display:"flex", justifyContent:"center", paddingTop:"4px" }}><div style={{ width:"90px", height:"22px", background:"#000", borderRadius:"11px" }}/></div>;
}

function Toast({ msg, type }: { msg: string; type: "approve"|"reject" }) {
  return (
    <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background: type==="approve" ? "rgba(34,197,94,0.95)" : "rgba(239,68,68,0.95)", color:"#fff", padding:"18px 24px", borderRadius:"14px", fontSize:"13px", fontWeight:700, textAlign:"center", zIndex:999, boxShadow:"0 8px 24px rgba(0,0,0,0.35)", minWidth:"140px" }}>
      {type==="approve" ? "✅" : "❌"}<br/>{msg}
    </div>
  );
}

export default function RestuqueDemo() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [txns, setTxns] = useState<Tx[]>(TXNS);
  const [selected, setSelected] = useState<Tx | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "approve"|"reject" } | null>(null);
  const [swipeX, setSwipeX] = useState<Record<string, number>>({});
  const [todayDate, setTodayDate] = useState("Hari ini");
  const dragStart = useRef<Record<string, number>>({});

  useEffect(() => {
    const d = new Date();
    setTodayDate("Hari ini, " + d.toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' }));
    
    if (screen === "splash") {
      const t = setTimeout(() => setScreen("login"), 3000);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const doAction = (tx: Tx, action: "approve"|"reject") => {
    setToast({ msg: action==="approve" ? "Dokumen Disetujui!" : "Dokumen Ditolak!", type: action });
    setTimeout(() => { setToast(null); setTxns(prev => prev.filter(t => t.id !== tx.id)); setSelected(null); setScreen("list"); }, 1500);
  };

  const onDragStart = (id: string, x: number) => { dragStart.current[id] = x; };
  const onDragMove = (id: string, x: number) => {
    const delta = x - (dragStart.current[id] ?? x);
    setSwipeX(prev => ({ ...prev, [id]: Math.max(-100, Math.min(100, delta)) }));
  };
  const onDragEnd = (tx: Tx) => {
    const offset = swipeX[tx.id] ?? 0;
    if (offset > 70) doAction(tx, "reject");
    else if (offset < -70) doAction(tx, "approve");
    setSwipeX(prev => ({ ...prev, [tx.id]: 0 }));
    dragStart.current[tx.id] = 0;
  };

  const menus = [
    { icon:"✈️", label:"Menu 1", badge:txns.length, color:"#9c27b0", onClick:() => setScreen("list") },
    { icon:"👥", label:"Menu 2", badge:0, color:"#4caf50" },
    { icon:"🛒", label:"Menu 3", badge:0, color:"#1976d2" },
    { icon:"🔧", label:"Menu 4", badge:0, color:"#607d8b" },
    { icon:"💰", label:"Menu 5", badge:0, color:"#ff9800" },
    { icon:"📦", label:"Menu 6", badge:0, color:"#ff9800" },
    { icon:"✅", label:"Menu 7", badge:0, color:"#1976d2" },
    { icon:"👔", label:"Menu 8", badge:0, color:"#e91e63" },
  ];

  return (
    <div style={{ width:"280px", height:"580px", background:"#1a1a1a", borderRadius:"44px", padding:"6px", boxShadow:"0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.6)", flexShrink:0, userSelect:"none" }}>
      <div style={{ width:"100%", height:"100%", background:"#fff", borderRadius:"38px", overflow:"hidden", position:"relative", display:"flex", flexDirection:"column" }}>

        {/* SPLASH */}
        {screen === "splash" && (
          <div style={{ flex:1, background:"#f5f5f5", display:"flex", flexDirection:"column" }}>
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", top:0, right:0, width:"130px", height:"90px", background:"linear-gradient(135deg,#4fc3f7,#1976d2)", borderRadius:"0 38px 0 70px", opacity:.85 }}/>
              <div style={{ position:"absolute", top:16, right:16, width:"44px", height:"44px", borderRadius:"50%", background:"#42a5f5", opacity:.6 }}/>
              <Notch/><StatusBar/>
            </div>
            <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"12px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <div style={{ width:"52px", height:"52px", background:"linear-gradient(135deg,#1565c0 55%,#f57c00 55%)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:"26px", fontWeight:900 }}>R</div>
                <div><div style={{ fontSize:"20px", fontWeight:800, color:"#1565c0" }}>Restuque</div><div style={{ fontSize:"10px", color:"#42a5f5", fontWeight:500 }}>Mobile Approval</div></div>
              </div>
              <div style={{ width:"160px", height:"140px", background:"linear-gradient(135deg,#e3f2fd,#bbdefb)", borderRadius:"16px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"60px" }}>📱</div>
              <div style={{ display:"flex", gap:"6px" }}>
                {[0,1,2].map(i => <div key={i} style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#1976d2", opacity: i===1?1:0.4 }}/>)}
              </div>
            </div>
          </div>
        )}

        {/* LOGIN */}
        {screen === "login" && (
          <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
            <Notch/><StatusBar/>
            <div style={{ 
              position: "relative",
              background: "linear-gradient(135deg, #1565c0, #1e88e5, #42a5f5)", 
              height: "160px", 
              flexShrink: 0,
              width: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {/* Decorative shapes */}
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.0))" }} />
              <div style={{ position: "absolute", bottom: "-30px", right: "-10px", width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.0))" }} />
              <div style={{ position: "absolute", top: "40px", right: "20px", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(245,124,0,0.8)", filter: "blur(8px)" }} />
              
              {/* Logo text instead of image */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", letterSpacing: "1px", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>Restuque</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Mobile Approval</div>
              </div>
            </div>
            <div style={{ flex:1, padding:"16px 18px 12px", display:"flex", flexDirection:"column", gap:"12px", overflow:"auto" }}>
              <div style={{ fontSize:"13px", color:"#555" }}>Hi! Selamat Datang..</div>
              <div style={{ borderBottom:"1px solid #e0e0e0", paddingBottom:"6px", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ color:"#bbb" }}>👤</span>
                <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Masukkan username" style={{ border:"none", outline:"none", flex:1, fontSize:"12px", color:"#333", background:"transparent" }}/>
              </div>
              <div style={{ borderBottom:"1px solid #e0e0e0", paddingBottom:"6px", display:"flex", alignItems:"center", gap:"8px" }}>
                <span style={{ color:"#bbb" }}>🔒</span>
                <input value={password} onChange={e=>setPassword(e.target.value)} type={showPass?"text":"password"} placeholder="Masukkan kata sandi" style={{ border:"none", outline:"none", flex:1, fontSize:"12px", color:"#333", background:"transparent" }}/>
                <button onClick={()=>setShowPass(!showPass)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"12px", color:"#bbb" }}>{showPass?"👁️":"🙈"}</button>
              </div>
              {loginError && <div style={{ color:"#ef4444", fontSize:"10px", textAlign:"center" }}>{loginError}</div>}
              <button onClick={() => { if(username==="username"&&password==="password"){setLoginError("");setScreen("menu");}else setLoginError("Username atau password salah"); }} style={{ padding:"11px", background:"linear-gradient(90deg,#f57c00,#ffa726)", color:"#fff", border:"none", borderRadius:"8px", fontSize:"13px", fontWeight:700, cursor:"pointer", marginTop:"4px" }}>Login</button>
              
              <div style={{ background:"#f4f9ff", border:"1px solid #e1edfd", borderRadius:"8px", padding:"10px", marginTop:"8px" }}>
                <div style={{ fontSize:"10px", fontWeight:700, color:"#1565c0", marginBottom:"6px", display:"flex", alignItems:"center", gap:"4px" }}>
                  <span>🔑</span> Demo Login Credentials:
                </div>
                <div style={{ fontSize:"9px", color:"#1565c0", marginBottom:"2px" }}>
                  <span style={{ fontWeight:600 }}>Username:</span> username
                </div>
                <div style={{ fontSize:"9px", color:"#1565c0" }}>
                  <span style={{ fontWeight:600 }}>Password:</span> password
                </div>
              </div>

              <div style={{ marginTop:"auto", textAlign:"center" }}>
                <div style={{ fontSize:"9px", color:"#1565c0", fontWeight:600 }}>Version 1.0.0</div>
                <div style={{ fontSize:"9px", color:"#f57c00" }}>© 2026 Restuque. All rights reserved.</div>
              </div>
            </div>
          </div>
        )}

        {/* MENU */}
        {screen === "menu" && (
          <div style={{ flex:1, background:"#f0f4f8", display:"flex", flexDirection:"column", overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(135deg,#1565c0,#1e88e5)", paddingBottom:"36px", flexShrink:0, position: "relative" }}>
              <Notch/><StatusBar dark/>
              <button onClick={() => { setUsername(""); setPassword(""); setScreen("login"); }} style={{ position:"absolute", top:"42px", right:"14px", background:"none", border:"none", color:"#fff", cursor:"pointer", padding:"4px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </button>
              <div style={{ padding:"8px 14px 0" }}>
                <div style={{ fontSize:"9px", color:"rgba(255,255,255,.7)" }}>{todayDate}</div>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginTop:"6px" }}>
                  <div style={{ width:"30px", height:"30px", borderRadius:"50%", background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"14px" }}>👤</div>
                  <div>
                    <div style={{ color:"#fff", fontSize:"12px", fontWeight:700 }}>Hi, {username || "user"}!</div>
                    <div style={{ color:"rgba(255,255,255,.8)", fontSize:"9px" }}>Ada dokumen yang belum kamu restui nih</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background:"#fff", borderRadius:"18px 18px 0 0", marginTop:"-20px", flex:1, padding:"24px 12px 14px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px", alignContent:"start", overflow:"auto", position:"relative" }}>
              {menus.map((m,i) => (
                <button key={i} onClick={m.onClick} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"4px", background:"none", border:"none", cursor: m.onClick?"pointer":"default", padding:"4px" }}>
                  <div style={{ position:"relative" }}>
                    <div style={{ width:"46px", height:"46px", borderRadius:"50%", background:m.color, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", boxShadow: m.onClick?"0 4px 12px rgba(0,0,0,.2)":"none" }}>{m.icon}</div>
                    {m.badge > 0 && <div style={{ position:"absolute", top:"-3px", right:"-3px", background:"#f44336", color:"#fff", borderRadius:"50%", width:"16px", height:"16px", fontSize:"9px", fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>{m.badge}</div>}
                  </div>
                  <span style={{ fontSize:"9px", color:"#555", fontWeight:500, textAlign:"center", lineHeight:1.2 }}>{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* LIST */}
        {screen === "list" && (
          <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(135deg,#1565c0,#1e88e5)", flexShrink:0 }}>
              <Notch/><StatusBar dark/>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 14px 10px" }}>
                <button onClick={()=>setScreen("menu")} style={{ background:"none", border:"none", color:"#fff", fontSize:"16px", cursor:"pointer" }}>‹</button>
                <span style={{ color:"#fff", fontSize:"13px", fontWeight:700 }}>Menu 1 ({txns.length})</span>
                <span style={{ color:"#fff", fontSize:"14px" }}>🔍</span>
              </div>
            </div>
            <div style={{ flex:1, background:"#f5f7fa", overflow:"auto", padding:"8px" }}>
              <div style={{ display:"flex", gap:"6px", marginBottom:"8px" }}>
                {["Filter","Urutkan"].map(lb => <button key={lb} style={{ padding:"4px 10px", fontSize:"10px", background:"#fff", border:"1px solid #e0e0e0", borderRadius:"6px", color:"#555", cursor:"pointer" }}>{lb}</button>)}
              </div>
              <div style={{ fontSize:"9px", color:"#aaa", marginBottom:"6px", textAlign:"center" }}>← Swipe kiri = Approve &nbsp;|&nbsp; Swipe kanan = Reject →</div>
              {txns.length === 0 && <div style={{ textAlign:"center", color:"#aaa", fontSize:"12px", marginTop:"40px" }}>Tidak ada transaksi</div>}
              {txns.map(tx => {
                const ox = swipeX[tx.id] ?? 0;
                const bg = ox > 30 ? `rgba(239,68,68,${Math.min(ox/100,.4)})` : ox < -30 ? `rgba(34,197,94,${Math.min(-ox/100,.4)})` : "#fff";
                return (
                  <div key={tx.id} style={{ marginBottom:"6px", position:"relative", overflow:"hidden", borderRadius:"10px" }}>
                    {ox > 40 && <div style={{ position:"absolute", left:"8px", top:"50%", transform:"translateY(-50%)", color:"#ef4444", fontSize:"11px", fontWeight:700 }}>✕ Tolak</div>}
                    {ox < -40 && <div style={{ position:"absolute", right:"8px", top:"50%", transform:"translateY(-50%)", color:"#22c55e", fontSize:"11px", fontWeight:700 }}>✓ Setuju</div>}
                    <div
                      onClick={() => { if(Math.abs(ox)<10){ setSelected(tx); setScreen("detail"); }}}
                      onMouseDown={e => onDragStart(tx.id, e.clientX)}
                      onMouseMove={e => { if(dragStart.current[tx.id]) onDragMove(tx.id, e.clientX); }}
                      onMouseUp={() => onDragEnd(tx)}
                      onMouseLeave={() => { if(swipeX[tx.id]) onDragEnd(tx); }}
                      onTouchStart={e => onDragStart(tx.id, e.touches[0].clientX)}
                      onTouchMove={e => onDragMove(tx.id, e.touches[0].clientX)}
                      onTouchEnd={() => onDragEnd(tx)}
                      style={{ background:bg, border:"1px solid #e8edf2", borderRadius:"10px", padding:"8px 10px", cursor:"pointer", transition: ox===0?"transform 0.2s":"none", transform:`translateX(${ox}px)` }}
                    >
                      <div style={{ color:"#1565c0", fontSize:"9px", fontWeight:700 }}>{tx.code} <span style={{ color:"#f57c00" }}>{tx.date}</span></div>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2px", marginTop:"4px" }}>
                        {[["Tgl Berangkat",tx.dep],["Tgl Kembali",tx.ret],["Nama Karyawan",tx.employee],["Departemen",tx.dept],["Lama (hari)",String(tx.days)],["Total Biaya",tx.cost]].map(([k,v])=>(
                          <div key={k}><div style={{ fontSize:"8px", color:"#999" }}>{k}</div><div style={{ fontSize:"9px", color:"#333", fontWeight:600 }}>{v}</div></div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* DETAIL */}
        {screen === "detail" && selected && (
          <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(135deg,#1565c0,#1e88e5)", flexShrink:0 }}>
              <Notch/><StatusBar dark/>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"6px 14px 10px", position:"relative" }}>
                <button onClick={()=>setScreen("list")} style={{ position:"absolute", left:"14px", background:"none", border:"none", color:"#fff", fontSize:"16px", cursor:"pointer" }}>‹</button>
                <span style={{ color:"#fff", fontSize:"13px", fontWeight:700 }}>Detail Dokumen</span>
              </div>
            </div>
            <div style={{ flex:1, overflow:"auto", background:"#f5f7fa", padding:"8px" }}>
              {[
                { title:"Informasi Umum", content: (
                  <div>
                    <div style={{ color:"#1565c0", fontSize:"9px", fontWeight:700 }}>{selected.code} <span style={{ color:"#f57c00" }}>{selected.date}</span></div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px 8px", marginTop:"6px" }}>
                      {[["Tgl Rencana Berangkat",selected.dep],["Tgl Rencana Kembali",selected.ret],["Nama Karyawan",selected.employee],["Departemen",selected.dept],["Lama Perjalanan (hari)",String(selected.days)],["Total Biaya",selected.cost],["Keterangan",selected.notes],["Tujuan",selected.dest],["Last Approval",selected.lastApproval],["Pending Duration","-"]].map(([k,v])=>(
                        <div key={k}><div style={{ fontSize:"8px", color:"#999" }}>{k}</div><div style={{ fontSize:"9px", color:"#333", fontWeight:600 }}>{v}</div></div>
                      ))}
                    </div>
                  </div>
                )},
                { title:"Rincian Informasi", content: <div style={{ fontSize:"9px", color:"#999" }}>Tidak ada rincian tambahan.</div> },
                { title:"Riwayat Persetujuan", content: (
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontSize:"9px", color:"#1565c0", fontWeight:600 }}>{selected.lastApproval}</span>
                    <span style={{ fontSize:"9px", color:"#999" }}>{selected.date}</span>
                    <span style={{ fontSize:"8px", background:"#fff3e0", color:"#f57c00", border:"1px solid #f57c00", borderRadius:"4px", padding:"1px 5px" }}>waiting</span>
                  </div>
                )},
                { title:"Lampiran", content: <div style={{ fontSize:"9px", color:"#999" }}>Tidak ada lampiran.</div> },
              ].map(sec => (
                <div key={sec.title} style={{ background:"#fff", borderRadius:"10px", marginBottom:"6px", overflow:"hidden" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 10px", borderBottom:"2px solid #f57c00" }}>
                    <span style={{ fontSize:"10px", fontWeight:700, color:"#333" }}>{sec.title}</span>
                    <span style={{ fontSize:"12px", color:"#999" }}>∧</span>
                  </div>
                  <div style={{ padding:"8px 10px" }}>{sec.content}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:"8px", padding:"10px 12px", background:"#fff", borderTop:"1px solid #eee", flexShrink:0 }}>
              <button onClick={()=>doAction(selected,"approve")} style={{ flex:1, padding:"10px", background:"#f57c00", color:"#fff", border:"none", borderRadius:"8px", fontSize:"12px", fontWeight:700, cursor:"pointer" }}>Approve</button>
              <button onClick={()=>doAction(selected,"reject")} style={{ flex:1, padding:"10px", background:"#fff", color:"#f57c00", border:"2px solid #f57c00", borderRadius:"8px", fontSize:"12px", fontWeight:700, cursor:"pointer" }}>Reject</button>
            </div>
          </div>
        )}

        {toast && <Toast msg={toast.msg} type={toast.type}/>}
        <div style={{ position:"absolute", bottom:"6px", left:"50%", transform:"translateX(-50%)", width:"80px", height:"4px", background:"#000", borderRadius:"2px", opacity:.2 }}/>
      </div>
    </div>
  );
}
