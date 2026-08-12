import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { Github, Linkedin, Instagram } from './icons';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

const EMAILJS_SERVICE_ID  = 'service_ss9exxe';
const EMAILJS_TEMPLATE_ID = 'template_wijdjs4';
const EMAILJS_PUBLIC_KEY  = 'V6ar5_ePXVXm0QjEE';

/* ════════════════════════════════════════════════════════
   Holographic AR city overlay — Canvas animation
   ════════════════════════════════════════════════════════ */
function TechCityImage() {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const stateRef  = useRef({ hov: false, mx: -999, my: -999 });

  /* sync hover + mouse into ref so canvas loop always has latest */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    stateRef.current.mx = e.clientX - r.left;
    stateRef.current.my = e.clientY - r.top;
  };
  const handleEnter = () => { stateRef.current.hov = true;  setHovered(true);  };
  const handleLeave = () => { stateRef.current.hov = false; stateRef.current.mx = -999; setHovered(false); };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── Building anchor points (where city towers are in the image) ── */
    const buildings = [
      { x: 0.50, y: 0.20, label: 'NODE_01', color: '#a78bfa', h: 0.32 },
      { x: 0.30, y: 0.35, label: 'NODE_02', color: '#60a5fa', h: 0.22 },
      { x: 0.68, y: 0.32, label: 'NODE_03', color: '#f472b6', h: 0.25 },
      { x: 0.18, y: 0.55, label: 'NODE_04', color: '#34d399', h: 0.18 },
      { x: 0.82, y: 0.50, label: 'NODE_05', color: '#fbbf24', h: 0.20 },
      { x: 0.42, y: 0.60, label: 'NODE_06', color: '#818cf8', h: 0.15 },
      { x: 0.72, y: 0.65, label: 'NODE_07', color: '#f472b6', h: 0.14 },
    ];

    /* ── Rising data columns per building ── */
    type Column = { bIdx: number; x: number; y: number; progress: number; speed: number; chars: string[]; alpha: number };
    const cols: Column[] = [];
    const CHARS = '01アイウエオカキクケコデータ∑∇∞⊕◆▲';
    buildings.forEach((b, bi) => {
      for (let c = 0; c < 2 + Math.floor(Math.random() * 3); c++) {
        cols.push({
          bIdx: bi,
          x: b.x + (Math.random() - 0.5) * 0.06,
          y: b.y,
          progress: Math.random(),
          speed: 0.0008 + Math.random() * 0.0012,
          chars: Array.from({ length: 10 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
          alpha: 0.5 + Math.random() * 0.5,
        });
      }
    });

    /* ── Sonar rings ── */
    type Ring = { bIdx: number; r: number; maxR: number; speed: number };
    const rings: Ring[] = buildings.map((_, bi) => ({
      bIdx: bi, r: Math.random() * 60, maxR: 55 + Math.random() * 30, speed: 0.4 + Math.random() * 0.3,
    }));

    /* ── Connection lines between buildings ── */
    const connections: [number, number][] = [
      [0,1],[0,2],[0,3],[0,4],[1,5],[2,4],[3,5],[4,6],[5,6],[1,3],
    ];

    /* ── Travelling packets along connections ── */
    type Packet = { conn: number; t: number; speed: number; color: string };
    const packets: Packet[] = connections.map((_, ci) => ({
      conn: ci, t: Math.random(), speed: 0.003 + Math.random() * 0.004,
      color: buildings[connections[ci][0]].color,
    }));

    /* ── Scan line ── */
    let scanY = 0;

    const t0 = performance.now();

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    /* ── helpers ── */
    function bx(b: typeof buildings[0]) { return b.x * W; }
    function by(b: typeof buildings[0]) { return b.y * H; }

    function drawGlowLine(x1:number,y1:number,x2:number,y2:number, color:string, alpha:number, blur=8) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.shadowColor = color;
      ctx.shadowBlur = blur;
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      ctx.restore();
    }

    function drawRoundRect(x:number,y:number,w:number,h:number,r:number,fill:string,stroke:string,alpha:number) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      ctx.shadowColor = stroke;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.fill(); ctx.stroke();
      ctx.restore();
    }

    function drawText(text:string, x:number, y:number, color:string, alpha:number, size=9, font='monospace') {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 6;
      ctx.font = `bold ${size}px ${font}`;
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    function frame(ts: number) {
      const dt  = ts - t0;
      W = canvas?.width || W;
      H = canvas?.height || H;
      const { hov, mx, my } = stateRef.current;
      const intensity = hov ? 1 : 0.45;

      ctx.clearRect(0, 0, W, H);

      /* ── 1. Holographic grid (subtle, always on) ── */
      ctx.save();
      ctx.globalAlpha = 0.06 * intensity;
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 0.6;
      const gs = 28;
      for (let gx = 0; gx < W; gx += gs) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
      for (let gy = 0; gy < H; gy += gs) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }
      ctx.restore();

      /* ── 2. Scan line (sweeps top→bottom) ── */
      scanY = (scanY + (hov ? 1.8 : 0.7)) % H;
      const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 8);
      scanGrad.addColorStop(0, 'rgba(99,102,241,0)');
      scanGrad.addColorStop(1, `rgba(99,102,241,${hov ? 0.35 : 0.14})`);
      ctx.save();
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 40, W, 48);
      // bright leading edge
      ctx.globalAlpha = hov ? 0.7 : 0.3;
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();
      ctx.restore();

      /* ── 3. Connection network ── */
      connections.forEach(([ai, bi]) => {
        const a = buildings[ai], b = buildings[bi];
        const ax = bx(a), ay = by(a), bxp = bx(b), byp = by(b);
        drawGlowLine(ax, ay, bxp, byp, '#6366f1', 0.18 * intensity, 4);
        // animated dashed flow
        ctx.save();
        ctx.globalAlpha = 0.3 * intensity;
        ctx.strokeStyle = a.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 8]);
        ctx.lineDashOffset = -(dt * 0.04);
        ctx.shadowColor = a.color;
        ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bxp, byp); ctx.stroke();
        ctx.restore();
      });

      /* ── 4. Travelling data packets ── */
      packets.forEach(p => {
        p.t += p.speed * (hov ? 2.5 : 1);
        if (p.t > 1) p.t = 0;
        const [ai, bi] = connections[p.conn];
        const a = buildings[ai], b = buildings[bi];
        const px = bx(a) + (bx(b) - bx(a)) * p.t;
        const py = by(a) + (by(b) - by(a)) * p.t;
        ctx.save();
        ctx.globalAlpha = 0.9 * intensity;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = hov ? 20 : 10;
        ctx.beginPath();
        ctx.arc(px, py, hov ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();
        // tail
        ctx.globalAlpha = 0.3 * intensity;
        const tailT = Math.max(0, p.t - 0.06);
        const tx2 = bx(a) + (bx(b) - bx(a)) * tailT;
        const ty2 = by(a) + (by(b) - by(a)) * tailT;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 4;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(tx2, ty2); ctx.stroke();
        ctx.restore();
      });

      /* ── 5. Sonar rings ── */
      rings.forEach(ring => {
        ring.r += ring.speed * (hov ? 2.2 : 1);
        if (ring.r > ring.maxR) ring.r = 0;
        const b = buildings[ring.bIdx];
        const alpha = (1 - ring.r / ring.maxR) * 0.5 * intensity;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(bx(b), by(b), ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      /* ── 6. Rising data columns ── */
      cols.forEach(col => {
        col.progress += col.speed * (hov ? 3 : 1);
        if (col.progress > 1.4) { col.progress = 0; col.chars = Array.from({ length: 10 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]); }
        const cx = col.x * W;
        const startY = col.y * H;
        const rise = col.progress * 80;
        col.chars.forEach((ch, i) => {
          const cy = startY - i * 11 - rise;
          if (cy < 0 || cy > H) return;
          const fade = 1 - i / col.chars.length;
          ctx.save();
          ctx.globalAlpha = fade * col.alpha * intensity * 0.75;
          ctx.fillStyle = buildings[col.bIdx].color;
          ctx.shadowColor = buildings[col.bIdx].color;
          ctx.shadowBlur = i === 0 ? 12 : 0;
          ctx.font = `bold ${i === 0 ? 10 : 8}px monospace`;
          ctx.fillText(ch, cx, cy);
          ctx.restore();
        });
      });

      /* ── 7. Building nodes + AR target boxes ── */
      buildings.forEach((b, bi) => {
        const bxp = bx(b), byp = by(b);
        const pulse = Math.sin(dt * 0.002 + bi) * 0.5 + 0.5;
        const isNear = mx !== -999 && Math.hypot(mx - bxp, my - byp) < 60;

        // core dot
        ctx.save();
        ctx.globalAlpha = (0.7 + pulse * 0.3) * intensity;
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = (isNear || hov) ? 28 : 12;
        ctx.beginPath();
        ctx.arc(bxp, byp, isNear ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // AR corner brackets (only when hovered or near)
        const boxW = 54, boxH = 28;
        const bxLeft = bxp - boxW / 2, bxTop = byp - boxH - 14;
        const showBox = hov || isNear;
        const boxAlpha = isNear ? 0.95 : 0.55;

        if (showBox) {
          const cLen = 8;
          ctx.save();
          ctx.globalAlpha = boxAlpha * intensity;
          ctx.strokeStyle = b.color;
          ctx.lineWidth = 1.5;
          ctx.shadowColor = b.color;
          ctx.shadowBlur = 10;
          // top-left
          ctx.beginPath(); ctx.moveTo(bxLeft, bxTop + cLen); ctx.lineTo(bxLeft, bxTop); ctx.lineTo(bxLeft + cLen, bxTop); ctx.stroke();
          // top-right
          ctx.beginPath(); ctx.moveTo(bxLeft + boxW - cLen, bxTop); ctx.lineTo(bxLeft + boxW, bxTop); ctx.lineTo(bxLeft + boxW, bxTop + cLen); ctx.stroke();
          // bottom-left
          ctx.beginPath(); ctx.moveTo(bxLeft, bxTop + boxH - cLen); ctx.lineTo(bxLeft, bxTop + boxH); ctx.lineTo(bxLeft + cLen, bxTop + boxH); ctx.stroke();
          // bottom-right
          ctx.beginPath(); ctx.moveTo(bxLeft + boxW - cLen, bxTop + boxH); ctx.lineTo(bxLeft + boxW, bxTop + boxH); ctx.lineTo(bxLeft + boxW, bxTop + boxH - cLen); ctx.stroke();
          // connector line to node
          ctx.globalAlpha = 0.4 * intensity;
          ctx.setLineDash([3, 3]);
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(bxp, byp - 4); ctx.lineTo(bxp, bxTop + boxH); ctx.stroke();
          ctx.restore();

          // text inside box
          drawText(b.label, bxLeft + 5, bxTop + 12, b.color, boxAlpha * intensity, 8);
          const val = (100 + Math.floor(Math.sin(dt * 0.001 + bi * 2.3) * 50 + 50)).toString();
          drawText(`${val} Mb/s`, bxLeft + 5, bxTop + 23, '#ffffff', 0.45 * intensity, 7);
        }
      });

      /* ── 8. Mouse spotlight (follows cursor) ── */
      if (mx > 0 && hov) {
        const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 90);
        spotGrad.addColorStop(0,   'rgba(139,92,246,0.15)');
        spotGrad.addColorStop(0.5, 'rgba(99,102,241,0.06)');
        spotGrad.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.save();
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, W, H);
        // crosshair
        ctx.globalAlpha = 0.35;
        ctx.strokeStyle = '#a78bfa';
        ctx.lineWidth = 0.8;
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(mx, 0); ctx.lineTo(mx, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W, my); ctx.stroke();
        ctx.restore();
      }

      /* ── 9. Corner HUD overlays ── */
      if (hov) {
        // top-left status panel
        drawRoundRect(10, 10, 120, 38, 4, 'rgba(10,8,30,0.7)', '#6366f1', 0.85);
        drawText('● SYSTEM ONLINE',  18, 25, '#34d399', 0.9, 8);
        drawText(`NODES: ${buildings.length} / PKT: ${packets.length}`, 18, 38, '#818cf8', 0.7, 7);

        // top-right data rate
        drawRoundRect(W - 130, 10, 120, 38, 4, 'rgba(10,8,30,0.7)', '#f472b6', 0.85);
        const rate = (2.4 + Math.sin(dt * 0.002) * 0.8).toFixed(1);
        drawText('DATA FLOW', W - 122, 25, '#f472b6', 0.9, 8);
        drawText(`${rate} GB/s ↑↑↑`, W - 122, 38, '#fbbf24', 0.8, 8);
      }

      animRef.current = requestAnimationFrame(frame);
    }

    animRef.current = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div
      className="relative w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(99,102,241,0.3)] cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Static image */}
      <img
        src="/tech_city_contact.jpg"
        alt="Tech city isometric illustration"
        className={`w-full block select-none transition-all duration-700 ${hovered ? 'brightness-110 saturate-125' : 'brightness-90'}`}
        draggable={false}
      />

      {/* Holographic canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Edge glow frame */}
      <div className={`absolute inset-0 pointer-events-none rounded-3xl transition-all duration-700 ${hovered ? 'shadow-[inset_0_0_30px_rgba(99,102,241,0.25),inset_0_0_60px_rgba(139,92,246,0.1)]' : 'shadow-[inset_0_0_10px_rgba(99,102,241,0.08)]'}`} />
    </div>
  );
}




export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:    formData.name,
        from_email:   formData.email,
        message:      formData.message,
        reply_to:     formData.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSending(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    })
    .catch(() => {
      setIsSending(false);
      alert(language === 'fr' ? 'Erreur lors de l\'envoi. Réessaie plus tard.' : 'Failed to send. Please try again.');
    });
  };

  const inputClass =
    'w-full bg-[#120f2d] border border-indigo-500/15 hover:border-indigo-500/35 focus:border-portfolio-purple ' +
    'text-white rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-200 ' +
    'placeholder:text-slate-600 focus:bg-[#16133a]';

  return (
    <footer id="contact" className="bg-portfolio-dark pt-20 pb-12 border-t border-indigo-500/8 relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(139,92,246,0.06)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══ Main 2-column grid ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-20">

          {/* ── LEFT: Form (matches image 1 style) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <p className="text-slate-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              {language === 'fr' ? "CONTACTEZ-MOI" : "CONTACT ME"}
            </p>

            {/* Big title */}
            <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-10">
              Contact<span className="text-portfolio-purple">.</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {language === 'fr' ? "Votre nom" : "Your name"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'fr' ? "Comment vous appelez-vous ?" : "What's your name?"}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {language === 'fr' ? "Votre e-mail" : "Your e-mail"}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder={language === 'fr' ? "Quelle est votre adresse e-mail ?" : "What's your e-mail?"}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {language === 'fr' ? "Votre message" : "Your message"}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'fr' ? "Que souhaitez-vous me dire ?" : "What would you like to tell me?"}
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 bg-gradient-to-r from-portfolio-purple to-portfolio-violet
                           hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 px-8 rounded-xl
                           shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)]
                           transition-all duration-300 cursor-pointer disabled:opacity-60 text-sm tracking-wide"
              >
                {sent ? (
                  <>✅ {language === 'fr' ? "Message envoyé !" : "Sent!"}</>
                ) : isSending ? (
                  <>{language === 'fr' ? "Envoi en cours..." : "Sending..."}</>
                ) : (
                  <><Send size={14}/>{language === 'fr' ? "Envoyer" : "Send"}</>
                )}
              </motion.button>
            </form>


          </motion.div>

          {/* ── RIGHT: Interactive 3D tech city image ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[380px] lg:h-[520px]"
          >
            <TechCityImage />
          </motion.div>
        </div>

        {/* ── Footer bottom (Reference style) ── */}
        <div className="border-t border-slate-900/60 pt-12 flex flex-col items-center justify-center text-center space-y-6">
          {/* Designed and Developed by Esther MENSAH */}
          <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">
            Designed and Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple via-violet-400 to-portfolio-violet font-extrabold">Esther MENSAH</span>
          </h3>

          {/* Social icons row (Github, Linkedin, Instagram, Email) */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/esther-dorcas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-portfolio-purple hover:bg-portfolio-purple/20 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/esthermensah1624/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-portfolio-purple hover:bg-portfolio-purple/20 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-portfolio-purple hover:bg-portfolio-purple/20 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="mailto:doudedjimensah16@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-portfolio-purple hover:bg-portfolio-purple/20 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright notice */}
          <p className="text-slate-500 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Esther MENSAH — {language === 'fr' ? "Tous droits réservés" : "All rights reserved"}
          </p>
        </div>

      </div>
    </footer>
  );
}
